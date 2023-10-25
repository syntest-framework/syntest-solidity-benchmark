const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressX9ljiqP = accounts[3]
		const addressJqfcw8c = "0x0000000000000000000000000000000000000001"
		const uintabH5Xf7 = BigInt("836")
		const uintLyGqKqr = BigInt("173")
		const MisesLegacyPoolMz6EuyR = await MisesLegacyPool.new(addressX9ljiqP, addressJqfcw8c, uintabH5Xf7, uintLyGqKqr, {from: accounts[0]});
		const uintlLVz1jY = BigInt("1403")
		const addressO8MzxGl = accounts[2]
		const addressVIwHoDK = accounts[1]
		const addressH4hDctk = accounts[2]
		const uint256nKvzA5e = await MisesLegacyPoolMz6EuyR.withdraw.call(uintlLVz1jY, {from: accounts[5]});
		const uint256YmJjZkr = await MisesLegacyPoolMz6EuyR.earned.call(addressO8MzxGl, {from: accounts[4]});
		const addressoNCvpRV = await MisesLegacyPoolMz6EuyR.updateReward.call(addressVIwHoDK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256H2GZTLa = await MisesLegacyPoolMz6EuyR.earned.call(addressH4hDctk, {from: accounts[3]});
		const uint256iqcjSD = await MisesLegacyPoolMz6EuyR.rewardPerToken.call({from: accounts[4]});

		await expect(MisesLegacyPoolMz6EuyR.withdraw.call(uintlLVz1jY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressMVxiBZE = accounts[4]
		const addressXZKBBwa = accounts[3]
		const uintudQWzz2 = BigInt("1678")
		const uintQC9uFGC = BigInt("1415")
		const MisesLegacyPoolWT9PKDi = await MisesLegacyPool.new(addressMVxiBZE, addressXZKBBwa, uintudQWzz2, uintQC9uFGC, {from: accounts[1]});
		const addressizZdrsh = accounts[5]
		const addresse1n6kjq = accounts[3]
		await MisesLegacyPoolWT9PKDi.checkStart.call({from: accounts[4]});
		const uint256HwXmvEw = await MisesLegacyPoolWT9PKDi.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const addressQ8cxG3t = await MisesLegacyPoolWT9PKDi.updateReward.call(addressizZdrsh, {from: accounts[3]});
		const addressqZAnUkX = await MisesLegacyPoolWT9PKDi.updateReward.call(addresse1n6kjq, {from: accounts[3]});

		await expect(MisesLegacyPoolWT9PKDi.checkStart.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const address7H7qdc = accounts[5]
		const addressYM7aXv5 = accounts[3]
		const uintP0FEJS9 = BigInt("155")
		const uinti2aKXel = BigInt("1410")
		const MisesLegacyPoolOYTDrCF = await MisesLegacyPool.new(address7H7qdc, addressYM7aXv5, uintP0FEJS9, uinti2aKXel, {from: accounts[3]});
		const addresssSDKboV = accounts[1]
		await MisesLegacyPoolOYTDrCF.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const addressCCi7hWu = await MisesLegacyPoolOYTDrCF.updateReward.call(addresssSDKboV, {from: accounts[1]});
		await MisesLegacyPoolOYTDrCF.checkStart.call({from: accounts[1]});

		await expect(MisesLegacyPoolOYTDrCF.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressEAvAwDf = accounts[3]
		const addressoPwCNYZ = accounts[1]
		const uintMnRGiXU = BigInt("676")
		const uintStRMMGK = BigInt("654")
		const MisesLegacyPoolXvK8tH8 = await MisesLegacyPool.new(addressEAvAwDf, addressoPwCNYZ, uintMnRGiXU, uintStRMMGK, {from: accounts[1]});
		const addressykTM56 = accounts[0]
		const addressiVcCFce = accounts[1]
		await MisesLegacyPoolXvK8tH8.getReward.call({from: accounts[4]});
		const uint256kMF6zBC = await MisesLegacyPoolXvK8tH8.rewardPerToken.call({from: accounts[5]});
		const uint256uergewN = await MisesLegacyPoolXvK8tH8.earned.call(addressykTM56, {from: accounts[4]});
		const address9Xa9zn = await MisesLegacyPoolXvK8tH8.updateReward.call(addressiVcCFce, {from: accounts[1]});

		await expect(MisesLegacyPoolXvK8tH8.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressoEjbKm3 = accounts[3]
		const addresseXWwDCo = accounts[2]
		const uintAALUk2p = BigInt("901")
		const uintvLgES5D = BigInt("217")
		const MisesLegacyPoolg6bcyIh = await MisesLegacyPool.new(addressoEjbKm3, addresseXWwDCo, uintAALUk2p, uintvLgES5D, {from: "0x0000000000000000000000000000000000000001"});
		const uintXLbhOKS = BigInt("99")
		const uintv4BYuml = BigInt("1406")
		const uints0ztKLN = BigInt("570")
		await MisesLegacyPoolg6bcyIh.exit.call({from: accounts[1]});
		const uint256f6B7l8w = await MisesLegacyPoolg6bcyIh.stake.call(uintXLbhOKS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256MIZtoWR = await MisesLegacyPoolg6bcyIh.stake.call(uintv4BYuml, {from: accounts[0]});
		const uint256ubnCmoN = await MisesLegacyPoolg6bcyIh.notifyRewardAmount.call(uints0ztKLN, {from: accounts[0]});
	});

	it('test for MisesLegacyPool', async () => {
		const addressIF7g4Ja = accounts[3]
		const addressfmTdI9O = accounts[2]
		const uintvuPd7SE = BigInt("569")
		const uintLfLNMzh = BigInt("637")
		const MisesLegacyPoolhxm6GvO = await MisesLegacyPool.new(addressIF7g4Ja, addressfmTdI9O, uintvuPd7SE, uintLfLNMzh, {from: accounts[0]});
		const uintWNJ5fmR = BigInt("555")
		const uintsbS2vEL = BigInt("1063")
		await MisesLegacyPoolhxm6GvO.getReward.call({from: accounts[3]});
		const uint256yVPJ2XX = await MisesLegacyPoolhxm6GvO.stake.call(uintWNJ5fmR, {from: accounts[0]});
		await MisesLegacyPoolhxm6GvO.getReward.call({from: accounts[0]});
		const uint256gGxkMgr = await MisesLegacyPoolhxm6GvO.notifyRewardAmount.call(uintsbS2vEL, {from: accounts[1]});
		await MisesLegacyPoolhxm6GvO.getReward.call({from: accounts[3]});

		await expect(MisesLegacyPoolhxm6GvO.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressUY7FZYa = accounts[3]
		const addressd0sF86N = accounts[2]
		const uintqUEmgSf = BigInt("569")
		const uintYORvk47 = BigInt("637")
		const MisesLegacyPoolhxm6GvO = await MisesLegacyPool.new(addressUY7FZYa, addressd0sF86N, uintqUEmgSf, uintYORvk47, {from: accounts[0]});
		const addressqkl4fg5 = accounts[1]
		const uint898yX6 = BigInt("1076")
		await MisesLegacyPoolhxm6GvO.getReward.call({from: accounts[0]});
		const uint256TwWdLjv = await MisesLegacyPoolhxm6GvO.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256qDxgJbw = await MisesLegacyPoolhxm6GvO.earned.call(addressqkl4fg5, {from: accounts[0]});
		const uint256V9f2QVC = await MisesLegacyPoolhxm6GvO.notifyRewardAmount.call(uint898yX6, {from: accounts[1]});
		await MisesLegacyPoolhxm6GvO.getReward.call({from: accounts[3]});

		await expect(MisesLegacyPoolhxm6GvO.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})