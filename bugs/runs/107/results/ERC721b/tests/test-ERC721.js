const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractUvbcxOB = await ERC721.new({from: accounts[2]});
		const _databdyagpv = "0x1a120919"
		const tokenIdxxCAVb2 = BigInt("1966")
		const totH4Vcrs = accounts[2]
		const fromoYFj71 = accounts[4]
		const tokenIdi8XnPmW = BigInt("302")
		const tokenIdgcdAnxZ = BigInt("1794")
		const tokenIdPPzxuni = BigInt("1653")
		const tonN4gc72 = accounts[0]
		const fromQBji6RB = accounts[2]
		await contractUvbcxOB.safeTransferFrom.call(fromoYFj71, totH4Vcrs, tokenIdxxCAVb2, _databdyagpv, {from: accounts[3]});
		const nullFcM7qSI = await contractUvbcxOB.getApproved.call(tokenIdi8XnPmW, {from: accounts[2]});
		const nulldNuFEuL = await contractUvbcxOB.ownerOf.call(tokenIdgcdAnxZ, {from: accounts[0]});
		await contractUvbcxOB.transferFrom.call(fromQBji6RB, tonN4gc72, tokenIdPPzxuni, {from: accounts[0]});

		await expect(contractUvbcxOB.safeTransferFrom.call(fromoYFj71, totH4Vcrs, tokenIdxxCAVb2, _databdyagpv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractcu2rUmQ = await ERC721.new({from: accounts[2]});
		const tokenIdW7JTWzx = BigInt("380")
		const toxLridF = accounts[5]
		const approvedcKvmP7w = false
		const tojOKeGs4 = accounts[1]
		const tokenIdFne9owk = BigInt("1394")
		const tojX7yoLu = accounts[4]
		await contractcu2rUmQ.approve.call(toxLridF, tokenIdW7JTWzx, {from: accounts[4]});
		await contractcu2rUmQ.setApprovalForAll.call(tojOKeGs4, approvedcKvmP7w, {from: accounts[3]});
		await contractcu2rUmQ.approve.call(tojX7yoLu, tokenIdFne9owk, {from: accounts[0]});

		await expect(contractcu2rUmQ.approve.call(toxLridF, tokenIdW7JTWzx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contract62UZLe = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdUi74A5J = BigInt("1631")
		const tokenIdMenewMt = BigInt("423")
		const tokenIdzgXJLH6 = BigInt("1395")
		const tokenIdLyVVkcy = BigInt("1451")
		const tokenIdUV9Tjy1 = BigInt("1069")
		const toslhMmnw = accounts[2]
		const frompSSBg7 = accounts[2]
		const nullDWmWhq9 = await contract62UZLe.getApproved.call(tokenIdUi74A5J, {from: accounts[1]});
		const nullw0VzwmV = await contract62UZLe.getApproved.call(tokenIdMenewMt, {from: accounts[1]});
		const nullgFG0q05 = await contract62UZLe.getApproved.call(tokenIdzgXJLH6, {from: "0x0000000000000000000000000000000000000001"});
		const nullzzIEtu9 = await contract62UZLe.ownerOf.call(tokenIdLyVVkcy, {from: accounts[5]});
		await contract62UZLe.transferFrom.call(frompSSBg7, toslhMmnw, tokenIdUV9Tjy1, {from: accounts[1]});
	});

	it('test for ERC721', async () => {
		const contractJztbKB1 = await ERC721.new({from: accounts[4]});
		const approvedNPrsgxf = true
		const toAgE2D4 = accounts[5]
		const ownerW2x2Q98 = accounts[0]
		await contractJztbKB1.setApprovalForAll.call(toAgE2D4, approvedNPrsgxf, {from: accounts[2]});
		const nullOfXtU4X = await contractJztbKB1.balanceOf.call(ownerW2x2Q98, {from: accounts[4]});

		assert.equal(nullOfXtU4X, 0)
	});

	it('test for ERC721', async () => {
		const contractu8FCuYD = await ERC721.new({from: accounts[4]});
		const tokenIdSJmKAao = BigInt("510")
		const tokenIdEPu5kbt = BigInt("353")
		const tokenIdJ77RRrL = BigInt("403")
		const toYUBcu3U = "0x0000000000000000000000000000000000000001"
		const fromadj5Bpi = accounts[2]
		const tokenIdrKty9En = BigInt("1797")
		const tocIfcxpL = accounts[0]
		const fromNIWy3p9 = accounts[4]
		const _dataIU9CPW = "0x1c151e0e0e0a051c1108021a1b04030914201e"
		const tokenIdUYe8gp0 = BigInt("246")
		const toEmP9t9D = accounts[1]
		const fromXy03Q5 = accounts[3]
		const nulllGHz9Nu = await contractu8FCuYD.getApproved.call(tokenIdSJmKAao, {from: accounts[3]});
		const nullz3nWuao = await contractu8FCuYD.getApproved.call(tokenIdEPu5kbt, {from: accounts[3]});
		await contractu8FCuYD.safeTransferFrom.call(fromadj5Bpi, toYUBcu3U, tokenIdJ77RRrL, {from: accounts[3]});
		await contractu8FCuYD.safeTransferFrom.call(fromNIWy3p9, tocIfcxpL, tokenIdrKty9En, {from: accounts[0]});
		await contractu8FCuYD.safeTransferFrom.call(fromXy03Q5, toEmP9t9D, tokenIdUYe8gp0, _dataIU9CPW, {from: accounts[0]});

		await expect(contractu8FCuYD.getApproved.call(tokenIdSJmKAao, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractiJpNIWe = await ERC721.new({from: accounts[1]});
		const operatorJmoMtuj = "0x0000000000000000000000000000000000000001"
		const ownerBlaG3mQ = accounts[3]
		const tokenIdchc1NbJ = BigInt("699")
		const togXtScT = accounts[1]
		const fromvEPZR0H = accounts[3]
		const approvedoGy4gWV = false
		const toANxNSr = accounts[4]
		const operatoreINsWsx = accounts[3]
		const ownerunKcOPt = accounts[1]
		const tokenIdB7qKgU = BigInt("1967")
		const tokenIdr7Txf3O = BigInt("387")
		const nullBU9LnML = await contractiJpNIWe.isApprovedForAll.call(ownerBlaG3mQ, operatorJmoMtuj, {from: accounts[2]});
		await contractiJpNIWe.transferFrom.call(fromvEPZR0H, togXtScT, tokenIdchc1NbJ, {from: accounts[3]});
		await contractiJpNIWe.setApprovalForAll.call(toANxNSr, approvedoGy4gWV, {from: accounts[1]});
		const nulluHojUim = await contractiJpNIWe.isApprovedForAll.call(ownerunKcOPt, operatoreINsWsx, {from: accounts[2]});
		const nullyD8Tw8K = await contractiJpNIWe.getApproved.call(tokenIdB7qKgU, {from: accounts[0]});
		const nulljDQaX7w = await contractiJpNIWe.getApproved.call(tokenIdr7Txf3O, {from: accounts[0]});

		assert.equal(nullBU9LnML, false)
		await expect(contractiJpNIWe.transferFrom.call(fromvEPZR0H, togXtScT, tokenIdchc1NbJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractFN0JceK = await ERC721.new({from: accounts[3]});
		const operatorYCdhEN0 = accounts[2]
		const ownerPcBr28E = accounts[4]
		const tokenIdZIVCY1R = BigInt("1982")
		const toNH3a1jj = accounts[4]
		const fromA1AhR1C = accounts[0]
		const _datatAt1T4h = "0x040d0c121701140b19140c03010f141a150111030b0e071e041b080a1e131e"
		const tokenIdtZ5UFK4 = BigInt("2")
		const toyqdoDI = accounts[1]
		const fromIVawqjg = accounts[2]
		const tokenIdeOh73c2 = BigInt("853")
		const nulluCHZSgh = await contractFN0JceK.isApprovedForAll.call(ownerPcBr28E, operatorYCdhEN0, {from: accounts[0]});
		await contractFN0JceK.safeTransferFrom.call(fromA1AhR1C, toNH3a1jj, tokenIdZIVCY1R, {from: accounts[0]});
		await contractFN0JceK.safeTransferFrom.call(fromIVawqjg, toyqdoDI, tokenIdtZ5UFK4, _datatAt1T4h, {from: accounts[1]});
		const nullKfSxpUO = await contractFN0JceK.ownerOf.call(tokenIdeOh73c2, {from: accounts[4]});

		assert.equal(nulluCHZSgh, false)
		await expect(contractFN0JceK.safeTransferFrom.call(fromA1AhR1C, toNH3a1jj, tokenIdZIVCY1R, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracthWnQsit = await ERC721.new({from: accounts[3]});
		const approvedWUhlhEm = true
		const toLrITnC1 = accounts[2]
		const tokenIdxnocFin = BigInt("96")
		const tokenIdB1PRFGU = BigInt("842")
		await contracthWnQsit.setApprovalForAll.call(toLrITnC1, approvedWUhlhEm, {from: accounts[2]});
		const nullXax7jpI = await contracthWnQsit.ownerOf.call(tokenIdxnocFin, {from: accounts[1]});
		const nullpmr1lb = await contracthWnQsit.ownerOf.call(tokenIdB1PRFGU, {from: accounts[4]});

		await expect(contracthWnQsit.setApprovalForAll.call(toLrITnC1, approvedWUhlhEm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})