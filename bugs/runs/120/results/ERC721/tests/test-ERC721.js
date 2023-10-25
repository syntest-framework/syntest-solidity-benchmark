const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractEETqVW3 = await ERC721.new({from: accounts[0]});
		const tokenIdnbtDHN = BigInt("682")
		const tokenIdj8Q0tyt = BigInt("1235")
		const toGvhZiEh = accounts[3]
		const tokenIda0XbjgA = BigInt("881")
		const approvedrVp5Zpa = true
		const toPH69WAw = accounts[5]
		const tokenIdrahOXwx = BigInt("1259")
		const tocPc7j3 = accounts[3]
		const fromVQb4FpP = accounts[3]
		const nullrwBg2GV = await contractEETqVW3.ownerOf.call(tokenIdnbtDHN, {from: accounts[3]});
		await contractEETqVW3.approve.call(toGvhZiEh, tokenIdj8Q0tyt, {from: accounts[1]});
		const nullVJLjdts = await contractEETqVW3.ownerOf.call(tokenIda0XbjgA, {from: accounts[3]});
		await contractEETqVW3.setApprovalForAll.call(toPH69WAw, approvedrVp5Zpa, {from: accounts[0]});
		await contractEETqVW3.transferFrom.call(fromVQb4FpP, tocPc7j3, tokenIdrahOXwx, {from: accounts[1]});

		await expect(contractEETqVW3.ownerOf.call(tokenIdnbtDHN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractZgXpbU = await ERC721.new({from: accounts[3]});
		const operatorHC5ooHi = accounts[0]
		const ownersZUtpPN = accounts[3]
		const operatorFIo8yyv = accounts[4]
		const ownery8PYlU7 = accounts[5]
		const tokenIdNq3Pfz = BigInt("1851")
		const toNojOpSK = "0x0000000000000000000000000000000000000001"
		const fromdzmsY5I = "0x0000000000000000000000000000000000000001"
		const nullT5KkmoO = await contractZgXpbU.isApprovedForAll.call(ownersZUtpPN, operatorHC5ooHi, {from: accounts[5]});
		const nullMOCOFKW = await contractZgXpbU.isApprovedForAll.call(ownery8PYlU7, operatorFIo8yyv, {from: accounts[2]});
		await contractZgXpbU.safeTransferFrom.call(fromdzmsY5I, toNojOpSK, tokenIdNq3Pfz, {from: accounts[1]});

		assert.equal(nullMOCOFKW, false)
		assert.equal(nullT5KkmoO, false)
		await expect(contractZgXpbU.safeTransferFrom.call(fromdzmsY5I, toNojOpSK, tokenIdNq3Pfz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractTd29HQ8 = await ERC721.new({from: accounts[1]});
		const tokenIdQriN71A = BigInt("519")
		const torVyoZfP = accounts[2]
		const tokenIdsmQHL34 = BigInt("518")
		const tokenIduNoEayQ = BigInt("1395")
		const tokenIdGjfl66D = BigInt("1664")
		const totmNayN1 = accounts[1]
		const fromhB0Yjlr = accounts[1]
		await contractTd29HQ8.approve.call(torVyoZfP, tokenIdQriN71A, {from: accounts[1]});
		const nullnFC3iFR = await contractTd29HQ8.ownerOf.call(tokenIdsmQHL34, {from: accounts[4]});
		const nullBjrtUTH = await contractTd29HQ8.ownerOf.call(tokenIduNoEayQ, {from: accounts[5]});
		await contractTd29HQ8.transferFrom.call(fromhB0Yjlr, totmNayN1, tokenIdGjfl66D, {from: accounts[1]});

		await expect(contractTd29HQ8.approve.call(torVyoZfP, tokenIdQriN71A, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractfqJ3pAx = await ERC721.new({from: accounts[2]});
		const ownerAaj2CD0 = accounts[1]
		const tokenIdcMFkVzh = BigInt("516")
		const toQUdVVkU = accounts[2]
		const fromMqLDLhX = accounts[4]
		const tokenIdNOS6Xdr = BigInt("1786")
		const nulllotiZdc = await contractfqJ3pAx.balanceOf.call(ownerAaj2CD0, {from: accounts[4]});
		await contractfqJ3pAx.safeTransferFrom.call(fromMqLDLhX, toQUdVVkU, tokenIdcMFkVzh, {from: accounts[3]});
		const nullcZVU5Ui = await contractfqJ3pAx.ownerOf.call(tokenIdNOS6Xdr, {from: accounts[0]});

		assert.equal(nulllotiZdc, 0)
		await expect(contractfqJ3pAx.safeTransferFrom.call(fromMqLDLhX, toQUdVVkU, tokenIdcMFkVzh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractC5k9PM = await ERC721.new({from: accounts[4]});
		const approvedMN6pPs1 = false
		const toKTbXOzD = accounts[2]
		const ownerGI7qj9o = accounts[2]
		const tokenIdjQrYlM = BigInt("26")
		const totZbeC5M = accounts[2]
		await contractC5k9PM.setApprovalForAll.call(toKTbXOzD, approvedMN6pPs1, {from: accounts[1]});
		const nullmPKemQ = await contractC5k9PM.balanceOf.call(ownerGI7qj9o, {from: accounts[4]});
		await contractC5k9PM.approve.call(totZbeC5M, tokenIdjQrYlM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullmPKemQ, 0)
		await expect(contractC5k9PM.balanceOf.call(ownerGI7qj9o, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractx2zFRZC = await ERC721.new({from: accounts[4]});
		const tokenIdyHxAwJN = BigInt("119")
		const tokZve8eB = accounts[2]
		const fromEEArSWv = accounts[0]
		const tokenIdNQtKsIj = BigInt("252")
		const tokenIdjEjbQyX = BigInt("1333")
		const toy01c03l = accounts[1]
		const fromVDRE4O = accounts[5]
		const _dataxOBxBpb = "0x1e1d190a04020d"
		const tokenIdWODNTan = BigInt("1495")
		const toYEy2aZ = "0x0000000000000000000000000000000000000001"
		const fromaAAlGSo = accounts[0]
		await contractx2zFRZC.transferFrom.call(fromEEArSWv, tokZve8eB, tokenIdyHxAwJN, {from: accounts[1]});
		const nullwqXQafP = await contractx2zFRZC.getApproved.call(tokenIdNQtKsIj, {from: accounts[3]});
		await contractx2zFRZC.transferFrom.call(fromVDRE4O, toy01c03l, tokenIdjEjbQyX, {from: accounts[4]});
		await contractx2zFRZC.safeTransferFrom.call(fromaAAlGSo, toYEy2aZ, tokenIdWODNTan, _dataxOBxBpb, {from: accounts[2]});

		await expect(contractx2zFRZC.transferFrom.call(fromEEArSWv, tokZve8eB, tokenIdyHxAwJN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractRhK9HDG = await ERC721.new({from: accounts[2]});
		const tokenIddmrckv6 = BigInt("842")
		const approvedYvTOjif = true
		const toI7hrgc = accounts[5]
		const _dataBePPbNI = "0x0a1a0e09"
		const tokenIdUWxC98w = BigInt("1896")
		const tof76QEQo = accounts[2]
		const fromc7Ju80m = accounts[4]
		const nullQODuLdW = await contractRhK9HDG.getApproved.call(tokenIddmrckv6, {from: accounts[1]});
		await contractRhK9HDG.setApprovalForAll.call(toI7hrgc, approvedYvTOjif, {from: accounts[4]});
		await contractRhK9HDG.safeTransferFrom.call(fromc7Ju80m, tof76QEQo, tokenIdUWxC98w, _dataBePPbNI, {from: accounts[2]});

		await expect(contractRhK9HDG.getApproved.call(tokenIddmrckv6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractR2tBb4a = await ERC721.new({from: accounts[0]});
		const approvedZuosQgm = true
		const toFzq1WFm = accounts[1]
		const operatorcUBF5vQ = accounts[3]
		const ownerFZ3Av9b = accounts[2]
		const tokenIdUrivn0u = BigInt("922")
		const toKgb49PQ = accounts[4]
		await contractR2tBb4a.setApprovalForAll.call(toFzq1WFm, approvedZuosQgm, {from: accounts[1]});
		const nullbDoPPYH = await contractR2tBb4a.isApprovedForAll.call(ownerFZ3Av9b, operatorcUBF5vQ, {from: accounts[1]});
		await contractR2tBb4a.approve.call(toKgb49PQ, tokenIdUrivn0u, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractR2tBb4a.setApprovalForAll.call(toFzq1WFm, approvedZuosQgm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractTONvWaL = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const approvedmzojL9i = true
		const tom3qNYlG = accounts[0]
		const tokenIdpxEMt4f = BigInt("964")
		const tokenIdy45gEF = BigInt("206")
		const toqXoEPpT = accounts[0]
		const fromUgpjPPr = accounts[1]
		const tokenIdWkjOGwm = BigInt("62")
		const tokenIdbiHGKKa = BigInt("208")
		const toyS3gydg = accounts[0]
		const fromZoRGYj5 = accounts[4]
		const approved35rwbt = true
		const tog4SlRR = accounts[1]
		await contractTONvWaL.setApprovalForAll.call(tom3qNYlG, approvedmzojL9i, {from: accounts[2]});
		const nullbjaK76W = await contractTONvWaL.getApproved.call(tokenIdpxEMt4f, {from: "0x0000000000000000000000000000000000000001"});
		await contractTONvWaL.safeTransferFrom.call(fromUgpjPPr, toqXoEPpT, tokenIdy45gEF, {from: accounts[3]});
		const nullhWvSHvK = await contractTONvWaL.ownerOf.call(tokenIdWkjOGwm, {from: accounts[1]});
		await contractTONvWaL.transferFrom.call(fromZoRGYj5, toyS3gydg, tokenIdbiHGKKa, {from: accounts[2]});
		await contractTONvWaL.setApprovalForAll.call(tog4SlRR, approved35rwbt, {from: accounts[4]});
	});
})