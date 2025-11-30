let submissions = []; 

exports.save = (data) => submissions.push(data);
exports.getAll = () => submissions;
exports.updateStore = (data) => (submissions = data);
