const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardyZhFvhK = await AavePoolReward.new({from: accounts[0]});
		const addresss8tZvnH = accounts[1]
		const addresspkI09d4 = accounts[2]
		const uintb5rS1oZ = BigInt("497")
//		const addressECbzgPs = await AavePoolRewardyZhFvhK.updateReward.call(addresss8tZvnH, {from: accounts[1]});
//		await AavePoolRewardyZhFvhK.exit.call({from: accounts[5]});
//		const addressYLvHK3Z = await AavePoolRewardyZhFvhK.updateReward.call(addresspkI09d4, {from: accounts[2]});
//		await AavePoolRewardyZhFvhK.getReward.call({from: accounts[2]});
//		const uint256muoKcdW = await AavePoolRewardyZhFvhK.withdraw.call(uintb5rS1oZ, {from: accounts[0]});

		await expect(AavePoolRewardyZhFvhK.updateReward.call(addresss8tZvnH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardR8Ciemy = await AavePoolReward.new({from: accounts[0]});
		const addressg1N0ZOe = accounts[3]
//		await AavePoolRewardR8Ciemy.exit.call({from: accounts[5]});
//		await AavePoolRewardR8Ciemy.exit.call({from: accounts[2]});
//		const addressMJB6En = await AavePoolRewardR8Ciemy.dev.call(addressg1N0ZOe, {from: accounts[5]});

		await expect(AavePoolRewardR8Ciemy.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolReward6uAw4B = await AavePoolReward.new({from: accounts[1]});
		const uintnYDuV8e = BigInt("1739")
		const addressIohkBzj = accounts[2]
		const uintJwzuVSy = BigInt("1272")
//		const uint256XZSJ1uE = await AavePoolReward6uAw4B.stake.call(uintnYDuV8e, {from: accounts[5]});
//		await AavePoolReward6uAw4B.exit.call({from: accounts[4]});
//		const addressaZwmuHb = await AavePoolReward6uAw4B.dev.call(addressIohkBzj, {from: accounts[0]});
//		const uint256N1aOUII = await AavePoolReward6uAw4B.notifyRewardAmount.call(uintJwzuVSy, {from: accounts[0]});

		await expect(AavePoolReward6uAw4B.stake.call(uintnYDuV8e, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardfhWYjrF = await AavePoolReward.new({from: accounts[2]});
		const uintR0OwRBg = BigInt("402")
		const uintAj0xBcR = BigInt("140")
		const addressfYGMIO = accounts[2]
//		const uint256lEzHgQJ = await AavePoolRewardfhWYjrF.withdraw.call(uintR0OwRBg, {from: accounts[1]});
//		const uint256GHFefMo = await AavePoolRewardfhWYjrF.withdraw.call(uintAj0xBcR, {from: accounts[4]});
//		const addresshi0ekmA = await AavePoolRewardfhWYjrF.updateReward.call(addressfYGMIO, {from: accounts[3]});
//		await AavePoolRewardfhWYjrF.exit.call({from: accounts[1]});

		await expect(AavePoolRewardfhWYjrF.withdraw.call(uintR0OwRBg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardNB2vPjx = await AavePoolReward.new({from: accounts[4]});
		const uintDhK9swI = BigInt("206")
		const addresso2VTNm = accounts[1]
		const uintWxSTjaZ = BigInt("1561")
//		const uint256ICwT6m = await AavePoolRewardNB2vPjx.notifyRewardAmount.call(uintDhK9swI, {from: accounts[0]});
//		const uint256Ef0RKI = await AavePoolRewardNB2vPjx.earned.call(addresso2VTNm, {from: accounts[0]});
//		const uint256m9PadCO = await AavePoolRewardNB2vPjx.stake.call(uintWxSTjaZ, {from: accounts[2]});
//		await AavePoolRewardNB2vPjx.getReward.call({from: accounts[0]});

		await expect(AavePoolRewardNB2vPjx.notifyRewardAmount.call(uintDhK9swI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardKFuWKb5 = await AavePoolReward.new({from: accounts[2]});
		const addressb5yrBql = accounts[1]
		const uint256pacylz = await AavePoolRewardKFuWKb5.rewardPerToken.call({from: accounts[0]});
//		const addressiHyoXYu = await AavePoolRewardKFuWKb5.dev.call(addressb5yrBql, {from: accounts[3]});
//		await AavePoolRewardKFuWKb5.exit.call({from: accounts[4]});

		assert.equal(uint256pacylz, BigInt("0"))
		await expect(AavePoolRewardKFuWKb5.dev.call(addressb5yrBql, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewarddEQsat2 = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmcJji48 = BigInt("352")
		const addressYlFMnqR = accounts[4]
		const addressPVCZSHn = accounts[3]
		const uint256qmlf0SK = await AavePoolRewarddEQsat2.rewardPerToken.call({from: accounts[2]});
		const uint256xX4CEdB = await AavePoolRewarddEQsat2.withdraw.call(uintmcJji48, {from: accounts[4]});
		const uint256DszZgUd = await AavePoolRewarddEQsat2.earned.call(addressYlFMnqR, {from: accounts[0]});
		const uint256yoHnpRJ = await AavePoolRewarddEQsat2.earned.call(addressPVCZSHn, {from: accounts[0]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardPpfk8Aq = await AavePoolReward.new({from: accounts[4]});
		const uintbDG6ogZ = BigInt("805")
		const uintzbb4Ta5 = BigInt("1764")
		const uintWMPO6Cp = BigInt("593")
		const uintDe4oyPT = BigInt("391")
		const uint256IvIrLdj = await AavePoolRewardPpfk8Aq.notifyRewardAmount.call(uintbDG6ogZ, {from: accounts[4]});
//		const uint256XF23qP = await AavePoolRewardPpfk8Aq.stake.call(uintzbb4Ta5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256R4Gk0vb = await AavePoolRewardPpfk8Aq.notifyRewardAmount.call(uintWMPO6Cp, {from: accounts[3]});
//		const uint256Z52EDGf = await AavePoolRewardPpfk8Aq.withdraw.call(uintDe4oyPT, {from: accounts[4]});
//		await AavePoolRewardPpfk8Aq.exit.call({from: accounts[3]});

		await expect(AavePoolRewardPpfk8Aq.stake.call(uintzbb4Ta5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardVnhhToS = await AavePoolReward.new({from: accounts[1]});
		const uinth7f5OJm = BigInt("0")
		const uinttXDzlkN = BigInt("439")
		const uintKjno7yj = BigInt("976")
		const uintUBCaKNB = BigInt("1253")
		const uintZQl6PhY = BigInt("1552")
		const uintmUS3k32 = BigInt("791")
		const uint256O9VN4lG = await AavePoolRewardVnhhToS.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256wWDTjjX = await AavePoolRewardVnhhToS.stake.call(uinth7f5OJm, {from: accounts[2]});
//		const uint256AY1U2x7 = await AavePoolRewardVnhhToS.stake.call(uinttXDzlkN, {from: accounts[3]});
//		const uint256MFDjvf = await AavePoolRewardVnhhToS.stake.call(uintKjno7yj, {from: accounts[5]});
//		const uint256NgyoCCY = await AavePoolRewardVnhhToS.notifyRewardAmount.call(uintUBCaKNB, {from: accounts[2]});
//		const uint256t8rGeFa = await AavePoolRewardVnhhToS.notifyRewardAmount.call(uintZQl6PhY, {from: accounts[4]});
//		const uint256KlpLi4T = await AavePoolRewardVnhhToS.withdraw.call(uintmUS3k32, {from: accounts[1]});

		assert.equal(uint256O9VN4lG, BigInt("0"))
		await expect(AavePoolRewardVnhhToS.stake.call(uinth7f5OJm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})