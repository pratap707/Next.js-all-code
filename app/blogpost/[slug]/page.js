export default function page({params}){
    let language = ["python","java", "c++","c#","css"]
    if(language.includes(params.slug)){
        return<div>My Post:{params.slug}</div>
    }
    else{
        return<div>Post Not Found</div>
    }
    return<div>My Post:{params.slug}</div>
}