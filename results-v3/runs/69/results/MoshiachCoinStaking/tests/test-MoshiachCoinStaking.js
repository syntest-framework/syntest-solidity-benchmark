const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingwKnmJua = await MoshiachCoinStaking.new({from: accounts[4]});
		const uintLIhwyQh = BigInt("737")
		const uint07tj34 = await MoshiachCoinStakingwKnmJua.getStakingAndDaoAmount.call({from: accounts[3]});
		await MoshiachCoinStakingwKnmJua.claimDivs.call({from: accounts[1]});
		const uintVcmpAuQ = await MoshiachCoinStakingwKnmJua.withdraw.call(uintLIhwyQh, {from: accounts[1]});

		assert.equal(uint07tj34, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingwKnmJua.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingYY7KHs = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintg4nIWip = BigInt("1308")
		await MoshiachCoinStakingYY7KHs.onlyOwner.call({from: accounts[5]});
		const uintaCDitj = await MoshiachCoinStakingYY7KHs.getStakingAndDaoAmount.call({from: accounts[5]});
		await MoshiachCoinStakingYY7KHs.claimDivs.call({from: accounts[0]});
		const uintBQOJVL = await MoshiachCoinStakingYY7KHs.deposit.call(uintg4nIWip, {from: accounts[2]});

		await expect(MoshiachCoinStakingYY7KHs.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingWNCttxX = await MoshiachCoinStaking.new({from: accounts[1]});
		const addressJlnYpcE = accounts[3]
		const addressGaLiMoJ = await MoshiachCoinStakingWNCttxX.transferOwnership.call(addressJlnYpcE, {from: accounts[2]});
		const uintM1ZbWUE = await MoshiachCoinStakingWNCttxX.getNumberOfHolders.call({from: accounts[2]});

		await expect(MoshiachCoinStakingWNCttxX.transferOwnership.call(addressJlnYpcE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingtwHJmg4 = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintgL3LJbP = BigInt("1635")
		const addressn0KiKR = accounts[3]
		const uintXigYryI = BigInt("513")
		const addressEdU5gcp = accounts[3]
		const addressEKyTRuh = "0x0000000000000000000000000000000000000001"
		const uintjKkNECi = BigInt("1230")
		const uintWxjmJ3G = await MoshiachCoinStakingtwHJmg4.deposit.call(uintgL3LJbP, {from: accounts[2]});
		const uintM9d2p9S = await MoshiachCoinStakingtwHJmg4.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		await MoshiachCoinStakingtwHJmg4.claimDivs.call({from: accounts[1]});
		const addressy1ylBDk = await MoshiachCoinStakingtwHJmg4.transferOwnership.call(addressn0KiKR, {from: accounts[5]});
		const addressdY86M8R = await MoshiachCoinStakingtwHJmg4.transferAnyERC20Tokens.call(addressEKyTRuh, addressEdU5gcp, uintXigYryI, {from: accounts[1]});
		const uintZ35Cj1a = await MoshiachCoinStakingtwHJmg4.withdraw.call(uintjKkNECi, {from: accounts[4]});

		await expect(MoshiachCoinStakingtwHJmg4.deposit.call(uintgL3LJbP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingW4yyzyt = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressQdA6FPy = accounts[1]
		const addressaI3oWd1 = "0x0000000000000000000000000000000000000001"
		const uintYu07LFI = await MoshiachCoinStakingW4yyzyt.getPendingDivs.call(addressQdA6FPy, {from: accounts[4]});
		const uintp8Gb3Ii = await MoshiachCoinStakingW4yyzyt.getNumberOfHolders.call({from: accounts[2]});
		const addressI1gFnRH = await MoshiachCoinStakingW4yyzyt.transferOwnership.call(addressaI3oWd1, {from: "0x0000000000000000000000000000000000000001"});
		await MoshiachCoinStakingW4yyzyt.claimDivs.call({from: accounts[0]});

		assert.equal(uintYu07LFI, BigInt("0"))
		assert.equal(uintp8Gb3Ii, BigInt("0"))
		await expect(MoshiachCoinStakingW4yyzyt.transferOwnership.call(addressaI3oWd1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingLHBzM96 = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintRaY71He = BigInt("803")
		const addressXO5OLkT = accounts[0]
		const addressUv2wILP = accounts[5]
		const addresswPPxQA7 = await MoshiachCoinStakingLHBzM96.transferAnyERC20Tokens.call(addressUv2wILP, addressXO5OLkT, uintRaY71He, {from: accounts[3]});
		const uinth0EfBV9 = await MoshiachCoinStakingLHBzM96.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const uintqBc6VO8 = await MoshiachCoinStakingLHBzM96.getStakingAndDaoAmount.call({from: accounts[1]});

		await expect(MoshiachCoinStakingLHBzM96.transferAnyERC20Tokens.call(addressUv2wILP, addressXO5OLkT, uintRaY71He, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingD7D3IFH = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressN5ZQup8 = accounts[3]
		const addresskzmwZLD = accounts[3]
		const addressRVxeUM = accounts[3]
		const addressrOI3cpb = await MoshiachCoinStakingD7D3IFH.transferOwnership.call(addressN5ZQup8, {from: accounts[4]});
		const uintA9x9RtT = await MoshiachCoinStakingD7D3IFH.getPendingDivs.call(addresskzmwZLD, {from: accounts[1]});
		const uintSwiY355 = await MoshiachCoinStakingD7D3IFH.getPendingDivs.call(addressRVxeUM, {from: accounts[1]});

		assert.equal(uintA9x9RtT, BigInt("0"))
		assert.equal(uintSwiY355, BigInt("0"))
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingHnx98yW = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyC660Be = BigInt("1305")
		const uintfJ76ij3 = BigInt("1542")
		await MoshiachCoinStakingHnx98yW.claimDivs.call({from: accounts[0]});
		const uintUZBTssN = await MoshiachCoinStakingHnx98yW.deposit.call(uintyC660Be, {from: accounts[1]});
		const uintkdv2ydM = await MoshiachCoinStakingHnx98yW.getStakingAndDaoAmount.call({from: accounts[3]});
		const uintKQF2tOs = await MoshiachCoinStakingHnx98yW.deposit.call(uintfJ76ij3, {from: accounts[2]});
	});
})