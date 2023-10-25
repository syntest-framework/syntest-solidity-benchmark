const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractnDQgfHd = await ERC721.new({from: accounts[3]});
		const tokenIdU33IGuX = BigInt("838")
		const toz91Kz4b = accounts[3]
		const tokenIdNa1v1fM = BigInt("615")
		const toqohvJVK = accounts[4]
		const fromNRWmajJ = accounts[4]
		const tokenIdJf9Yr5r = BigInt("1542")
		const tocyj56Q9 = accounts[3]
		const from7uazAS = accounts[1]
		await contractnDQgfHd.approve.call(toz91Kz4b, tokenIdU33IGuX, {from: "0x0000000000000000000000000000000000000001"});
		await contractnDQgfHd.safeTransferFrom.call(fromNRWmajJ, toqohvJVK, tokenIdNa1v1fM, {from: accounts[3]});
		await contractnDQgfHd.transferFrom.call(from7uazAS, tocyj56Q9, tokenIdJf9Yr5r, {from: accounts[4]});

		await expect(contractnDQgfHd.approve.call(toz91Kz4b, tokenIdU33IGuX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractL9XKpUK = await ERC721.new({from: accounts[2]});
		const operatorq9AJtte = accounts[2]
		const ownerZjgJ58g = accounts[4]
		const tokenIdgCfdmfQ = BigInt("1267")
		const tofT5dfcT = accounts[5]
		const fromBUFpjpd = accounts[1]
		const approvedDkG3Hhu = false
		const toufvZGIF = accounts[2]
		const tokenIdyA8WyJ2 = BigInt("904")
		const touBacARY = accounts[0]
		const fromELB2bkI = accounts[4]
		const nullnAnshdd = await contractL9XKpUK.isApprovedForAll.call(ownerZjgJ58g, operatorq9AJtte, {from: accounts[1]});
		await contractL9XKpUK.transferFrom.call(fromBUFpjpd, tofT5dfcT, tokenIdgCfdmfQ, {from: accounts[4]});
		await contractL9XKpUK.setApprovalForAll.call(toufvZGIF, approvedDkG3Hhu, {from: "0x0000000000000000000000000000000000000001"});
		await contractL9XKpUK.safeTransferFrom.call(fromELB2bkI, touBacARY, tokenIdyA8WyJ2, {from: accounts[1]});

		assert.equal(nullnAnshdd, false)
		await expect(contractL9XKpUK.transferFrom.call(fromBUFpjpd, tofT5dfcT, tokenIdgCfdmfQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractxaWsSoJ = await ERC721.new({from: accounts[2]});
		const approvedqhA4OOl = true
		const toXxRUnM = accounts[0]
		const tokenIdYUGsuwq = BigInt("1152")
		const tokenIdmrBeUL = BigInt("2010")
		const approvednuKax3b = false
		const toJ7ITGIG = "0x0000000000000000000000000000000000000001"
		const tokenIdwLTRrW = BigInt("924")
		await contractxaWsSoJ.setApprovalForAll.call(toXxRUnM, approvedqhA4OOl, {from: accounts[2]});
		const nullHRAAvE = await contractxaWsSoJ.getApproved.call(tokenIdYUGsuwq, {from: accounts[0]});
		const nullgxOHhC0 = await contractxaWsSoJ.ownerOf.call(tokenIdmrBeUL, {from: accounts[2]});
		await contractxaWsSoJ.setApprovalForAll.call(toJ7ITGIG, approvednuKax3b, {from: accounts[2]});
		const nullWI5Al6y = await contractxaWsSoJ.getApproved.call(tokenIdwLTRrW, {from: accounts[4]});

		await expect(contractxaWsSoJ.setApprovalForAll.call(toXxRUnM, approvedqhA4OOl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractuHMHoDv = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const ownerRWOcbHi = accounts[3]
		const approvedIy2q4X2 = false
		const tou12Pm4T = accounts[0]
		const tokenIdSIYleC = BigInt("1513")
		const toW5WAslZ = "0x0000000000000000000000000000000000000001"
		const fromvRpXiz = accounts[5]
		const operatorhWs1FM6 = accounts[4]
		const ownerbEQJC7J = accounts[5]
		const operatorJLSUZZs = accounts[0]
		const ownere2hCTOP = accounts[3]
		const nullNOzint = await contractuHMHoDv.balanceOf.call(ownerRWOcbHi, {from: accounts[1]});
		await contractuHMHoDv.setApprovalForAll.call(tou12Pm4T, approvedIy2q4X2, {from: accounts[4]});
		await contractuHMHoDv.safeTransferFrom.call(fromvRpXiz, toW5WAslZ, tokenIdSIYleC, {from: accounts[2]});
		const nullM35nkdb = await contractuHMHoDv.isApprovedForAll.call(ownerbEQJC7J, operatorhWs1FM6, {from: "0x0000000000000000000000000000000000000001"});
		const nullDDFRlwY = await contractuHMHoDv.isApprovedForAll.call(ownere2hCTOP, operatorJLSUZZs, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ERC721', async () => {
		const contractheKm9e9 = await ERC721.new({from: accounts[2]});
		const approvedBJOBIsW = true
		const tofxYukPV = accounts[0]
		const approvedKy845xk = true
		const toc4hmAl8 = accounts[4]
		const tokenIda7zQLx0 = BigInt("112")
		const toPE0quUu = accounts[1]
		const frompnE9GEV = "0x0000000000000000000000000000000000000001"
		const tokenIdnBab5aE = BigInt("533")
		const toLdWS180 = accounts[3]
		const tokenIde0eRVcL = BigInt("1152")
		const tokenIdLJY4BWg = BigInt("2010")
		const approvedGIEIAVl = false
		const tomMVn5tn = "0x0000000000000000000000000000000000000001"
		const tokenIdSfGIKyW = BigInt("907")
		await contractheKm9e9.setApprovalForAll.call(tofxYukPV, approvedBJOBIsW, {from: accounts[2]});
		await contractheKm9e9.setApprovalForAll.call(toc4hmAl8, approvedKy845xk, {from: accounts[4]});
		await contractheKm9e9.transferFrom.call(frompnE9GEV, toPE0quUu, tokenIda7zQLx0, {from: accounts[0]});
		await contractheKm9e9.approve.call(toLdWS180, tokenIdnBab5aE, {from: accounts[1]});
		const nullywHy3GG = await contractheKm9e9.getApproved.call(tokenIde0eRVcL, {from: accounts[0]});
		const nullYSQjzLm = await contractheKm9e9.ownerOf.call(tokenIdLJY4BWg, {from: accounts[2]});
		await contractheKm9e9.setApprovalForAll.call(tomMVn5tn, approvedGIEIAVl, {from: accounts[2]});
		const nullDIR690e = await contractheKm9e9.getApproved.call(tokenIdSfGIKyW, {from: accounts[4]});

		await expect(contractheKm9e9.setApprovalForAll.call(tofxYukPV, approvedBJOBIsW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})