const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingOeaPH7I = await EqFinanceStaking.new({from: accounts[4]});
		const uintbfkuTw5 = BigInt("788")
		const addressA91CDVP = accounts[5]
		const addressZ044M7k = accounts[0]
		const addressffWdO29 = accounts[2]
		const uintiPDmhKH = BigInt("219")
//		const addressXEbriEZ = await EqFinanceStakingOeaPH7I.transferAnyERC20Tokens.call(addressZ044M7k, addressA91CDVP, uintbfkuTw5, {from: "0x0000000000000000000000000000000000000001"});
//		const uintkuN2tnY = await EqFinanceStakingOeaPH7I.getStakingAndDaoAmount.call({from: accounts[5]});
//		const uintAGKyTwE = await EqFinanceStakingOeaPH7I.getNumberOfHolders.call({from: accounts[4]});
//		const addressA2OPsgF = await EqFinanceStakingOeaPH7I.transferOwnership.call(addressffWdO29, {from: accounts[4]});
//		const uintTfkpPFn = await EqFinanceStakingOeaPH7I.withdraw.call(uintiPDmhKH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(EqFinanceStakingOeaPH7I.transferAnyERC20Tokens.call(addressZ044M7k, addressA91CDVP, uintbfkuTw5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingffoWN2a = await EqFinanceStaking.new({from: accounts[0]});
		const uintoxqSUcw = BigInt("1342")
		const uintXfyuvTF = BigInt("1731")
		const addressGeOQ9Gw = accounts[2]
		const addressjIKrn0m = "0x0000000000000000000000000000000000000001"
		const uinte64S7wq = BigInt("1652")
		const addressKQK68PR = accounts[3]
		const addressEd9pvfr = accounts[0]
