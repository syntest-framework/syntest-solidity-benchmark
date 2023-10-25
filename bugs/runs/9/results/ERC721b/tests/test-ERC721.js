const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractNzXrfIL = await ERC721.new({from: accounts[1]});
		const tokenIdfNIo2Vd = BigInt("1394")
		const tohlbg8HR = accounts[0]
		const fromAWcF2QY = accounts[0]
		const tokenIdsEAHEcQ = BigInt("663")
		const operatorzKaZ1b3 = accounts[3]
		const ownerkituuB = "0x0000000000000000000000000000000000000001"
		const ownerrPhYGKt = accounts[3]
		await contractNzXrfIL.safeTransferFrom.call(fromAWcF2QY, tohlbg8HR, tokenIdfNIo2Vd, {from: "0x0000000000000000000000000000000000000001"});
		const nullM1dP46X = await contractNzXrfIL.getApproved.call(tokenIdsEAHEcQ, {from: accounts[5]});
		const nullxvXbTXY = await contractNzXrfIL.isApprovedForAll.call(ownerkituuB, operatorzKaZ1b3, {from: accounts[0]});
		const nullNeEYrZr = await contractNzXrfIL.balanceOf.call(ownerrPhYGKt, {from: accounts[3]});

		await expect(contractNzXrfIL.safeTransferFrom.call(fromAWcF2QY, tohlbg8HR, tokenIdfNIo2Vd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractRty8Sc = await ERC721.new({from: accounts[5]});
		const tokenId5SrPrx = BigInt("257")
		const toabm0UY = accounts[3]
		const fromsGvVNZ6 = accounts[4]
		const tokenIdk5HxPjF = BigInt("407")
		const tokenIdIYxthA9 = BigInt("1144")
		const tokenIdofMJicO = BigInt("870")
		const toCEMzTNv = accounts[5]
		const fromvMx2csA = "0x0000000000000000000000000000000000000001"
		await contractRty8Sc.transferFrom.call(fromsGvVNZ6, toabm0UY, tokenId5SrPrx, {from: accounts[3]});
		const nullP5zBInD = await contractRty8Sc.getApproved.call(tokenIdk5HxPjF, {from: accounts[5]});
		const nullRLnyEPs = await contractRty8Sc.ownerOf.call(tokenIdIYxthA9, {from: "0x0000000000000000000000000000000000000001"});
		await contractRty8Sc.safeTransferFrom.call(fromvMx2csA, toCEMzTNv, tokenIdofMJicO, {from: accounts[3]});

		await expect(contractRty8Sc.transferFrom.call(fromsGvVNZ6, toabm0UY, tokenId5SrPrx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractu4Lcru = await ERC721.new({from: accounts[4]});
		const tokenIdgbHPooR = BigInt("72")
		const toqXiK1jZ = accounts[0]
		const tokenIdtCGLub5 = BigInt("782")
		const toRvIQn3T = accounts[2]
		const fromESlpnpo = accounts[0]
		const _dataNb2rLtt = "0x1e07181f1f1917"
		const tokenIdIS30rEM = BigInt("1440")
		const tomLhTnPS = "0x0000000000000000000000000000000000000001"
		const fromWvVHP58 = accounts[3]
		const _dataUKnAmOc = "0x1c0c091a0a051e071e04"
		const tokenIdQO8dxg = BigInt("990")
		const toD2KYqX2 = accounts[1]
		const fromz9Bp3St = accounts[0]
		const tokenIddY94yaK = BigInt("1619")
		const togHzFMA = accounts[3]
		const tokenIdXxqPywv = BigInt("99")
		const to0ThfXN = accounts[0]
		await contractu4Lcru.approve.call(toqXiK1jZ, tokenIdgbHPooR, {from: accounts[4]});
		await contractu4Lcru.safeTransferFrom.call(fromESlpnpo, toRvIQn3T, tokenIdtCGLub5, {from: accounts[2]});
		await contractu4Lcru.safeTransferFrom.call(fromWvVHP58, tomLhTnPS, tokenIdIS30rEM, _dataNb2rLtt, {from: accounts[4]});
		await contractu4Lcru.safeTransferFrom.call(fromz9Bp3St, toD2KYqX2, tokenIdQO8dxg, _dataUKnAmOc, {from: accounts[0]});
		await contractu4Lcru.approve.call(togHzFMA, tokenIddY94yaK, {from: accounts[0]});
		await contractu4Lcru.approve.call(to0ThfXN, tokenIdXxqPywv, {from: accounts[0]});

		await expect(contractu4Lcru.approve.call(toqXiK1jZ, tokenIdgbHPooR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractfZErcmt = await ERC721.new({from: accounts[0]});
		const approvedgG7nRcL = true
		const toOWLdHWA = accounts[1]
		const tokenIdd4OVBLb = BigInt("661")
		const tod7HEzH5 = accounts[0]
		const tokenIdOdLuo2u = BigInt("1572")
		const toTYaIWh = accounts[4]
		const tokenIdAAmdtlv = BigInt("1389")
		const torSOwgPx = accounts[0]
		const fromGUBlvKa = accounts[2]
		await contractfZErcmt.setApprovalForAll.call(toOWLdHWA, approvedgG7nRcL, {from: accounts[3]});
		await contractfZErcmt.approve.call(tod7HEzH5, tokenIdd4OVBLb, {from: accounts[0]});
		await contractfZErcmt.approve.call(toTYaIWh, tokenIdOdLuo2u, {from: accounts[3]});
		await contractfZErcmt.transferFrom.call(fromGUBlvKa, torSOwgPx, tokenIdAAmdtlv, {from: accounts[3]});

		await expect(contractfZErcmt.setApprovalForAll.call(toOWLdHWA, approvedgG7nRcL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contract4vPghP = await ERC721.new({from: accounts[3]});
		const tokenIdeD8rdD = BigInt("333")
		const tokenIdCPTMRZb = BigInt("1464")
		const to7MqmsJ = accounts[2]
		const tokenIdbfcyTNT = BigInt("2001")
		const approvedwSjeGlD = true
		const toteWE1HB = accounts[1]
		const operatorKjAkewy = accounts[0]
		const ownerERaq4Xr = accounts[0]
		const nullqFWDAHv = await contract4vPghP.getApproved.call(tokenIdeD8rdD, {from: accounts[4]});
		await contract4vPghP.approve.call(to7MqmsJ, tokenIdCPTMRZb, {from: accounts[4]});
		const nullNb54XSf = await contract4vPghP.ownerOf.call(tokenIdbfcyTNT, {from: accounts[2]});
		await contract4vPghP.setApprovalForAll.call(toteWE1HB, approvedwSjeGlD, {from: accounts[0]});
		const nullWMOcA2e = await contract4vPghP.isApprovedForAll.call(ownerERaq4Xr, operatorKjAkewy, {from: accounts[3]});

		await expect(contract4vPghP.getApproved.call(tokenIdeD8rdD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractaHSYmUr = await ERC721.new({from: accounts[5]});
		const owneriUqQ2r = accounts[4]
		const ownerX5VqqLs = accounts[3]
		const approvedkarGDcH = true
		const tohQhxLQf = accounts[3]
		const nullY2zalAP = await contractaHSYmUr.balanceOf.call(owneriUqQ2r, {from: accounts[5]});
		const nullGfdwL2b = await contractaHSYmUr.balanceOf.call(ownerX5VqqLs, {from: accounts[1]});
		await contractaHSYmUr.setApprovalForAll.call(tohQhxLQf, approvedkarGDcH, {from: accounts[0]});

		assert.equal(nullGfdwL2b, 0)
		assert.equal(nullY2zalAP, 0)
	});

	it('test for ERC721', async () => {
		const contractspx5Ty = await ERC721.new({from: accounts[0]});
		const operatorxSFNRfq = accounts[3]
		const owneriXApRg3 = accounts[3]
		const tokenIdVwhfPpr = BigInt("234")
		const toqhVLIYv = accounts[3]
		const fromGkHMYGo = accounts[4]
		const tokenIdG2FVFbw = BigInt("846")
		const ownerACc4ZsQ = accounts[6]
		const nulleETnNQv = await contractspx5Ty.isApprovedForAll.call(owneriXApRg3, operatorxSFNRfq, {from: accounts[5]});
		await contractspx5Ty.safeTransferFrom.call(fromGkHMYGo, toqhVLIYv, tokenIdVwhfPpr, {from: accounts[3]});
		const nullKpV4iAF = await contractspx5Ty.ownerOf.call(tokenIdG2FVFbw, {from: accounts[0]});
		const nullibFHgvY = await contractspx5Ty.balanceOf.call(ownerACc4ZsQ, {from: accounts[0]});

		assert.equal(nulleETnNQv, false)
		await expect(contractspx5Ty.safeTransferFrom.call(fromGkHMYGo, toqhVLIYv, tokenIdVwhfPpr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractfdloj0 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const operatoruqUAwXs = accounts[4]
		const ownerKzL9x8t = accounts[4]
		const tokenIdvgXO9YP = BigInt("962")
		const toSPBZ6mR = "0x0000000000000000000000000000000000000001"
		const fromeIbuJvF = accounts[3]
		const tokenIdxWupJRb = BigInt("909")
		const operatorZLVzRt = accounts[2]
		const owneraeLH4ho = accounts[1]
		const nullyVr1Rph = await contractfdloj0.isApprovedForAll.call(ownerKzL9x8t, operatoruqUAwXs, {from: accounts[3]});
		await contractfdloj0.safeTransferFrom.call(fromeIbuJvF, toSPBZ6mR, tokenIdvgXO9YP, {from: accounts[2]});
		const nullLddi9pK = await contractfdloj0.getApproved.call(tokenIdxWupJRb, {from: accounts[2]});
		const nullgSorIy = await contractfdloj0.isApprovedForAll.call(owneraeLH4ho, operatorZLVzRt, {from: accounts[0]});
	});

	it('test for ERC721', async () => {
		const contractzwpetwR = await ERC721.new({from: accounts[0]});
		const approvedNr3fp3M = true
		const toWk1kk9k = accounts[4]
		const tokenIdiYpY81E = BigInt("846")
		await contractzwpetwR.setApprovalForAll.call(toWk1kk9k, approvedNr3fp3M, {from: accounts[4]});
		const nullxf0WCPy = await contractzwpetwR.ownerOf.call(tokenIdiYpY81E, {from: accounts[0]});

		await expect(contractzwpetwR.setApprovalForAll.call(toWk1kk9k, approvedNr3fp3M, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})