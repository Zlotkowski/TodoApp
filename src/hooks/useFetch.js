function useFetch(url) {
  const [externalData, setExternalData] = useState([]);

  useEffect(() => {
    const dataObservable = new Observable((observer) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          observer.next(data);
          observer.complete();
        });
    }).subscribe((data) => {
      setExternalData(data);
    });

    return () => {
      dataObservable.unsubscribe();
    };
  }, [url]);
  return externalData;
}
