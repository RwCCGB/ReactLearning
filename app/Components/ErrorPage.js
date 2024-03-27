'use client'
// This is the default error page for any failed API calls.  Very basic but got around the issue of undefined posts 
export default function ErrorPage(props) {
    return (
        <div className={"error"}>
            <div >Oops!</div>
            <div >Something went wrong attempting to retrieve data from the API.  </div>
        </div>
    );
}