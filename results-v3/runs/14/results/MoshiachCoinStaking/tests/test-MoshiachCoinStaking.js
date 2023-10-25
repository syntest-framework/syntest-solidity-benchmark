const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingmuaEX1 = await MoshiachCoinStaking.new({from: accounts[1]});
		const addressWIWs8VY = "0x0000000000000000000000000000000000000001"
		const uintiSe0CsT = BigInt("261")
		const uintqqiGXpi = BigInt("1473")
		const uinteMr1Uef = await MoshiachCoinStakingmuaEX1.getStakingAndDaoAmount.call({from: accounts[4]});
		const addressO4Q2gg2 = await MoshiachCoinStakingmuaEX1.transferOwnership.call(addressWIWs8VY, {from: accounts[3]});
		const uintVIYLB2o = await MoshiachCoinStakingmuaEX1.deposit.call(uintiSe0CsT, {from: accounts[2]});
		const uintLU3y7bj = await MoshiachCoinStakingmuaEX1.getStakingAndDaoAmount.call({from: accounts[3]});
		await MoshiachCoinStakingmuaEX1.claimDivs.call({from: accounts[3]});
		const uintYaAP6L9 = await MoshiachCoinStakingmuaEX1.deposit.call(uintqqiGXpi, {from: accounts[3]});

		assert.equal(uinteMr1Uef, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingmuaEX1.transferOwnership.call(addressWIWs8VY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingSsfdcJA = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintk9UFFZ4 = BigInt("145")
		const addressQ8TElYA = "0x0000000000000000000000000000000000000001"
		const addresscSkQLA = accounts[3]
		const uintHsFGeDl = BigInt("1058")
		const addresskt1XZxx = accounts[5]
		const addressBV68on = await MoshiachCoinStakingSsfdcJA.transferAnyERC20Tokens.call(addresscSkQLA, addressQ8TElYA, uintk9UFFZ4, {from: accounts[3]});
		const uintkHIg9oF = await MoshiachCoinStakingSsfdcJA.withdraw.call(uintHsFGeDl, {from: accounts[4]});
		const addressZSxYnIB = await MoshiachCoinStakingSsfdcJA.transferOwnership.call(addresskt1XZxx, {from: accounts[1]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingo5goZRc = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintqOFS7Pl = BigInt("1296")
		const uintEiMGngf = BigInt("984")
		const uintWhuQEmT = await MoshiachCoinStakingo5goZRc.withdraw.call(uintqOFS7Pl, {from: accounts[0]});
		const uintBDR7Dby = await MoshiachCoinStakingo5goZRc.withdraw.call(uintEiMGngf, {from: accounts[1]});
		await MoshiachCoinStakingo5goZRc.claimDivs.call({from: accounts[0]});

		await expect(MoshiachCoinStakingo5goZRc.withdraw.call(uintqOFS7Pl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingPthY0k = await MoshiachCoinStaking.new({from: accounts[4]});
		const uintpaI7058 = BigInt("583")
		const addressz0NzLV = accounts[0]
		const addressidPqAEP = accounts[1]
		const uintjviLWZW = BigInt("2047")
		await MoshiachCoinStakingPthY0k.claimDivs.call({from: accounts[2]});
		const uintm4hyryI = await MoshiachCoinStakingPthY0k.withdraw.call(uintpaI7058, {from: accounts[5]});
		const uintegClJkk = await MoshiachCoinStakingPthY0k.getPendingDivs.call(addressz0NzLV, {from: accounts[0]});
		const uintnsh1fK6 = await MoshiachCoinStakingPthY0k.getPendingDivs.call(addressidPqAEP, {from: accounts[1]});
		const uintPXMIqWO = await MoshiachCoinStakingPthY0k.deposit.call(uintjviLWZW, {from: accounts[1]});

		await expect(MoshiachCoinStakingPthY0k.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingFSYhcY = await MoshiachCoinStaking.new({from: accounts[3]});
		const addressVpF4c9X = accounts[4]
		const uintPR1gvdw = BigInt("912")
		const uintsFzmnD = await MoshiachCoinStakingFSYhcY.getPendingDivs.call(addressVpF4c9X, {from: accounts[3]});
		await MoshiachCoinStakingFSYhcY.onlyOwner.call({from: accounts[5]});
		await MoshiachCoinStakingFSYhcY.claimDivs.call({from: accounts[2]});
		const uintuUk7xnm = await MoshiachCoinStakingFSYhcY.getNumberOfHolders.call({from: accounts[1]});
		const uintEu0PKSv = await MoshiachCoinStakingFSYhcY.withdraw.call(uintPR1gvdw, {from: accounts[5]});

		assert.equal(uintsFzmnD, BigInt("0"))
		await expect(MoshiachCoinStakingFSYhcY.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakinggw6ZGWc = await MoshiachCoinStaking.new({from: accounts[3]});
		const addressgnZHbn = accounts[3]
		const addressPs2Cuip = accounts[4]
		const uintbOPVvsc = await MoshiachCoinStakinggw6ZGWc.getNumberOfHolders.call({from: accounts[0]});
		const addressHEjMSpV = await MoshiachCoinStakinggw6ZGWc.transferOwnership.call(addressgnZHbn, {from: accounts[1]});
		const uintIiZD6CU = await MoshiachCoinStakinggw6ZGWc.getPendingDivs.call(addressPs2Cuip, {from: accounts[4]});

		assert.equal(uintbOPVvsc, BigInt("0"))
		await expect(MoshiachCoinStakinggw6ZGWc.transferOwnership.call(addressgnZHbn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingqU3DZ0U = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintzf9Gj4n = BigInt("553")
		const addresseTOYOKy = accounts[1]
		const addresseZkcoB = accounts[3]
		const uintJP4Q9Pw = BigInt("768")
		const uintLsfhoCE = await MoshiachCoinStakingqU3DZ0U.deposit.call(uintzf9Gj4n, {from: accounts[4]});
		const uinteZNVYed = await MoshiachCoinStakingqU3DZ0U.getNumberOfHolders.call({from: accounts[5]});
		await MoshiachCoinStakingqU3DZ0U.claimDivs.call({from: accounts[1]});
		const uintvQmPLOk = await MoshiachCoinStakingqU3DZ0U.getPendingDivs.call(addresseTOYOKy, {from: "0x0000000000000000000000000000000000000001"});
		const addressub9Y9M0 = await MoshiachCoinStakingqU3DZ0U.transferOwnership.call(addresseZkcoB, {from: accounts[4]});
		const uintQkhjFrE = await MoshiachCoinStakingqU3DZ0U.withdraw.call(uintJP4Q9Pw, {from: accounts[4]});

		await expect(MoshiachCoinStakingqU3DZ0U.deposit.call(uintzf9Gj4n, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingKOJosTm = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressFxluzb = accounts[0]
		const addressuDG5LnC = accounts[4]
		const addressecKtAJ4 = await MoshiachCoinStakingKOJosTm.transferOwnership.call(addressFxluzb, {from: accounts[2]});
		const addressG5c2YXn = await MoshiachCoinStakingKOJosTm.transferOwnership.call(addressuDG5LnC, {from: accounts[0]});
		await MoshiachCoinStakingKOJosTm.onlyOwner.call({from: accounts[3]});
		await MoshiachCoinStakingKOJosTm.claimDivs.call({from: accounts[1]});
		await MoshiachCoinStakingKOJosTm.claimDivs.call({from: accounts[2]});
		const uintazEyYyT = await MoshiachCoinStakingKOJosTm.getStakingAndDaoAmount.call({from: accounts[2]});

		await expect(MoshiachCoinStakingKOJosTm.transferOwnership.call(addressuDG5LnC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingLhtMp7 = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintWX8JwKh = BigInt("214")
		const addresszrMiu5x = accounts[2]
		const addressMfqG8N = accounts[2]
		const addressnlVPuNc = accounts[1]
		const uint5SERhT = BigInt("228")
		const addressXaTPbJ8 = accounts[2]
		const addressS6NznjB = accounts[1]
		const addressfqkyuyG = accounts[1]
		const addressdgzXezV = "0x0000000000000000000000000000000000000001"
		const addressLtXP0wu = await MoshiachCoinStakingLhtMp7.transferAnyERC20Tokens.call(addressMfqG8N, addresszrMiu5x, uintWX8JwKh, {from: accounts[0]});
		const addressdmKpsLM = await MoshiachCoinStakingLhtMp7.transferOwnership.call(addressnlVPuNc, {from: accounts[4]});
		const addressfrad2uB = await MoshiachCoinStakingLhtMp7.transferAnyERC20Tokens.call(addressS6NznjB, addressXaTPbJ8, uint5SERhT, {from: accounts[1]});
		const addresshxSk1Rv = await MoshiachCoinStakingLhtMp7.transferOwnership.call(addressfqkyuyG, {from: accounts[4]});
		const addressmzfURE = await MoshiachCoinStakingLhtMp7.transferOwnership.call(addressdgzXezV, {from: accounts[0]});

		await expect(MoshiachCoinStakingLhtMp7.transferAnyERC20Tokens.call(addressMfqG8N, addresszrMiu5x, uintWX8JwKh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})