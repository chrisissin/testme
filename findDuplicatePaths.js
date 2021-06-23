/**
Input: paths = 
["root/a 1.txt(abcd) 2.txt(efgh)",
"root/c 3.txt(abcd)",
"root/c/d 4.txt(efgh)"]

Output: [["root/a/2.txt","root/c/d/4.txt"],["root/a/1.txt","root/c/3.txt"]]
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    /*let dir = [];//paths.forEach(path => path.split(' ')[0]);
    paths.forEach(path => dir.push(path.split(' ')[0]));
	*/
	let map = {};
	for (var i = 0; i < paths.length; i++) {
		let dir = paths[i].split(' ');
		for (var j = dir.length - 1; j >= 0; j--) {

			let file = dir[j].split('(');
			//console.log(file);
			if(file[1]){
				//console.log(map[file[1]],file[1]);
				if(!map[file[1]]){
					var t = [];
					t.push(dir[0]+'/'+file[0]);
					map[file[1]]=t;
				}
				else{/*
					var tmp =  map.get(file[1]);
					map.set(file[1],tmp.push(dir[0]+'/'+file[0]));
					*/
					map[file[1]].push(dir[0]+'/'+file[0]);
				}
			}
		}
	}
	let out = [];
	for (const key in map) {
        if(map[key].length >1)
		    out.push(map[key]);
	}
	//map.entries(el => out.push(el.v));
    return out;
};

console.log(findDuplicate(
	["root/a 1.txt(abcd) 2.txt(efgh)",
	"root/c 3.txt(abcd)",
	"root/c/d 4.txt(efgh)"]));