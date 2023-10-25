const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractKvSnkWF = await ERC721.new({from: accounts[1]});
		const tokenIdEXiGXpr = BigInt("1800")
		const tomVij7lh = accounts[0]
		const tokenIdyU0KFva = BigInt("356")
		const _dataCR8UlHa = "0x071d0d0812011506021f192008171815040708161e0b1e101217180f110f1c"
		const tokenIdb7rT8au = BigInt("1868")
		const toAECwrN4 = accounts[3]
		const fromygekX3K = accounts[0]
		const tokenIdxk7Rgkw = BigInt("1531")
		const to4qRlwQ = accounts[4]
		const fromj0ygDdc = accounts[4]
		await contractKvSnkWF.approve.call(tomVij7lh, tokenIdEXiGXpr, {from: accounts[4]});
		const nulldnuWST5 = await contractKvSnkWF.getApproved.call(tokenIdyU0KFva, {from: accounts[1]});
		await contractKvSnkWF.safeTransferFrom.call(fromygekX3K, toAECwrN4, tokenIdb7rT8au, _dataCR8UlHa, {from: accounts[4]});
		await contractKvSnkWF.safeTransferFrom.call(fromj0ygDdc, to4qRlwQ, tokenIdxk7Rgkw, {from: accounts[0]});

		await expect(contractKvSnkWF.approve.call(tomVij7lh, tokenIdEXiGXpr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractV8WQT1 = await ERC721.new({from: accounts[1]});
		const tokenIdAwC9dO4 = BigInt("156")
		const tozRAf7UD = "0x0000000000000000000000000000000000000001"
		const fromNZmOG0y = accounts[2]
		const approvedaUHQmM = false
		const toiyzDZb = "0x0000000000000000000000000000000000000001"
		const tokenIdNj9nWSe = BigInt("1780")
		const toRirbdlG = accounts[4]
		const tokenIdJOIxQLL = BigInt("117")
		const toKCcBeVw = accounts[1]
		const fromgleKf0Y = "0x0000000000000000000000000000000000000001"
		const tokenIdtHfKen = BigInt("1639")
		const tovrehQ2R = accounts[4]
		const fromrHNJD8v = accounts[3]
		const tokenIdcyiK4g1 = BigInt("857")
		await contractV8WQT1.safeTransferFrom.call(fromNZmOG0y, tozRAf7UD, tokenIdAwC9dO4, {from: accounts[3]});
		await contractV8WQT1.setApprovalForAll.call(toiyzDZb, approvedaUHQmM, {from: accounts[2]});
		await contractV8WQT1.approve.call(toRirbdlG, tokenIdNj9nWSe, {from: accounts[0]});
		await contractV8WQT1.transferFrom.call(fromgleKf0Y, toKCcBeVw, tokenIdJOIxQLL, {from: accounts[0]});
		await contractV8WQT1.safeTransferFrom.call(fromrHNJD8v, tovrehQ2R, tokenIdtHfKen, {from: accounts[3]});
		const nullr5WODuC = await contractV8WQT1.ownerOf.call(tokenIdcyiK4g1, {from: accounts[4]});

		await expect(contractV8WQT1.safeTransferFrom.call(fromNZmOG0y, tozRAf7UD, tokenIdAwC9dO4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractTDLBFe1 = await ERC721.new({from: accounts[2]});
		const tokenIdptIFSGd = BigInt("436")
		const tokenIdPgfyTMx = BigInt("34")
		const toy3QZe7 = accounts[4]
		const fromK7Shym9 = accounts[3]
		const approvedFWHi3OL = false
		const toyda3Dff = accounts[1]
		const tokenIdc9dl0aa = BigInt("571")
		const nulllUaqkgh = await contractTDLBFe1.getApproved.call(tokenIdptIFSGd, {from: accounts[1]});
		await contractTDLBFe1.transferFrom.call(fromK7Shym9, toy3QZe7, tokenIdPgfyTMx, {from: accounts[4]});
		await contractTDLBFe1.setApprovalForAll.call(toyda3Dff, approvedFWHi3OL, {from: accounts[1]});
		const nullAcUW8Dr = await contractTDLBFe1.ownerOf.call(tokenIdc9dl0aa, {from: accounts[3]});

		await expect(contractTDLBFe1.getApproved.call(tokenIdptIFSGd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractJTcyjDR = await ERC721.new({from: accounts[1]});
		const approvedmxz3NRL = false
		const toDb11p8K = "0x0000000000000000000000000000000000000001"
		const tokenIdjAveXQI = BigInt("665")
		const toHXd6BBG = accounts[2]
		const fromBPzMWI7 = accounts[4]
		const tokenIdPbL3S4 = BigInt("1163")
		const togOnnaXj = "0x0000000000000000000000000000000000000001"
		const approvedGpA1LNo = true
		const tofNzEuCi = accounts[3]
		const tokenIdtvjeCtE = BigInt("1670")
		const tomkXRF5 = accounts[4]
		await contractJTcyjDR.setApprovalForAll.call(toDb11p8K, approvedmxz3NRL, {from: "0x0000000000000000000000000000000000000001"});
		await contractJTcyjDR.transferFrom.call(fromBPzMWI7, toHXd6BBG, tokenIdjAveXQI, {from: accounts[1]});
		await contractJTcyjDR.approve.call(togOnnaXj, tokenIdPbL3S4, {from: accounts[3]});
		await contractJTcyjDR.setApprovalForAll.call(tofNzEuCi, approvedGpA1LNo, {from: accounts[5]});
		await contractJTcyjDR.approve.call(tomkXRF5, tokenIdtvjeCtE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractJTcyjDR.setApprovalForAll.call(toDb11p8K, approvedmxz3NRL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractlad2yQX = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdp0xdlPs = BigInt("1598")
		const tokenIdRbiZnLD = BigInt("499")
		const tokenId3jVcDV = BigInt("347")
		const toyIhUiq1 = accounts[2]
		const nullMUriqk2 = await contractlad2yQX.ownerOf.call(tokenIdp0xdlPs, {from: accounts[3]});
		const nullgyMRtfj = await contractlad2yQX.ownerOf.call(tokenIdRbiZnLD, {from: accounts[2]});
		await contractlad2yQX.approve.call(toyIhUiq1, tokenId3jVcDV, {from: accounts[3]});
	});
})