//		const uintkphlorY = await EqFinanceStakingffoWN2a.deposit.call(uintoxqSUcw, {from: "0x0000000000000000000000000000000000000001"});
//		const uintTMJrUrY = await EqFinanceStakingffoWN2a.getNumberOfHolders.call({from: accounts[4]});
//		await EqFinanceStakingffoWN2a.onlyOwner.call({from: accounts[3]});
//		const addressbDEGYLC = await EqFinanceStakingffoWN2a.transferAnyERC20Tokens.call(addressjIKrn0m, addressGeOQ9Gw, uintXfyuvTF, {from: accounts[5]});
//		const addressft1ZUdK = await EqFinanceStakingffoWN2a.transferAnyERC20Tokens.call(addressEd9pvfr, addressKQK68PR, uinte64S7wq, {from: accounts[1]});

		await expect(EqFinanceStakingffoWN2a.deposit.call(uintoxqSUcw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingUvCDEvF = await EqFinanceStaking.new({from: accounts[5]});
		const uintnsMxA3w = BigInt("1108")
		const uintuhTmBi = BigInt("1047")
		const uint1As1rM = BigInt("587")
		const uints4xneV = BigInt("186")
		const addressOTVpSia = accounts[0]
		const uintcb8eRE = BigInt("1640")
//		const uintB9Mha9Q = await EqFinanceStakingUvCDEvF.withdraw.call(uintnsMxA3w, {from: accounts[3]});
//		const uintLJJvhON = await EqFinanceStakingUvCDEvF.deposit.call(uintuhTmBi, {from: accounts[1]});
//		const uintryDZFsr = await EqFinanceStakingUvCDEvF.withdraw.call(uint1As1rM, {from: accounts[2]});
//		const uintXCSSe6S = await EqFinanceStakingUvCDEvF.withdraw.call(uints4xneV, {from: accounts[4]});
//		const addressIu4TVHb = await EqFinanceStakingUvCDEvF.transferOwnership.call(addressOTVpSia, {from: accounts[1]});
//		const uintsIWiWiw = await EqFinanceStakingUvCDEvF.withdraw.call(uintcb8eRE, {from: accounts[4]});

		await expect(EqFinanceStakingUvCDEvF.withdraw.call(uintnsMxA3w, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingCE3c0Kc = await EqFinanceStaking.new({from: accounts[5]});
		const addressbYi3GQ = accounts[1]
		const uintCDBkX9 = BigInt("1351")
		const uintkQ3MxRd = BigInt("702")
		const addressPE6xnpK = accounts[4]
		const addressxdBEYEg = accounts[1]
		const uintLlDu3x = await EqFinanceStakingCE3c0Kc.getPendingDivs.call(addressbYi3GQ, {from: accounts[4]});
//		const uintr6cDnfo = await EqFinanceStakingCE3c0Kc.deposit.call(uintCDBkX9, {from: accounts[5]});
//		const addresspkTd9Ay = await EqFinanceStakingCE3c0Kc.transferAnyERC20Tokens.call(addressxdBEYEg, addressPE6xnpK, uintkQ3MxRd, {from: accounts[2]});
//		const uintNQKVlWT = await EqFinanceStakingCE3c0Kc.getStakingAndDaoAmount.call({from: accounts[2]});

		assert.equal(uintLlDu3x, BigInt("0"))
		await expect(EqFinanceStakingCE3c0Kc.deposit.call(uintCDBkX9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingkx1YOY = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		await EqFinanceStakingkx1YOY.claimDivs.call({from: accounts[0]});
		await EqFinanceStakingkx1YOY.claimDivs.call({from: accounts[1]});
		await EqFinanceStakingkx1YOY.claimDivs.call({from: accounts[4]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingcQ1DfPw = await EqFinanceStaking.new({from: accounts[0]});
		const addressPQ63q3q = accounts[2]
		const uintlT0ZPs4 = await EqFinanceStakingcQ1DfPw.getPendingDivs.call(addressPQ63q3q, {from: accounts[3]});
//		await EqFinanceStakingcQ1DfPw.claimDivs.call({from: accounts[3]});
//		const uintdybrA0p = await EqFinanceStakingcQ1DfPw.getNumberOfHolders.call({from: accounts[0]});
//		const uintcS0i0tJ = await EqFinanceStakingcQ1DfPw.getNumberOfHolders.call({from: accounts[3]});
//		const uintyIjJAiR = await EqFinanceStakingcQ1DfPw.getStakingAndDaoAmount.call({from: accounts[2]});

		assert.equal(uintlT0ZPs4, BigInt("0"))
		await expect(EqFinanceStakingcQ1DfPw.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinguGdQROm = await EqFinanceStaking.new({from: accounts[5]});
		const uintCHu5Xvc = BigInt("551")
		const addressR2gFW0n = accounts[4]
		const addressHeMlOhH = "0x0000000000000000000000000000000000000001"
//		await EqFinanceStakinguGdQROm.onlyOwner.call({from: accounts[4]});
//		await EqFinanceStakinguGdQROm.onlyOwner.call({from: accounts[3]});
//		const uintTinkWGV = await EqFinanceStakinguGdQROm.getNumberOfHolders.call({from: accounts[2]});
//		await EqFinanceStakinguGdQROm.claimDivs.call({from: accounts[3]});
//		const addressMnhCbIc = await EqFinanceStakinguGdQROm.transferAnyERC20Tokens.call(addressHeMlOhH, addressR2gFW0n, uintCHu5Xvc, {from: accounts[5]});

		await expect(EqFinanceStakinguGdQROm.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingsL99mMw = await EqFinanceStaking.new({from: accounts[4]});
		const addressNxsBgz3 = accounts[1]
		const addressQRacUJY = await EqFinanceStakingsL99mMw.transferOwnership.call(addressNxsBgz3, {from: accounts[4]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingW6jlcfV = await EqFinanceStaking.new({from: accounts[0]});
		const uintEWDiOf = BigInt("1230")
		const addressSJfJRu6 = accounts[0]
		const addressIOpbnh = accounts[0]
		const addressi68z7A = accounts[3]
		const uintPfglvoe = await EqFinanceStakingW6jlcfV.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressPMsAf4y = await EqFinanceStakingW6jlcfV.transferAnyERC20Tokens.call(addressIOpbnh, addressSJfJRu6, uintEWDiOf, {from: accounts[0]});
//		const uintukpiPCI = await EqFinanceStakingW6jlcfV.getNumberOfHolders.call({from: accounts[4]});
//		const uintwvDJEl1 = await EqFinanceStakingW6jlcfV.getNumberOfHolders.call({from: accounts[1]});
//		const uintPA8gbd8 = await EqFinanceStakingW6jlcfV.getPendingDivs.call(addressi68z7A, {from: accounts[3]});
//		const uintSfmglr = await EqFinanceStakingW6jlcfV.getNumberOfHolders.call({from: accounts[5]});

		assert.equal(uintPfglvoe, BigInt("0"))
		await expect(EqFinanceStakingW6jlcfV.transferAnyERC20Tokens.call(addressIOpbnh, addressSJfJRu6, uintEWDiOf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingcQ1DfPw = await EqFinanceStaking.new({from: accounts[0]});
		const uintC08gZiD = BigInt("0")
		const uintNOV1cmn = BigInt("155")
		const addresswVMCVfv = accounts[0]
//		const uintz7yVEpu = await EqFinanceStakingcQ1DfPw.deposit.call(uintC08gZiD, {from: accounts[2]});
//		const uintzaKksSQ = await EqFinanceStakingcQ1DfPw.withdraw.call(uintNOV1cmn, {from: accounts[2]});
//		const addressjorBPks = await EqFinanceStakingcQ1DfPw.transferOwnership.call(addresswVMCVfv, {from: accounts[1]});

		await expect(EqFinanceStakingcQ1DfPw.deposit.call(uintC08gZiD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})