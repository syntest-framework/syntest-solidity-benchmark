const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingQeeMgY8 = await MoshiachCoinStaking.new({from: accounts[3]});
		await MoshiachCoinStakingQeeMgY8.onlyOwner.call({from: accounts[1]});
		await MoshiachCoinStakingQeeMgY8.claimDivs.call({from: accounts[1]});
		await MoshiachCoinStakingQeeMgY8.claimDivs.call({from: accounts[2]});

		await expect(MoshiachCoinStakingQeeMgY8.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingNsCWpja = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintji2Wfwz = BigInt("1334")
		const addressIAYdOEI = accounts[1]
		const uintKu8YpPs = await MoshiachCoinStakingNsCWpja.withdraw.call(uintji2Wfwz, {from: accounts[0]});
		await MoshiachCoinStakingNsCWpja.onlyOwner.call({from: accounts[0]});
		const addressKvFEYBq = await MoshiachCoinStakingNsCWpja.transferOwnership.call(addressIAYdOEI, {from: accounts[2]});
		await MoshiachCoinStakingNsCWpja.claimDivs.call({from: accounts[0]});

		await expect(MoshiachCoinStakingNsCWpja.withdraw.call(uintji2Wfwz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingCjfdOu = await MoshiachCoinStaking.new({from: accounts[3]});
		const addressn1UTW3R = accounts[4]
		const uintnyYLW0 = BigInt("1101")
		const uintym26X5K = BigInt("2013")
		const uintcYtoIf = BigInt("1051")
		const addressLc5RcaV = await MoshiachCoinStakingCjfdOu.transferOwnership.call(addressn1UTW3R, {from: accounts[1]});
		const uintaLBLZZQ = await MoshiachCoinStakingCjfdOu.deposit.call(uintnyYLW0, {from: "0x0000000000000000000000000000000000000001"});
		await MoshiachCoinStakingCjfdOu.onlyOwner.call({from: accounts[4]});
		const uintyIo5RWs = await MoshiachCoinStakingCjfdOu.deposit.call(uintym26X5K, {from: accounts[1]});
		const uintCunOazG = await MoshiachCoinStakingCjfdOu.withdraw.call(uintcYtoIf, {from: accounts[4]});

		await expect(MoshiachCoinStakingCjfdOu.transferOwnership.call(addressn1UTW3R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingMXQhFER = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressvKoxGIz = "0x0000000000000000000000000000000000000001"
		const uintQlL0KiU = BigInt("382")
		const uintDQnGIJe = await MoshiachCoinStakingMXQhFER.getPendingDivs.call(addressvKoxGIz, {from: accounts[0]});
		const uintc3Aeloz = await MoshiachCoinStakingMXQhFER.getStakingAndDaoAmount.call({from: accounts[4]});
		const uintlCYjtMk = await MoshiachCoinStakingMXQhFER.deposit.call(uintQlL0KiU, {from: accounts[4]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingyDP7oAk = await MoshiachCoinStaking.new({from: accounts[1]});
		const addressl1c3Plj = accounts[1]
		const uintwFF7qUA = await MoshiachCoinStakingyDP7oAk.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintFpLuSqQ = await MoshiachCoinStakingyDP7oAk.getPendingDivs.call(addressl1c3Plj, {from: accounts[4]});
		await MoshiachCoinStakingyDP7oAk.claimDivs.call({from: accounts[4]});

		assert.equal(uintFpLuSqQ, BigInt("0"))
		assert.equal(uintwFF7qUA, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingyDP7oAk.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingWdz8oKM = await MoshiachCoinStaking.new({from: accounts[1]});
		const addressC1TwWhK = accounts[5]
		await MoshiachCoinStakingWdz8oKM.claimDivs.call({from: accounts[3]});
		const uintnHNtVar = await MoshiachCoinStakingWdz8oKM.getNumberOfHolders.call({from: accounts[4]});
		const addressfbrObGE = await MoshiachCoinStakingWdz8oKM.transferOwnership.call(addressC1TwWhK, {from: accounts[0]});

		await expect(MoshiachCoinStakingWdz8oKM.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingWdz8oKM = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintMIz26ww = BigInt("795")
		const addressZBZGfw3 = accounts[5]
		const uinttcACfHj = await MoshiachCoinStakingWdz8oKM.deposit.call(uintMIz26ww, {from: "0x0000000000000000000000000000000000000001"});
		await MoshiachCoinStakingWdz8oKM.claimDivs.call({from: accounts[3]});
		const uintnHNtVar = await MoshiachCoinStakingWdz8oKM.getNumberOfHolders.call({from: accounts[4]});
		const addressfbrObGE = await MoshiachCoinStakingWdz8oKM.transferOwnership.call(addressZBZGfw3, {from: accounts[0]});
		const uintpXTdi2n = await MoshiachCoinStakingWdz8oKM.getStakingAndDaoAmount.call({from: accounts[3]});

		await expect(MoshiachCoinStakingWdz8oKM.deposit.call(uintMIz26ww, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingyDP7oAk = await MoshiachCoinStaking.new({from: accounts[1]});
		const addressU6sXP7k = accounts[2]
		const addressi5PaSAe = accounts[2]
		const addresstfCUM35 = accounts[1]
		const uintvLKPStn = await MoshiachCoinStakingyDP7oAk.getPendingDivs.call(addressU6sXP7k, {from: accounts[5]});
		const uintwFF7qUA = await MoshiachCoinStakingyDP7oAk.getStakingAndDaoAmount.call({from: accounts[2]});
		const addresslGLuwmL = await MoshiachCoinStakingyDP7oAk.transferOwnership.call(addressi5PaSAe, {from: accounts[1]});
		const uintFpLuSqQ = await MoshiachCoinStakingyDP7oAk.getPendingDivs.call(addresstfCUM35, {from: accounts[4]});
		await MoshiachCoinStakingyDP7oAk.claimDivs.call({from: accounts[4]});

		assert.equal(uintFpLuSqQ, BigInt("0"))
		assert.equal(uintvLKPStn, BigInt("0"))
		assert.equal(uintwFF7qUA, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingyDP7oAk.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingWdz8oKM = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintWxbI0gr = BigInt("0")
		const addressHYrTSld = accounts[1]
		const addressP5gUq5A = accounts[5]
		const uintWpwgx4x = await MoshiachCoinStakingWdz8oKM.deposit.call(uintWxbI0gr, {from: accounts[0]});
		await MoshiachCoinStakingWdz8oKM.claimDivs.call({from: accounts[3]});
		const uintnHNtVar = await MoshiachCoinStakingWdz8oKM.getNumberOfHolders.call({from: accounts[4]});
		const addressmdpvgsv = await MoshiachCoinStakingWdz8oKM.transferOwnership.call(addressHYrTSld, {from: accounts[2]});
		const addressfbrObGE = await MoshiachCoinStakingWdz8oKM.transferOwnership.call(addressP5gUq5A, {from: accounts[0]});

		await expect(MoshiachCoinStakingWdz8oKM.deposit.call(uintWxbI0gr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingyDP7oAk = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintbEfza6d = BigInt("249")
		const addresspEBoDQR = accounts[3]
		const addressmu5iI4O = accounts[0]
		const uintGSBqSVR = BigInt("1348")
		const addressNbTGrBq = await MoshiachCoinStakingyDP7oAk.transferAnyERC20Tokens.call(addressmu5iI4O, addresspEBoDQR, uintbEfza6d, {from: accounts[1]});
		const uintamSqN2 = await MoshiachCoinStakingyDP7oAk.getNumberOfHolders.call({from: accounts[3]});
		const uintazOcAEr = await MoshiachCoinStakingyDP7oAk.deposit.call(uintGSBqSVR, {from: accounts[1]});
		const uintwFF7qUA = await MoshiachCoinStakingyDP7oAk.getStakingAndDaoAmount.call({from: accounts[2]});

		await expect(MoshiachCoinStakingyDP7oAk.transferAnyERC20Tokens.call(addressmu5iI4O, addresspEBoDQR, uintbEfza6d, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})