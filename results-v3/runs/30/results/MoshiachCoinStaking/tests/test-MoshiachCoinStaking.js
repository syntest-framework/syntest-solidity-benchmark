const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingRX0YxW = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressGgu7uSr = accounts[4]
		const addressomIn70U = accounts[3]
		const addressaMVQTeX = await MoshiachCoinStakingRX0YxW.transferOwnership.call(addressGgu7uSr, {from: "0x0000000000000000000000000000000000000001"});
		const uintkOAMBYX = await MoshiachCoinStakingRX0YxW.getStakingAndDaoAmount.call({from: accounts[3]});
		const uinttZl4Kpm = await MoshiachCoinStakingRX0YxW.getPendingDivs.call(addressomIn70U, {from: accounts[1]});

		await expect(MoshiachCoinStakingRX0YxW.transferOwnership.call(addressGgu7uSr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingtsMk3X1 = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintkQF3vnS = BigInt("692")
		const addresssr7SsTq = accounts[2]
		const addressSX1GqEd = accounts[2]
		const uintuqoUo7W = BigInt("1475")
		const address0LXQZX = accounts[3]
		const uintFvPu4ZX = await MoshiachCoinStakingtsMk3X1.getStakingAndDaoAmount.call({from: accounts[0]});
		const addressQwcsih = await MoshiachCoinStakingtsMk3X1.transferAnyERC20Tokens.call(addressSX1GqEd, addresssr7SsTq, uintkQF3vnS, {from: accounts[4]});
		const uintOlXkx1u = await MoshiachCoinStakingtsMk3X1.deposit.call(uintuqoUo7W, {from: accounts[2]});
		await MoshiachCoinStakingtsMk3X1.claimDivs.call({from: accounts[3]});
		const uintJJqXL1 = await MoshiachCoinStakingtsMk3X1.getPendingDivs.call(address0LXQZX, {from: accounts[5]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingIxsW1mQ = await MoshiachCoinStaking.new({from: accounts[4]});
		const uintJ8RW6hB = BigInt("623")
		const uintWrvM2aL = await MoshiachCoinStakingIxsW1mQ.getNumberOfHolders.call({from: accounts[0]});
		const uintjyHFPHj = await MoshiachCoinStakingIxsW1mQ.deposit.call(uintJ8RW6hB, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintWrvM2aL, BigInt("0"))
		await expect(MoshiachCoinStakingIxsW1mQ.deposit.call(uintJ8RW6hB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingjJKjID = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressFuIbtJo = accounts[3]
		const uintXyBD2sh = BigInt("179")
		const addressEfwOQpl = "0x0000000000000000000000000000000000000001"
		const uintw0dvhb = BigInt("1965")
		const uintfdMcZeT = await MoshiachCoinStakingjJKjID.getPendingDivs.call(addressFuIbtJo, {from: accounts[5]});
		const uintj84Ny6A = await MoshiachCoinStakingjJKjID.deposit.call(uintXyBD2sh, {from: accounts[3]});
		const uintj9oEDBG = await MoshiachCoinStakingjJKjID.getPendingDivs.call(addressEfwOQpl, {from: accounts[0]});
		const uintYzWErLC = await MoshiachCoinStakingjJKjID.deposit.call(uintw0dvhb, {from: accounts[3]});

		assert.equal(uintfdMcZeT, BigInt("0"))
		await expect(MoshiachCoinStakingjJKjID.deposit.call(uintXyBD2sh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingNnmrdwk = await MoshiachCoinStaking.new({from: accounts[1]});
		const addressFO9IKNE = accounts[1]
		const uintT2wXXv = BigInt("1165")
		const uintDThQ7W1 = BigInt("621")
		const addressLEDiWB = accounts[0]
		const uintrGDLeoH = await MoshiachCoinStakingNnmrdwk.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintW1Xq27s = await MoshiachCoinStakingNnmrdwk.getPendingDivs.call(addressFO9IKNE, {from: accounts[0]});
		const uintMKB2wm0 = await MoshiachCoinStakingNnmrdwk.withdraw.call(uintT2wXXv, {from: accounts[4]});
		const uintbHbSW5A = await MoshiachCoinStakingNnmrdwk.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintANh6Fxa = await MoshiachCoinStakingNnmrdwk.withdraw.call(uintDThQ7W1, {from: accounts[2]});
		const uintQE8fj37 = await MoshiachCoinStakingNnmrdwk.getPendingDivs.call(addressLEDiWB, {from: accounts[2]});

		assert.equal(uintW1Xq27s, BigInt("0"))
		assert.equal(uintrGDLeoH, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingNnmrdwk.withdraw.call(uintT2wXXv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingIxsW1mQ = await MoshiachCoinStaking.new({from: accounts[4]});
		const uinteycDWOw = BigInt("214")
		const uintWrvM2aL = await MoshiachCoinStakingIxsW1mQ.getNumberOfHolders.call({from: accounts[0]});
		await MoshiachCoinStakingIxsW1mQ.onlyOwner.call({from: accounts[1]});
		const uintjyHFPHj = await MoshiachCoinStakingIxsW1mQ.deposit.call(uinteycDWOw, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintWrvM2aL, BigInt("0"))
		await expect(MoshiachCoinStakingIxsW1mQ.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingOCppLuh = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressmqWpkKm = accounts[4]
		const uintJQAeGtV = BigInt("1337")
		const addresslm16gL = "0x0000000000000000000000000000000000000001"
		const addressrZysFaD = accounts[1]
		const addressBA5hgGR = await MoshiachCoinStakingOCppLuh.transferOwnership.call(addressmqWpkKm, {from: accounts[2]});
		const uintgIfjS94 = await MoshiachCoinStakingOCppLuh.deposit.call(uintJQAeGtV, {from: accounts[2]});
		const addressvUx7kof = await MoshiachCoinStakingOCppLuh.transferOwnership.call(addresslm16gL, {from: accounts[4]});
		const uintzm67IZ = await MoshiachCoinStakingOCppLuh.getPendingDivs.call(addressrZysFaD, {from: accounts[4]});

		await expect(MoshiachCoinStakingOCppLuh.deposit.call(uintJQAeGtV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingjJKjID = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressbAssOBG = accounts[3]
		const uintoAPYCq = BigInt("739")
		const addressU7vDXt9 = accounts[4]
		const addressJgmjnId = accounts[0]
		const uintFkvPhDN = BigInt("179")
		const addressBxjoYyQ = "0x0000000000000000000000000000000000000000"
		const uintqGoXKPJ = BigInt("1965")
		const uintfdMcZeT = await MoshiachCoinStakingjJKjID.getPendingDivs.call(addressbAssOBG, {from: accounts[5]});
		await MoshiachCoinStakingjJKjID.claimDivs.call({from: accounts[2]});
		const addressthHMD6g = await MoshiachCoinStakingjJKjID.transferAnyERC20Tokens.call(addressJgmjnId, addressU7vDXt9, uintoAPYCq, {from: accounts[0]});
		const uintj84Ny6A = await MoshiachCoinStakingjJKjID.deposit.call(uintFkvPhDN, {from: accounts[3]});
		const uintj9oEDBG = await MoshiachCoinStakingjJKjID.getPendingDivs.call(addressBxjoYyQ, {from: accounts[0]});
		const uintYzWErLC = await MoshiachCoinStakingjJKjID.deposit.call(uintqGoXKPJ, {from: accounts[3]});

		assert.equal(uintfdMcZeT, BigInt("0"))
		await expect(MoshiachCoinStakingjJKjID.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingIxsW1mQ = await MoshiachCoinStaking.new({from: accounts[4]});
		const uintPxCh0DL = BigInt("1291")
		const addressDPnLLJC = accounts[4]
		const addressHrG2hcb = accounts[1]
		const addressz5gPrNG = await MoshiachCoinStakingIxsW1mQ.transferAnyERC20Tokens.call(addressHrG2hcb, addressDPnLLJC, uintPxCh0DL, {from: accounts[4]});
		await MoshiachCoinStakingIxsW1mQ.claimDivs.call({from: accounts[1]});

		await expect(MoshiachCoinStakingIxsW1mQ.transferAnyERC20Tokens.call(addressHrG2hcb, addressDPnLLJC, uintPxCh0DL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})