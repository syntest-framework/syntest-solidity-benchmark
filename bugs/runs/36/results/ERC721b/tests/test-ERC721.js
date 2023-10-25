const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractex79svz = await ERC721.new({from: accounts[4]});
		const operatorzIbiuG = accounts[1]
		const ownerMobndKS = accounts[4]
		const tokenIdW2FrqzN = BigInt("573")
		const topdfh9d = accounts[0]
		const fromNkolDpp = accounts[3]
		const nullqviFY5B = await contractex79svz.isApprovedForAll.call(ownerMobndKS, operatorzIbiuG, {from: accounts[3]});
		await contractex79svz.transferFrom.call(fromNkolDpp, topdfh9d, tokenIdW2FrqzN, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullqviFY5B, false)
		await expect(contractex79svz.transferFrom.call(fromNkolDpp, topdfh9d, tokenIdW2FrqzN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractztSwtvV = await ERC721.new({from: accounts[1]});
		const approvedtXJONmq = true
		const toEhOpTTb = accounts[2]
		const approvedm4TBqLL = false
		const toqhHSr0c = accounts[4]
		const tokenIdJaFNrj = BigInt("752")
		const tokenIdjvIbGvd = BigInt("9")
		const toHGWimc3 = "0x0000000000000000000000000000000000000001"
		const fromyOfXt5n = accounts[3]
		await contractztSwtvV.setApprovalForAll.call(toEhOpTTb, approvedtXJONmq, {from: accounts[3]});
		await contractztSwtvV.setApprovalForAll.call(toqhHSr0c, approvedm4TBqLL, {from: accounts[0]});
		const nullNXPVFWU = await contractztSwtvV.ownerOf.call(tokenIdJaFNrj, {from: accounts[2]});
		await contractztSwtvV.transferFrom.call(fromyOfXt5n, toHGWimc3, tokenIdjvIbGvd, {from: accounts[1]});

		await expect(contractztSwtvV.setApprovalForAll.call(toEhOpTTb, approvedtXJONmq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractk53kubu = await ERC721.new({from: accounts[2]});
		const approvedhGq3PmY = true
		const towspwHl = accounts[2]
		const tokenIddJyPVG = BigInt("140")
		const toqpJWIEm = accounts[4]
		const fromKQsYBHd = accounts[1]
		const approvedNPxugGA = true
		const toSg4ooOQ = accounts[2]
		await contractk53kubu.setApprovalForAll.call(towspwHl, approvedhGq3PmY, {from: "0x0000000000000000000000000000000000000001"});
		await contractk53kubu.safeTransferFrom.call(fromKQsYBHd, toqpJWIEm, tokenIddJyPVG, {from: accounts[4]});
		await contractk53kubu.setApprovalForAll.call(toSg4ooOQ, approvedNPxugGA, {from: accounts[0]});

		await expect(contractk53kubu.setApprovalForAll.call(towspwHl, approvedhGq3PmY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractLu8p9wm = await ERC721.new({from: accounts[1]});
		const tokenIdFM3awFM = BigInt("1691")
		const tokenIdeRVbSc = BigInt("1602")
		const torn8N2Af = accounts[5]
		const fromwmWsCsX = accounts[0]
		const nullRd87o1w = await contractLu8p9wm.getApproved.call(tokenIdFM3awFM, {from: accounts[1]});
		await contractLu8p9wm.transferFrom.call(fromwmWsCsX, torn8N2Af, tokenIdeRVbSc, {from: accounts[4]});

		await expect(contractLu8p9wm.getApproved.call(tokenIdFM3awFM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractE4ig53r = await ERC721.new({from: accounts[4]});
		const ownerdm1ACl1 = accounts[4]
		const tokenIdUuf4MPi = BigInt("668")
		const towArc986 = accounts[3]
		const tokenIdy6eqsgo = BigInt("1750")
		const toFy79M5P = accounts[3]
		const fromUC4GqVr = accounts[2]
		const tokenIdZjTXz4l = BigInt("1602")
		const toDyJNpVs = accounts[4]
		const fromyBEN5TH = accounts[3]
		const nullEpzbg3 = await contractE4ig53r.balanceOf.call(ownerdm1ACl1, {from: accounts[0]});
		await contractE4ig53r.approve.call(towArc986, tokenIdUuf4MPi, {from: accounts[3]});
		await contractE4ig53r.transferFrom.call(fromUC4GqVr, toFy79M5P, tokenIdy6eqsgo, {from: accounts[1]});
		await contractE4ig53r.transferFrom.call(fromyBEN5TH, toDyJNpVs, tokenIdZjTXz4l, {from: accounts[1]});

		assert.equal(nullEpzbg3, 0)
		await expect(contractE4ig53r.approve.call(towArc986, tokenIdUuf4MPi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractm4JhL8 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const operatorttmLBnZ = accounts[2]
		const ownernmwICiv = accounts[2]
		const tokenIdAQLqkrH = BigInt("167")
		const operator6KfuOj = accounts[4]
		const ownerNcCv61 = accounts[3]
		const nullyqtDz16 = await contractm4JhL8.isApprovedForAll.call(ownernmwICiv, operatorttmLBnZ, {from: accounts[1]});
		const nullDQcHg00 = await contractm4JhL8.ownerOf.call(tokenIdAQLqkrH, {from: accounts[0]});
		const nullq1NgIcW = await contractm4JhL8.isApprovedForAll.call(ownerNcCv61, operator6KfuOj, {from: accounts[3]});
	});

	it('test for ERC721', async () => {
		const contractgSuQiV6 = await ERC721.new({from: accounts[4]});
		const approveddnNSMcv = true
		const toJz3U9R = accounts[4]
		const tokenIdgSHSYh = BigInt("573")
		const toXNv3bBM = accounts[1]
		const fromF6evWTR = accounts[4]
		const approvedVV6THHH = false
		const todSROyJ = "0x0000000000000000000000000000000000000001"
		const tokenIdRAvw1HR = BigInt("494")
		await contractgSuQiV6.setApprovalForAll.call(toJz3U9R, approveddnNSMcv, {from: accounts[4]});
		await contractgSuQiV6.transferFrom.call(fromF6evWTR, toXNv3bBM, tokenIdgSHSYh, {from: "0x0000000000000000000000000000000000000001"});
		await contractgSuQiV6.setApprovalForAll.call(todSROyJ, approvedVV6THHH, {from: "0x0000000000000000000000000000000000000001"});
		const nullNgWuhPH = await contractgSuQiV6.getApproved.call(tokenIdRAvw1HR, {from: accounts[0]});

		await expect(contractgSuQiV6.setApprovalForAll.call(toJz3U9R, approveddnNSMcv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})