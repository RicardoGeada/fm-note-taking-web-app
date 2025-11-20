export default function preventFormSubmitOnEnter(e: React.KeyboardEvent) {
    if(e.key === "Enter" && e.target instanceof HTMLInputElement) {
        e.preventDefault();
    }
}