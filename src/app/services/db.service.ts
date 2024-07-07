import { Injectable } from '@angular/core';
import { collection, addDoc, getFirestore, getDocs, doc, getDoc, where, DocumentData, Query, QuerySnapshot, query, updateDoc, deleteField, deleteDoc } from "firebase/firestore";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebaseConfig';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private app = initializeApp(firebaseConfig);
  public db = getFirestore(this.app);
  // public userId;
  constructor(private authServices: AuthService, private router: Router) {
    // this.userId = authServices.getUid()
  }

  async createSnippet(snippet: { title: string, code: string }) {
    try {
      await addDoc(collection(this.db, "snippets"), { ...snippet, by: this.authServices.getUid() });
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("error while creating")
    }
  }

  async getAllSnippet() {
    let result: any[] = [];

    const querySnapshot = await getDocs(collection(this.db, "snippets"));
    querySnapshot.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() })
    });
    return result
  }

  async getMySnippet() {
    const userId = this.authServices.getUid();

    const q = query(collection(this.db, "snippets"), where("by", "==", userId));
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
    const result: any[] = [];
    querySnapshot.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() });
    });

    console.log(result)
    return result;

  }

  async getSnippetById(docId: string) {
    const docRef = doc(this.db, "snippets", docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      return false;
    }

  }

  async deleteSnippet(snippetId: string) {
    const snippetRef = doc(this.db, 'snippets', snippetId);
    if (snippetRef) {
      await deleteDoc(snippetRef);
      this.router.navigate(['/mysnippet'])
    } else {
      alert("snippet not found")
    }
  }

  async updateSnippet(snippet: { id: string, title: string, code: string }) {
    const snippetRef = doc(this.db, 'snippets', snippet.id);
    await updateDoc(snippetRef, {
      title: snippet.title,
      code: snippet.code
    });
  }

}
