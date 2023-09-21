export function getTask5_2Result(lists) {
  const filtered = filter(lists);
  console.log('Белый список email-адресов:', filtered);
  return filtered;
}

function filter({whiteList, blackList}) {
  return whiteList.filter((whiteListItem) =>
    !blackList.includes(whiteListItem) ?? whiteListItem);
}
