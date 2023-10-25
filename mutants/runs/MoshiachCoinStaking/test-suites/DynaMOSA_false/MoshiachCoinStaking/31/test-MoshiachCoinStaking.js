const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingFP6Po1 = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintvmIkRQo = BigInt("1730")
		const uintN2qcdAn = await MoshiachCoinStakingFP6Po1.getNumberOfHolders.call({from: accounts[4]});
		const uinty77ZpGu = await MoshiachCoinStakingFP6Po1.withdraw.call(uintvmIkRQo, {from: accounts[3]});
		await MoshiachCoinStakingFP6Po1.onlyOwner.call({from: accounts[4]});
		const uintd5lkJxN = await MoshiachCoinStakingFP6Po1.getNumberOfHolders.call({from: accounts[4]});
		await MoshiachCoinStakingFP6Po1.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
		const uintff5viev = await MoshiachCoinStakingFP6Po1.getStakingAndDaoAmount.call({from: accounts[2]});

		assert.equal(uintN2qcdAn, BigInt("0"))
		await expect(MoshiachCoinStakingFP6Po1.withdraw.call(uintvmIkRQo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingkLUyjS1 = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintKnuo77x = BigInt("96")
		const addressLcrs36i = accounts[4]
		const addressD4jwy3H = accounts[4]
		const addressC7qSI63 = accounts[2]
		const uintMD3aaHs = BigInt("361")
		const addressVb2Fyh = await MoshiachCoinStakingkLUyjS1.transferAnyERC20Tokens.call(addressD4jwy3H, addressLcrs36i, uintKnuo77x, {from: accounts[1]});
		const uintQQR1Rkq = await MoshiachCoinStakingkLUyjS1.getPendingDivs.call(addressC7qSI63, {from: "0x0000000000000000000000000000000000000001"});
		const uintQbxzJ60 = await MoshiachCoinStakingkLUyjS1.withdraw.call(uintMD3aaHs, {from: accounts[2]});

		await expect(MoshiachCoinStakingkLUyjS1.transferAnyERC20Tokens.call(addressD4jwy3H, addressLcrs36i, uintKnuo77x, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingSP76tRn = await MoshiachCoinStaking.new({from: accounts[1]});
		const addressnkQVFh6 = accounts[1]
		const uinteLuLCBV = await MoshiachCoinStakingSP76tRn.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintcQKQ0DA = await MoshiachCoinStakingSP76tRn.getNumberOfHolders.call({from: accounts[5]});
		await MoshiachCoinStakingSP76tRn.claimDivs.call({from: accounts[3]});
		const addressOBmEJQ = await MoshiachCoinStakingSP76tRn.transferOwnership.call(addressnkQVFh6, {from: accounts[1]});

		assert.equal(uintcQKQ0DA, BigInt("0"))
		assert.equal(uinteLuLCBV, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingSP76tRn.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingg9gXJLH = await MoshiachCoinStaking.new({from: accounts[5]});
		const addressG76Jtt4 = accounts[4]
		await MoshiachCoinStakingg9gXJLH.onlyOwner.call({from: accounts[3]});
		const addressIYemYqF = await MoshiachCoinStakingg9gXJLH.transferOwnership.call(addressG76Jtt4, {from: accounts[0]});

		await expect(MoshiachCoinStakingg9gXJLH.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingvBe0bUp = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressXeCMAZx = accounts[4]
		const uinttmoTqlx = BigInt("135")
		const uintKcZzgUU = await MoshiachCoinStakingvBe0bUp.getPendingDivs.call(addressXeCMAZx, {from: accounts[0]});
		const uintHzwmKvm = await MoshiachCoinStakingvBe0bUp.deposit.call(uinttmoTqlx, {from: accounts[0]});

		assert.equal(uintKcZzgUU, BigInt("0"))
		await expect(MoshiachCoinStakingvBe0bUp.deposit.call(uinttmoTqlx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingwJXpZA5 = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uinteRKNzl = BigInt("1384")
		const uinte3pp0gq = BigInt("910")
		const addressQgRcaOe = accounts[5]
		const uintv4OEDhf = await MoshiachCoinStakingwJXpZA5.deposit.call(uinteRKNzl, {from: accounts[3]});
		const uintcFz9fGK = await MoshiachCoinStakingwJXpZA5.getNumberOfHolders.call({from: accounts[2]});
		const uintHNbcwsF = await MoshiachCoinStakingwJXpZA5.deposit.call(uinte3pp0gq, {from: accounts[3]});
		const uintqRFnbuu = await MoshiachCoinStakingwJXpZA5.getPendingDivs.call(addressQgRcaOe, {from: accounts[0]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingvBe0bUp = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintJB3l11h = BigInt("0")
		const uintjrTLw7D = BigInt("1251")
		const addressFaFFHAP = accounts[1]
		const uintQV0rDbq = await MoshiachCoinStakingvBe0bUp.getNumberOfHolders.call({from: accounts[5]});
		const uintcWaG4Tb = await MoshiachCoinStakingvBe0bUp.deposit.call(uintJB3l11h, {from: accounts[3]});
		const uintuzSaLWZ = await MoshiachCoinStakingvBe0bUp.withdraw.call(uintjrTLw7D, {from: accounts[3]});
		await MoshiachCoinStakingvBe0bUp.claimDivs.call({from: accounts[4]});
		const uintUHSNxIr = await MoshiachCoinStakingvBe0bUp.getStakingAndDaoAmount.call({from: accounts[1]});
		const addressGJDDydx = await MoshiachCoinStakingvBe0bUp.transferOwnership.call(addressFaFFHAP, {from: accounts[5]});
		await MoshiachCoinStakingvBe0bUp.claimDivs.call({from: accounts[2]});

		assert.equal(uintQV0rDbq, BigInt("0"))
		await expect(MoshiachCoinStakingvBe0bUp.deposit.call(uintJB3l11h, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingvBe0bUp = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressAy3scj0 = "0x00000000000000000000000000000000000000-1"
		const uintfyutHCv = BigInt("0")
		const uintNhntkfS = BigInt("998")
		const uintucF8NK2 = BigInt("734")
		const uintYYQzhi2 = await MoshiachCoinStakingvBe0bUp.getStakingAndDaoAmount.call({from: accounts[4]});
		await MoshiachCoinStakingvBe0bUp.claimDivs.call({from: accounts[2]});
		const uintdELgL0j = await MoshiachCoinStakingvBe0bUp.getPendingDivs.call(addressAy3scj0, {from: accounts[0]});
		const uintQV0rDbq = await MoshiachCoinStakingvBe0bUp.getNumberOfHolders.call({from: accounts[5]});
		await MoshiachCoinStakingvBe0bUp.claimDivs.call({from: accounts[0]});
		const uintwhnAAjC = await MoshiachCoinStakingvBe0bUp.getNumberOfHolders.call({from: accounts[2]});
		const uintoX2hHrY = await MoshiachCoinStakingvBe0bUp.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintcWaG4Tb = await MoshiachCoinStakingvBe0bUp.deposit.call(uintfyutHCv, {from: accounts[3]});
		const uintc0AlPav = await MoshiachCoinStakingvBe0bUp.withdraw.call(uintNhntkfS, {from: accounts[2]});
		const uinteWADE9D = await MoshiachCoinStakingvBe0bUp.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintYQbkIwl = await MoshiachCoinStakingvBe0bUp.withdraw.call(uintucF8NK2, {from: accounts[1]});
		await MoshiachCoinStakingvBe0bUp.claimDivs.call({from: accounts[0]});
		await MoshiachCoinStakingvBe0bUp.claimDivs.call({from: accounts[4]});
		await MoshiachCoinStakingvBe0bUp.claimDivs.call({from: accounts[2]});

		assert.equal(uintYYQzhi2, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingvBe0bUp.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})