const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractxHWgHg = await ERC721.new({from: accounts[3]});
		const tokenIdSDAsryY = BigInt("1935")
		const toybXWzKG = accounts[5]
		const fromInAuyaU = accounts[4]
		const _datawCEp1f7 = "0x0c001d"
		const tokenIdTN5cNwq = BigInt("1753")
		const toWE0MJkC = accounts[2]
		const fromLBhAij9 = accounts[0]
		const tokenIdtwTrnJn = BigInt("907")
		const tofcegu8 = accounts[2]
		const fromhtZUM5h = accounts[0]
		await contractxHWgHg.transferFrom.call(fromInAuyaU, toybXWzKG, tokenIdSDAsryY, {from: accounts[1]});
		await contractxHWgHg.safeTransferFrom.call(fromLBhAij9, toWE0MJkC, tokenIdTN5cNwq, _datawCEp1f7, {from: accounts[0]});
		await contractxHWgHg.safeTransferFrom.call(fromhtZUM5h, tofcegu8, tokenIdtwTrnJn, {from: accounts[4]});

		await expect(contractxHWgHg.transferFrom.call(fromInAuyaU, toybXWzKG, tokenIdSDAsryY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractvvJ29ll = await ERC721.new({from: accounts[1]});
		const tokenIde4rKrp9 = BigInt("163")
		const toiIuhXaL = accounts[3]
		const tokenId3ehtnR = BigInt("677")
		const toKjUJuTH = accounts[4]
		const fromdRK8VTN = accounts[1]
		const tokenIduM6izAF = BigInt("1506")
		const toNueEE5X = "0x0000000000000000000000000000000000000001"
		const fromUqem4Ft = accounts[0]
		const ownerpGXyjGW = accounts[1]
		const approvedSCRlRYc = false
		const toPJpPo8 = accounts[5]
		await contractvvJ29ll.approve.call(toiIuhXaL, tokenIde4rKrp9, {from: accounts[0]});
		await contractvvJ29ll.safeTransferFrom.call(fromdRK8VTN, toKjUJuTH, tokenId3ehtnR, {from: accounts[5]});
		await contractvvJ29ll.safeTransferFrom.call(fromUqem4Ft, toNueEE5X, tokenIduM6izAF, {from: "0x0000000000000000000000000000000000000001"});
		const nullTGqkJ2N = await contractvvJ29ll.balanceOf.call(ownerpGXyjGW, {from: accounts[5]});
		await contractvvJ29ll.setApprovalForAll.call(toPJpPo8, approvedSCRlRYc, {from: accounts[0]});

		await expect(contractvvJ29ll.approve.call(toiIuhXaL, tokenIde4rKrp9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractkSmdEhO = await ERC721.new({from: accounts[2]});
		const approveduvFE302 = true
		const toJqv34Hu = accounts[3]
		const tokenIdsOYbxO = BigInt("184")
		const toSGP2wf = accounts[5]
		const fromSzwBYU5 = accounts[4]
		const operatorUuqbBQd = accounts[0]
		const ownerb6lF90A = accounts[0]
		const tokenIdv5NIZ9a = BigInt("879")
		await contractkSmdEhO.setApprovalForAll.call(toJqv34Hu, approveduvFE302, {from: "0x0000000000000000000000000000000000000001"});
		await contractkSmdEhO.safeTransferFrom.call(fromSzwBYU5, toSGP2wf, tokenIdsOYbxO, {from: accounts[2]});
		const nullJGfrWmF = await contractkSmdEhO.isApprovedForAll.call(ownerb6lF90A, operatorUuqbBQd, {from: accounts[2]});
		const nullH1Cl9Y = await contractkSmdEhO.ownerOf.call(tokenIdv5NIZ9a, {from: accounts[0]});

		await expect(contractkSmdEhO.setApprovalForAll.call(toJqv34Hu, approveduvFE302, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractpuUKOAf = await ERC721.new({from: accounts[3]});
		const ownerNuXHS5O = "0x0000000000000000000000000000000000000001"
		const tokenIdD35XS6G = BigInt("1321")
		const tokenIdD2SNjcZ = BigInt("945")
		const tokenIdonEpbn = BigInt("154")
		const toJqAccJp = accounts[2]
		const fromJRNzVXt = accounts[1]
		const tokenIdlcQDDP4 = BigInt("660")
		const nulljmzhpiy = await contractpuUKOAf.balanceOf.call(ownerNuXHS5O, {from: "0x0000000000000000000000000000000000000001"});
		const nullWaV9njl = await contractpuUKOAf.getApproved.call(tokenIdD35XS6G, {from: accounts[1]});
		const nullIoddH3 = await contractpuUKOAf.getApproved.call(tokenIdD2SNjcZ, {from: accounts[4]});
		await contractpuUKOAf.safeTransferFrom.call(fromJRNzVXt, toJqAccJp, tokenIdonEpbn, {from: accounts[4]});
		const nullY7PLqMu = await contractpuUKOAf.ownerOf.call(tokenIdlcQDDP4, {from: accounts[1]});

		assert.equal(nulljmzhpiy, 0)
		await expect(contractpuUKOAf.getApproved.call(tokenIdD35XS6G, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractNz5cIKk = await ERC721.new({from: accounts[1]});
		const operatorIlCEjDB = accounts[2]
		const ownergRkt9CD = accounts[5]
		const tokenIdzpxUgjB = BigInt("1030")
		const tomcR3X1X = accounts[1]
		const fromYoghhYE = accounts[5]
		const tokenId72W6ui = BigInt("1541")
		const tokenIdsziqz8n = BigInt("1749")
		const tozsWhsA8 = accounts[0]
		const nullEwcS7Hk = await contractNz5cIKk.isApprovedForAll.call(ownergRkt9CD, operatorIlCEjDB, {from: accounts[2]});
		await contractNz5cIKk.safeTransferFrom.call(fromYoghhYE, tomcR3X1X, tokenIdzpxUgjB, {from: accounts[5]});
		const nullNKQkv4m = await contractNz5cIKk.ownerOf.call(tokenId72W6ui, {from: accounts[2]});
		await contractNz5cIKk.approve.call(tozsWhsA8, tokenIdsziqz8n, {from: accounts[3]});

		assert.equal(nullEwcS7Hk, false)
		await expect(contractNz5cIKk.safeTransferFrom.call(fromYoghhYE, tomcR3X1X, tokenIdzpxUgjB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractlB1QEuN = await ERC721.new({from: accounts[1]});
		const approvedksCPJXs = true
		const toTlq7J6m = accounts[0]
		const tokenIdW7T1IOa = BigInt("1030")
		const tohtA0hGb = accounts[2]
		const fromooeYcze = accounts[5]
		await contractlB1QEuN.setApprovalForAll.call(toTlq7J6m, approvedksCPJXs, {from: accounts[0]});
		await contractlB1QEuN.safeTransferFrom.call(fromooeYcze, tohtA0hGb, tokenIdW7T1IOa, {from: accounts[5]});

		await expect(contractlB1QEuN.setApprovalForAll.call(toTlq7J6m, approvedksCPJXs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractv0GcCb = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdoSan4F4 = BigInt("1078")
		const toj0Qjk45 = accounts[4]
		const from99rPi6 = accounts[0]
		const tokenIdyuBF0jw = BigInt("1785")
		const tokra4JFn = accounts[1]
		const fromDfDQStc = accounts[0]
		const approvedsoT4zKT = false
		const toNqZsnRh = "0x0000000000000000000000000000000000000001"
		const tokenIdehz4jvu = BigInt("1379")
		const torSkuaZ9 = accounts[4]
		const fromBThx4c = accounts[4]
		const tokenIdahpYJOf = BigInt("1765")
		const toCNA3Jpx = "0x0000000000000000000000000000000000000001"
		const fromBeVjgEl = accounts[2]
		await contractv0GcCb.transferFrom.call(from99rPi6, toj0Qjk45, tokenIdoSan4F4, {from: accounts[3]});
		await contractv0GcCb.transferFrom.call(fromDfDQStc, tokra4JFn, tokenIdyuBF0jw, {from: accounts[0]});
		await contractv0GcCb.setApprovalForAll.call(toNqZsnRh, approvedsoT4zKT, {from: accounts[0]});
		await contractv0GcCb.transferFrom.call(fromBThx4c, torSkuaZ9, tokenIdehz4jvu, {from: "0x0000000000000000000000000000000000000001"});
		await contractv0GcCb.transferFrom.call(fromBeVjgEl, toCNA3Jpx, tokenIdahpYJOf, {from: accounts[3]});
	});
})