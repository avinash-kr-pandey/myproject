import { sr } from "./Server";
export const firebaseOperations={
    add(Object){
        sr.collection("MyProject").add(Object);
        console.log("addedd...");

    }
}