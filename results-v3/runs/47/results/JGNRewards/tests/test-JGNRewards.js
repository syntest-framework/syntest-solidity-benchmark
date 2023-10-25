const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardscaSLvI = await JGNRewards.new({from: accounts[5]});
		const addressmJYjkbb = accounts[5]
		const uintrC5vUY1 = BigInt("1680")
		const uint256WAefE9W = await JGNRewardscaSLvI.earned.call(addressmJYjkbb, {from: accounts[0]});
		const uint256HB6m1kt = await JGNRewardscaSLvI.withdraw.call(uintrC5vUY1, {from: accounts[4]});
		const uint256bfmqWkJ = await JGNRewardscaSLvI.totalSupply.call({from: accounts[0]});

		assert.equal(uint256WAefE9W, BigInt("0"))
		await expect(JGNRewardscaSLvI.withdraw.call(uintrC5vUY1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsDz2vuXo = await JGNRewards.new({from: accounts[4]});
		const uintBdgUlix = BigInt("1114")
		const uintKZ4WeIY = BigInt("956")
		const addressrPurles = accounts[2]
		const uint256WSMaLMP = await JGNRewardsDz2vuXo.stake.call(uintBdgUlix, {from: accounts[1]});
		const uint256k5IeD2s = await JGNRewardsDz2vuXo.withdraw.call(uintKZ4WeIY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256HDzrnVC = await JGNRewardsDz2vuXo.earned.call(addressrPurles, {from: accounts[4]});

		await expect(JGNRewardsDz2vuXo.stake.call(uintBdgUlix, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsXYKs3Z1 = await JGNRewards.new({from: accounts[0]});
		await JGNRewardsXYKs3Z1.checkStart.call({from: accounts[5]});
		const uint256v4gkzHe = await JGNRewardsXYKs3Z1.rewardPerToken.call({from: accounts[2]});
		await JGNRewardsXYKs3Z1.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Yf714UH = await JGNRewardsXYKs3Z1.rewardPerToken.call({from: accounts[2]});
		const uint256poEpWtV = await JGNRewardsXYKs3Z1.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(JGNRewardsXYKs3Z1.checkStart.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsp0ygkqH = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressDNApZkd = accounts[2]
		const uints0czOuH = BigInt("398")
		const uint256oj2QL6c = await JGNRewardsp0ygkqH.balanceOf.call(addressDNApZkd, {from: accounts[1]});
		const uint256nY8sbfE = await JGNRewardsp0ygkqH.withdraw.call(uints0czOuH, {from: accounts[4]});
		const uint256Nx3jVmn = await JGNRewardsp0ygkqH.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256I92VhjN = await JGNRewardsp0ygkqH.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsW3zMoIJ = await JGNRewards.new({from: accounts[4]});
		const uintIzw1jre = BigInt("1167")
		const addressfTGfa16 = accounts[2]
		const uintBP6GtTM = BigInt("826")
		const uintscjOcBC = BigInt("198")
		const uint6pbEpG = BigInt("302")
		const uintR0xt1ug = BigInt("1414")
		const uint256wsFAjYy = await JGNRewardsW3zMoIJ.notifyRewardAmount.call(uintIzw1jre, {from: accounts[2]});
		const uint256GP1ZRi = await JGNRewardsW3zMoIJ.rewardPerToken.call({from: accounts[0]});
		await JGNRewardsW3zMoIJ.exit.call({from: accounts[3]});
		const uint256l9MfQSf = await JGNRewardsW3zMoIJ.earned.call(addressfTGfa16, {from: accounts[0]});
		const uint256cpwxC6a = await JGNRewardsW3zMoIJ.notifyRewardAmount.call(uintBP6GtTM, {from: accounts[0]});
		const uint256lQnfby = await JGNRewardsW3zMoIJ.stake.call(uintscjOcBC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256DnquOZn = await JGNRewardsW3zMoIJ.withdraw.call(uint6pbEpG, {from: accounts[4]});
		const uint256C23yQ0V = await JGNRewardsW3zMoIJ.withdraw.call(uintR0xt1ug, {from: accounts[5]});

		await expect(JGNRewardsW3zMoIJ.notifyRewardAmount.call(uintIzw1jre, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsapY4L9k = await JGNRewards.new({from: accounts[5]});
		const uinthmY6M7o = BigInt("0")
		const addressT3Ddxx = accounts[0]
		const uint256LtCHB5a = await JGNRewardsapY4L9k.withdraw.call(uinthmY6M7o, {from: accounts[3]});
		const addressczoA4BV = await JGNRewardsapY4L9k.updateReward.call(addressT3Ddxx, {from: "0x0000000000000000000000000000000000000001"});
		const uint256EVxAiq = await JGNRewardsapY4L9k.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(JGNRewardsapY4L9k.withdraw.call(uinthmY6M7o, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsapY4L9k = await JGNRewards.new({from: accounts[5]});
		const uintmqRIKc8 = BigInt("9")
		const uintoYyqZqy = BigInt("1587")
		await JGNRewardsapY4L9k.exit.call({from: accounts[2]});
		const uint256LtCHB5a = await JGNRewardsapY4L9k.withdraw.call(uintmqRIKc8, {from: accounts[3]});
		const uint256orkZzCi = await JGNRewardsapY4L9k.stake.call(uintoYyqZqy, {from: accounts[1]});

		await expect(JGNRewardsapY4L9k.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsrUjPcUx = await JGNRewards.new({from: accounts[5]});
		const uinteOfjjSU = BigInt("2035")
		const uintOESd2hf = BigInt("282")
		await JGNRewardsrUjPcUx.getReward.call({from: accounts[3]});
		const uint256DrvDziK = await JGNRewardsrUjPcUx.rewardPerToken.call({from: accounts[4]});
		const uint256FMutY56 = await JGNRewardsrUjPcUx.totalSupply.call({from: accounts[3]});
		const uint256mu4yc40 = await JGNRewardsrUjPcUx.stake.call(uinteOfjjSU, {from: accounts[2]});
		const uint256liE01nS = await JGNRewardsrUjPcUx.rewardPerToken.call({from: accounts[4]});
		const uint256cmpi9dT = await JGNRewardsrUjPcUx.stake.call(uintOESd2hf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(JGNRewardsrUjPcUx.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})