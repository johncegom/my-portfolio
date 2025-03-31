import { useEffect, useState } from "react";
import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../services/firebase/Firebase";

import { ProjectsType, ProjectType, SkillsType } from "../types/types";

/**
 * Custom hook to fetch and subscribe to projects from Firebase Firestore.
 *
 * This hook establishes a real-time connection to the "projects" collection,
 * retrieves and transforms project documents, and maintains the state with
 * the latest data. It automatically orders projects by title.
 *
 * @returns {Object} An object containing:
 *   - projects: An array of project objects with the following properties:
 *     - id: Unique identifier of the project
 *     - title: Title of the project
 *     - image: Image URL of the project
 *     - repo: Repository URL of the project
 *     - technologies: Technologies used in the project
 *     - text: English description text of the project
 *     - textVie: Vietnamese description text of the project
 *     - link: Live demonstration link of the project
 *     - type: Type/category of the project
 */
export function useProjects() {
  // State to store projects data
  const [projects, setProjects] = useState<ProjectsType>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    try {
      // Reference to projects collection
      const projectsCollectionRef = collection(db, "projects");
      // Query to get projects ordered by title
      const projectsQuery = query(projectsCollectionRef, orderBy("title"));

      // Real-time subscription to projects data
      const unsubscribe = onSnapshot(projectsQuery, (snapshot) => {
        // Transform Firestore documents into ProjectType objects
        const projectsData = snapshot.docs.map((doc) => {
          return mapFirestoreDocToProject(doc);
        });

        // Update state with the latest projects
        setProjects(projectsData);

        // Data fetched, set loading to false
        setLoading(false);
      });

      // Cleanup function to unsubscribe when component unmounts
      return () => unsubscribe();
    } catch (err) {
      return () => {};
    }
  }, []);

  // Return projects data
  return { projects, loading };
}

/**
 * Converts a Firestore document to a ProjectType object.
 *
 * @param doc - The Firestore document data to be converted
 * @returns A ProjectType object with data from the Firestore document
 *
 * @remarks
 * This function maps the Firestore document fields to the corresponding ProjectType properties.
 * If a field is missing in the Firestore document, an empty string is used as a default value.
 */
function mapFirestoreDocToProject(doc: DocumentData): ProjectType {
  const data = doc.data();
  return {
    id: doc.id,
    title: data.title || "",
    image: data.image || "",
    repo: data.repo || "",
    technologies: data.technologies || "",
    text: data.text || "",
    textVie: data.textVie || "",
    link: data.link || "",
    type: data.type || "",
  };
}

/**
 * A custom hook that fetches and provides real-time updates for skills data from Firebase.
 *
 * This hook connects to the "skills" collection in Firestore and sets up a real-time listener
 * using onSnapshot. It extracts the name field from each document and maintains the state
 * with the latest skills data.
 *
 * @returns An object containing the skills array with skill names
 * @example
 * ```tsx
 * const { skills } = useSkills();
 * // skills will be an array of skill names like ['JavaScript', 'React', 'Node.js']
 * ```
 */
export function useSkills() {
  // State to store skills data
  const [skills, setSkills] = useState<SkillsType>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    try {
      // Reference to skills collection
      const skillsCollectionRef = collection(db, "skills");

      // Real-time subscription to skills data
      const unsubscribe = onSnapshot(skillsCollectionRef, (snapshot) => {
        // Transform Firestore documents into skill names
        const skillsData = snapshot.docs.map((doc) => {
          const data = doc.data() as DocumentData;
          return data.name;
        });

        // Update state with latest skills
        setSkills(skillsData);

        // Data fetched, set loading to false
        setLoading(false);
      });

      // Cleanup function to unsubscribe when component unmounts
      return () => unsubscribe();
    } catch (err) {
      return () => {};
    }
  }, []);

  // Return skills data
  return { skills, loading };
}
