const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const stringNe9Yxc = "rKt1P2hWLSem0dx7qaWYm37KitX7NPQPdMSWGEfI1yLNAhqzOuwmG"
		const stringSaHIHjW = "9o"
		const uintNOqsfIm = BigInt("173")
		const WolfStakingRewardsrXOsuTR = await WolfStakingRewards.new(stringNe9Yxc, stringSaHIHjW, uintNOqsfIm, {from: accounts[3]});
		const uintyJvKXjG = BigInt("1742")
		const uintVruTKCy = BigInt("872")
		const addressGNPFlUx = accounts[1]
		const uintfWMBzCK = BigInt("898")
		const addresskBrDQrM = accounts[1]
		const uintrgtWGrD = BigInt("657")
		const uintDRxzkjI = BigInt("1535")
		const uint256arraysBQtKiH = await WolfStakingRewardsrXOsuTR.updateNotifyRewardAmount.call(uintyJvKXjG, {from: accounts[3]});
		const uint256H9OCTgm = await WolfStakingRewardsrXOsuTR.earned.call(addressGNPFlUx, uintVruTKCy, {from: accounts[0]});
		const address6Tr18D = await WolfStakingRewardsrXOsuTR.updateReward.call(addresskBrDQrM, uintfWMBzCK, {from: accounts[3]});
		const uint256Q7UCg6i = await WolfStakingRewardsrXOsuTR.stake.call(uintDRxzkjI, uintrgtWGrD, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addressDIJQtSF = accounts[1]
		const addresszEZmUqa = accounts[0]
		const addressk9zhhPA = accounts[0]
		const WolfStakingRewardswditz4v = await WolfStakingRewards.new(addressDIJQtSF, addresszEZmUqa, addressk9zhhPA, {from: accounts[2]});
		const uintw8raKkI = BigInt("1100")
		const uintSb5XBMC = BigInt("878")
		const addressLBDeBBn = accounts[0]
		const uintaCD8C0D = BigInt("1635")
//		const uint256wCX1rz8 = await WolfStakingRewardswditz4v.getRewardForDuration.call(uintw8raKkI, {from: accounts[2]});
//		const uint256zp6s91u = await WolfStakingRewardswditz4v.balanceOfPerPool.call(addressLBDeBBn, uintSb5XBMC, {from: accounts[5]});
//		const uintidQP3c = await WolfStakingRewardswditz4v.getReward.call(uintaCD8C0D, {from: accounts[0]});

		await expect(WolfStakingRewardswditz4v.getRewardForDuration.call(uintw8raKkI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressDXSM8ia = accounts[1]
		const addressCuTuZbc = accounts[1]
		const addressZtHqDM1 = accounts[3]
		const WolfStakingRewardsoM0Ano0 = await WolfStakingRewards.new(addressDXSM8ia, addressCuTuZbc, addressZtHqDM1, {from: "0x0000000000000000000000000000000000000001"});
		const uintksttYRS = BigInt("1265")
		const uintInxLKXg = BigInt("370")
		const uintg5zabTZ = BigInt("1881")
		const uint256juEdTE6 = await WolfStakingRewardsoM0Ano0.withdraw.call(uintInxLKXg, uintksttYRS, {from: accounts[3]});
		const stringtqjtL7n = await WolfStakingRewardsoM0Ano0.name.call({from: accounts[1]});
		const uint256t7ONn5G = await WolfStakingRewardsoM0Ano0.lastTimeRewardApplicable.call(uintg5zabTZ, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const string6FVfop = "VtRs3iVX"
		const stringBcVfaKY = "o9qPXOb44yIJYOOiPG67RB12FzPHszTPODxz8cUvbovxM8B"
		const uintOisYjMK = BigInt("164")
		const WolfStakingRewardsZKB4cN = await WolfStakingRewards.new(string6FVfop, stringBcVfaKY, uintOisYjMK, {from: accounts[1]});
		const uintvXS3S6B = BigInt("98")
		const uintMzuyVeU = BigInt("33")
		const uintvPBtP22 = BigInt("1355")
		const uintRdn022j = BigInt("1005")
		const uint8qpZWojx = await WolfStakingRewardsZKB4cN.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256N8YaN24 = await WolfStakingRewardsZKB4cN.lastTimeRewardApplicable.call(uintvXS3S6B, {from: accounts[0]});
		const uint256ps2kboF = await WolfStakingRewardsZKB4cN.totalSupplyPerPool.call(uintMzuyVeU, {from: accounts[2]});
		const uint256Ix2KHq3 = await WolfStakingRewardsZKB4cN.lastTimeRewardApplicable.call(uintvPBtP22, {from: accounts[4]});
		const uint256ovvYBMr = await WolfStakingRewardsZKB4cN.exit.call(uintRdn022j, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwjbBCNb = "D3GouN8Sq8Xoiug19TavqjX6xBUmMEYqIwh1mFhjl6te3ubjXeGM2st6KvsdgcGNbbbNpOsteDNEQ1VIXwHiSo"
		const stringxyC6XOY = "dcixIn3f34IJPbSRp6zLkRMVB6wJfwhEMKMv"
		const uintCthDqMe = BigInt("18")
		const WolfStakingRewardsOsgGiId = await WolfStakingRewards.new(stringwjbBCNb, stringxyC6XOY, uintCthDqMe, {from: "0x0000000000000000000000000000000000000001"});
		const uintvpDxyFj = BigInt("1534")
		const uint256k6CBexb = await WolfStakingRewardsOsgGiId.rewardPerToken.call(uintvpDxyFj, {from: accounts[2]});
		await WolfStakingRewardsOsgGiId.nonReentrant.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtdbgEot = "xYCax2JtjN2sDyqaP6x3H"
		const stringgFVPhlQ = "1YbNM8m11vIWI4Pk5k2KStm8HhvvzAam6hn8AJL89jyhfBjALQ1duFVeBnr727rPntFesRZ2on44bR1PsyJqdQP"
		const uintFm7hKZR = BigInt("162")
		const WolfStakingRewardsBjQUFXI = await WolfStakingRewards.new(stringtdbgEot, stringgFVPhlQ, uintFm7hKZR, {from: accounts[4]});
		const uinty6hfxFe = BigInt("1024")
		const uintkT3uSPP = BigInt("972")
		const uintO3lU8t = BigInt("1309")
		const uint256arrayGm5OpY = await WolfStakingRewardsBjQUFXI.updateNotifyRewardAmount.call(uinty6hfxFe, {from: accounts[4]});
		const uint256arrayQIgnkuh = await WolfStakingRewardsBjQUFXI.updateNotifyRewardAmount.call(uintkT3uSPP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayfuqEcL5 = await WolfStakingRewardsBjQUFXI.updateNotifyRewardAmount.call(uintO3lU8t, {from: accounts[0]});
		const uint8dJRKIyb = await WolfStakingRewardsBjQUFXI.decimals.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressRvSA3Ml = accounts[0]
		const addressvwxnmBu = accounts[2]
		const addressTn5AxHN = accounts[0]
		const WolfStakingRewardse0SfzxE = await WolfStakingRewards.new(addressRvSA3Ml, addressvwxnmBu, addressTn5AxHN, {from: accounts[4]});
		const uintbLWJrVo = BigInt("200")
		const uintEVHB3dp = await WolfStakingRewardse0SfzxE.getReward.call(uintbLWJrVo, {from: accounts[5]});
//		await WolfStakingRewardse0SfzxE.nonReentrant.call({from: accounts[1]});

		await expect(WolfStakingRewardse0SfzxE.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringkis9tDt = "VXy2JhFbtNyJoMjTh3BtipHCz80T9p49OcamJ8TohOawqKIpnqMVBKQyZQkbHOlkBINg2sKIivWxcaeQeFVwUK3PP5KTOXoM"
		const stringqpAY7tq = "DMuTIsesZ4UqLWlgCwIConUVS7Rnnf9fNJzgT7jTAutBz9wU5dlSvm2oF9"
		const uintnBNin08 = BigInt("5")
		const WolfStakingRewardsumarBY3 = await WolfStakingRewards.new(stringkis9tDt, stringqpAY7tq, uintnBNin08, {from: accounts[2]});
		const uintlhWsNcp = BigInt("851")
		const uintCfbB8k8 = BigInt("47")
		const uintr7oIKWL = BigInt("1616")
		const uintvqpHQvZ = await WolfStakingRewardsumarBY3.getReward.call(uintlhWsNcp, {from: accounts[4]});
		const uint8VFbtI9p = await WolfStakingRewardsumarBY3.decimals.call({from: accounts[5]});
		await WolfStakingRewardsumarBY3.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256pto6L1O = await WolfStakingRewardsumarBY3.totalSupplyPerPool.call(uintCfbB8k8, {from: accounts[2]});
		const uint256lm4svX = await WolfStakingRewardsumarBY3.lastTimeRewardApplicable.call(uintr7oIKWL, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXd2J5tj = "cMXTAX6B5Myg6o8LvBlY8AUpy9wtDl1WTANggO2VExrnd0QIZvcn51ncuNDv3XjMsaIqQuve6VFrwaUWqZPJ1"
		const stringjqLgE91 = "nC8ToTVvm83mMSuXu5yHreUIMN45wP4oPRoPBQl7Dfm0xXqOJ"
		const uintKAsCWvv = BigInt("169")
		const WolfStakingRewardsWd6F8XI = await WolfStakingRewards.new(stringXd2J5tj, stringjqLgE91, uintKAsCWvv, {from: accounts[3]});
		const uintQxf0e8e = BigInt("544")
		const uintN3wIiq = BigInt("1595")
		const uintktVBgHN = BigInt("138")
		const uintY1Ucuxq = BigInt("1751")
		const uint256arrayxcdn6HT = await WolfStakingRewardsWd6F8XI.updateNotifyRewardAmount.call(uintQxf0e8e, {from: accounts[4]});
		await WolfStakingRewardsWd6F8XI.onlyOwner.call({from: accounts[3]});
		const uint256arrayxzbW7Lb = await WolfStakingRewardsWd6F8XI.updateNotifyRewardAmount.call(uintN3wIiq, {from: accounts[1]});
		const uint256rPE195G = await WolfStakingRewardsWd6F8XI.stake.call(uintY1Ucuxq, uintktVBgHN, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressPGHW2ML = accounts[0]
		const addressZG6V0Gl = accounts[2]
		const addressOhCaUXJ = accounts[0]
		const WolfStakingRewardse0SfzxE = await WolfStakingRewards.new(addressPGHW2ML, addressZG6V0Gl, addressOhCaUXJ, {from: accounts[4]});
		const uintTFBU9Pp = BigInt("1734")
		const uintNg6hvG6 = BigInt("1932")
		const uintZsKXHm0 = BigInt("200")
		const uintAPQtwcB = BigInt("1011")
//		const uint256arrayn0BgGDl = await WolfStakingRewardse0SfzxE.updateNotifyRewardAmount.call(uintTFBU9Pp, {from: accounts[0]});
//		const uint256Q7Trxfl = await WolfStakingRewardse0SfzxE.exit.call(uintNg6hvG6, {from: accounts[0]});
//		const uintEVHB3dp = await WolfStakingRewardse0SfzxE.getReward.call(uintZsKXHm0, {from: accounts[5]});
//		const uint256UjQUZ9S = await WolfStakingRewardse0SfzxE.rewardPerToken.call(uintAPQtwcB, {from: accounts[4]});
//		await WolfStakingRewardse0SfzxE.nonReentrant.call({from: accounts[1]});

		await expect(WolfStakingRewardse0SfzxE.updateNotifyRewardAmount.call(uintTFBU9Pp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresslzqzSkb = accounts[0]
		const addressG5xLQ87 = accounts[2]
		const addressu9YvMov = accounts[0]
		const WolfStakingRewardse0SfzxE = await WolfStakingRewards.new(addresslzqzSkb, addressG5xLQ87, addressu9YvMov, {from: accounts[4]});
		const uintFlnB1XO = BigInt("214")
		const uintae6xnbe = BigInt("444")
		const uintqa08sxJ = BigInt("1296")
		const uintEVHB3dp = await WolfStakingRewardse0SfzxE.getReward.call(uintFlnB1XO, {from: accounts[5]});
//		const uint2560kw2vI = await WolfStakingRewardse0SfzxE.exit.call(uintae6xnbe, {from: accounts[5]});
//		const uint256X8Qu1Ah = await WolfStakingRewardse0SfzxE.getRewardForDuration.call(uintqa08sxJ, {from: accounts[4]});

		await expect(WolfStakingRewardse0SfzxE.exit.call(uintae6xnbe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresse97iuXf = accounts[0]
		const addressRnZStin = accounts[2]
		const addresstztvlCb = accounts[0]
		const WolfStakingRewardse0SfzxE = await WolfStakingRewards.new(addresse97iuXf, addressRnZStin, addresstztvlCb, {from: accounts[4]});
		const uintfpub6tx = BigInt("202")
		const uintoBWZZ0e = BigInt("1134")
		const uintCBDAO2h = BigInt("1993")
		const uintEVHB3dp = await WolfStakingRewardse0SfzxE.getReward.call(uintfpub6tx, {from: accounts[5]});
//		const uint256nxHVR7 = await WolfStakingRewardse0SfzxE.withdraw.call(uintCBDAO2h, uintoBWZZ0e, {from: accounts[4]});
//		await WolfStakingRewardse0SfzxE.nonReentrant.call({from: accounts[1]});

		await expect(WolfStakingRewardse0SfzxE.withdraw.call(uintCBDAO2h, uintoBWZZ0e, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressrb2shKh = accounts[0]
		const addressoyaN0Uv = accounts[0]
		const addressCYmW8G7 = accounts[3]
		const WolfStakingRewardsYV8aVUt = await WolfStakingRewards.new(addressrb2shKh, addressoyaN0Uv, addressCYmW8G7, {from: accounts[0]});
		const uintMFN9CEp = BigInt("1196")
		const uintvPeegVk = BigInt("2021")
		const uintb58Dzcq = BigInt("251")
		const uinteNUKLlH = BigInt("1723")
		const uintpYWZu3u = BigInt("1638")
		const uintZHgKQUw = BigInt("239")
		const uintDkYt36g = await WolfStakingRewardsYV8aVUt.getReward.call(uintMFN9CEp, {from: accounts[4]});
//		const uint256X84Oj9f = await WolfStakingRewardsYV8aVUt.withdrawRemainingBalance.call(uintb58Dzcq, uintvPeegVk, {from: accounts[0]});
//		const uint256M37XPQB = await WolfStakingRewardsYV8aVUt.stake.call(uintpYWZu3u, uinteNUKLlH, {from: accounts[2]});
//		const uintuaeHTrW = await WolfStakingRewardsYV8aVUt.getReward.call(uintZHgKQUw, {from: accounts[2]});

		await expect(WolfStakingRewardsYV8aVUt.withdrawRemainingBalance.call(uintb58Dzcq, uintvPeegVk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressmQenQ0 = accounts[0]
		const addressGXX4LYN = accounts[2]
		const addressZCCQp7J = accounts[0]
		const WolfStakingRewardse0SfzxE = await WolfStakingRewards.new(addressmQenQ0, addressGXX4LYN, addressZCCQp7J, {from: accounts[4]});
		const uintlA0UbbM = BigInt("710")
		const uinthl48wJn = BigInt("1312")
		const addressEFJPdvw = accounts[4]
		const uint256dhV8Xhm = await WolfStakingRewardse0SfzxE.lastTimeRewardApplicable.call(uintlA0UbbM, {from: accounts[4]});
		const uint256y31oYFD = await WolfStakingRewardse0SfzxE.balanceOfPerPool.call(addressEFJPdvw, uinthl48wJn, {from: accounts[4]});
//		await WolfStakingRewardse0SfzxE.nonReentrant.call({from: accounts[1]});

		assert.equal(uint256dhV8Xhm, BigInt("0"))
		assert.equal(uint256y31oYFD, BigInt("0"))
		await expect(WolfStakingRewardse0SfzxE.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressSkFxcP = accounts[0]
		const addressS6l2f4p = accounts[2]
		const addressv2N9sDP = accounts[0]
		const WolfStakingRewardse0SfzxE = await WolfStakingRewards.new(addressSkFxcP, addressS6l2f4p, addressv2N9sDP, {from: accounts[4]});
		const uinta1UXNL = BigInt("424")
		const uint256eyXOMHr = await WolfStakingRewardse0SfzxE.totalSupplyPerPool.call(uinta1UXNL, {from: accounts[5]});
//		await WolfStakingRewardse0SfzxE.nonReentrant.call({from: accounts[1]});

		assert.equal(uint256eyXOMHr, BigInt("0"))
		await expect(WolfStakingRewardse0SfzxE.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringavZjzEV = "6Kti"
		const stringHM0yfI = "MEIcqaqLL3"
		const uintYDIsfL = BigInt("221")
		const WolfStakingRewardsVILAI5A = await WolfStakingRewards.new(stringavZjzEV, stringHM0yfI, uintYDIsfL, {from: accounts[3]});
		const uintkCTiIOA = BigInt("1939")
		const uint8GHvcjgA = await WolfStakingRewardsVILAI5A.decimals.call({from: accounts[5]});
		await WolfStakingRewardsVILAI5A.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256bD7luia = await WolfStakingRewardsVILAI5A.getRewardForDuration.call(uintkCTiIOA, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringiBAGGpj = "JRl1NjlmCfVbDWH1NSBLnAN4acUVVxdo"
		const stringDsxhyA5 = "yqjH"
		const uintrtUjs7L = BigInt("202")
		const WolfStakingRewardsWHyHgtN = await WolfStakingRewards.new(stringiBAGGpj, stringDsxhyA5, uintrtUjs7L, {from: accounts[1]});
		const uintEa5xoEO = BigInt("1818")
		const uintrxQKQYR = BigInt("1242")
		const uintTXn7y57 = BigInt("796")
		const addressZUzQnoH = accounts[1]
		const uinty6LoqeF = BigInt("469")
		const uintKjXlw3w = BigInt("1873")
		const uint256aIT0Si6 = await WolfStakingRewardsWHyHgtN.totalSupplyPerPool.call(uintEa5xoEO, {from: accounts[2]});
		const uint256Y5TH8He = await WolfStakingRewardsWHyHgtN.totalSupplyPerPool.call(uintrxQKQYR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256cnbxj73 = await WolfStakingRewardsWHyHgtN.earned.call(addressZUzQnoH, uintTXn7y57, {from: accounts[0]});
		const uint256pyLJFtE = await WolfStakingRewardsWHyHgtN.rewardPerToken.call(uinty6LoqeF, {from: accounts[4]});
		const uint256XKBEKI = await WolfStakingRewardsWHyHgtN.rewardPerToken.call(uintKjXlw3w, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressceWdIFL = accounts[0]
		const addressQp5lBmO = accounts[2]
		const addressnIOFQJh = accounts[0]
		const WolfStakingRewardse0SfzxE = await WolfStakingRewards.new(addressceWdIFL, addressQp5lBmO, addressnIOFQJh, {from: accounts[4]});
		const uintll1kcFW = BigInt("214")
		const uintuXrHqk0 = BigInt("353")
		const uintEKznnvn = BigInt("1908")
		const uintOeLGJyv = BigInt("443")
		const uintxJZ407 = BigInt("1296")
		const uintLmwcEdM = BigInt("37")
		const uintEVHB3dp = await WolfStakingRewardse0SfzxE.getReward.call(uintll1kcFW, {from: accounts[5]});
//		const uint256pDs6HNL = await WolfStakingRewardse0SfzxE.withdrawRemainingBalance.call(uintEKznnvn, uintuXrHqk0, {from: accounts[2]});
//		const uint2560kw2vI = await WolfStakingRewardse0SfzxE.exit.call(uintOeLGJyv, {from: accounts[5]});
//		const uint256X8Qu1Ah = await WolfStakingRewardse0SfzxE.getRewardForDuration.call(uintxJZ407, {from: accounts[4]});
//		const uint256XkQvPUu = await WolfStakingRewardse0SfzxE.rewardPerToken.call(uintLmwcEdM, {from: accounts[0]});

		await expect(WolfStakingRewardse0SfzxE.withdrawRemainingBalance.call(uintEKznnvn, uintuXrHqk0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringE9xuH28 = "7UpYBh5AJKHDvYsXobpOPkMAL67npcYuqVpENhnomQHtopuGiSfjztfiabE"
		const stringlKxhQhz = "MFpn3vfeeC1tXyo1rJWlEsXubcJdGuAMYgwWGTOMkSuzVvCGmYRQvw"
		const uintgZflNdZ = BigInt("71")
		const WolfStakingRewardsJUDSSUL = await WolfStakingRewards.new(stringE9xuH28, stringlKxhQhz, uintgZflNdZ, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsJUDSSUL.nonReentrant.call({from: accounts[5]});
		const uint8pmlJIeV = await WolfStakingRewardsJUDSSUL.decimals.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressoMUH0q9 = accounts[0]
		const addressk6ePV1A = accounts[2]
		const addresslaujuP8 = accounts[0]
		const WolfStakingRewardse0SfzxE = await WolfStakingRewards.new(addressoMUH0q9, addressk6ePV1A, addresslaujuP8, {from: accounts[4]});
		const uintJm18o4 = BigInt("281")
		const uintdUGNgp = BigInt("1450")
		const uintbd2xjwb = BigInt("191")
//		const uint256eDVWqrM = await WolfStakingRewardse0SfzxE.stake.call(uintdUGNgp, uintJm18o4, {from: accounts[5]});
//		const uintEVHB3dp = await WolfStakingRewardse0SfzxE.getReward.call(uintbd2xjwb, {from: accounts[5]});

		await expect(WolfStakingRewardse0SfzxE.stake.call(uintdUGNgp, uintJm18o4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresstznC6R = accounts[0]
		const addressN6rlX3m = accounts[2]
		const addressHhkRmQo = accounts[0]
		const WolfStakingRewardse0SfzxE = await WolfStakingRewards.new(addresstznC6R, addressN6rlX3m, addressHhkRmQo, {from: accounts[4]});
		const uintNw6Nr5 = BigInt("212")
		const uintDhzwpbb = BigInt("782")
		const addressdGlLqQp = "0x0000000000000000000000000000000000000001"
		const uintdAD5Fl = BigInt("281")
		const uintKOeXo7o = BigInt("1364")
		const uintdKV5RF = BigInt("1616")
		const uintznzON4W = BigInt("1363")
		const uintEVHB3dp = await WolfStakingRewardse0SfzxE.getReward.call(uintNw6Nr5, {from: accounts[5]});
		const uint256BAKkbN6 = await WolfStakingRewardse0SfzxE.balanceOfPerPool.call(addressdGlLqQp, uintDhzwpbb, {from: accounts[0]});
		const uint256TMwLYD = await WolfStakingRewardse0SfzxE.rewardPerToken.call(uintdAD5Fl, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256LuKGbtc = await WolfStakingRewardse0SfzxE.withdraw.call(uintdKV5RF, uintKOeXo7o, {from: "0x0000000000000000000000000000000000000001"});
//		await WolfStakingRewardse0SfzxE.nonReentrant.call({from: accounts[1]});
//		await WolfStakingRewardse0SfzxE.nonReentrant.call({from: accounts[2]});
//		const uint256AOf177c = await WolfStakingRewardse0SfzxE.exit.call(uintznzON4W, {from: accounts[3]});

		assert.equal(uint256BAKkbN6, BigInt("0"))
		assert.equal(uint256TMwLYD, BigInt("0"))
		await expect(WolfStakingRewardse0SfzxE.withdraw.call(uintdKV5RF, uintKOeXo7o, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringRkzMNG = "tM5WatX1UCVYPjQhKt3qSmAWHMGXd1XrUhsmmdEl0xpgQZBuyeXe6flzIJl7ETJyYVj2xhucmRftzFvtELJtOEDVkgm"
		const string8FhuVl = "gilpgDkQ3CWFr92tdgj42qQH0hqIsSgqNyKvRVy0jYu58j3GHV9jaQvl"
		const uintufpiScs = BigInt("25")
		const WolfStakingRewardsB2G4Z8 = await WolfStakingRewards.new(stringRkzMNG, string8FhuVl, uintufpiScs, {from: accounts[3]});
		const uintr6pzb3 = BigInt("1750")
		const uint4qJE3L = BigInt("1829")
		const uintrED6PQ2 = BigInt("1292")
		const uintzZzbhnE = BigInt("1881")
		const uint256UV07Bnq = await WolfStakingRewardsB2G4Z8.lastTimeRewardApplicable.call(uintr6pzb3, {from: accounts[0]});
		const uint8JzHjaXs = await WolfStakingRewardsB2G4Z8.decimals.call({from: accounts[4]});
		const uint256cgwZpnQ = await WolfStakingRewardsB2G4Z8.withdrawRemainingBalance.call(uintrED6PQ2, uint4qJE3L, {from: accounts[0]});
		const uint256arraym1p4rvD = await WolfStakingRewardsB2G4Z8.updateNotifyRewardAmount.call(uintzZzbhnE, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMQGnxUC = "BQiPUwkaH"
		const stringJeVzvUO = "pgR0v6jU9qnq7ooXQt9KPYBj7uggDBnXZCEBNsHFO5LaJITfW9YQTc"
		const uintnlXWLwp = BigInt("19")
		const WolfStakingRewardsxr9xM0w = await WolfStakingRewards.new(stringMQGnxUC, stringJeVzvUO, uintnlXWLwp, {from: accounts[4]});
		const uintN9rlQh = BigInt("206")
		const uintdwNdbx = BigInt("1113")
		const uintThORCI = BigInt("1471")
		const uintuMVzRxR = BigInt("1341")
		const addressv6WAxvE = accounts[1]
		const uintyjLaEiL = BigInt("360")
		const uint256zNofuh9 = await WolfStakingRewardsxr9xM0w.withdraw.call(uintdwNdbx, uintN9rlQh, {from: accounts[5]});
		const uint256uIMOYzF = await WolfStakingRewardsxr9xM0w.totalSupplyPerPool.call(uintThORCI, {from: accounts[2]});
		const uint256kSzfRKc = await WolfStakingRewardsxr9xM0w.balanceOfPerPool.call(addressv6WAxvE, uintuMVzRxR, {from: accounts[4]});
		const uint256GpfU7EY = await WolfStakingRewardsxr9xM0w.totalSupplyPerPool.call(uintyjLaEiL, {from: accounts[0]});
		const uint8NJgO257 = await WolfStakingRewardsxr9xM0w.decimals.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPHOKL1S = "0i7uSyyDujoj8MYlRqMFM5bF36yFVKLo4mH7tc8uPC0ezp9bEIBfrbvg38NGMlvM62GYYVnqjBGmN3ZjBmLCeC89Oz"
		const stringi8feMLf = "ZkzSmg6sldeRgNCvMRKiHM4kVmJm5LPcYyyEkrNFGeQJu3F5u39rRkAAGkLm65lXU98SPV5SdAuXFaDR47FuRH32PTKF7JW"
		const uintq5nftJ4 = BigInt("20")
		const WolfStakingRewardsvpNsqw4 = await WolfStakingRewards.new(stringPHOKL1S, stringi8feMLf, uintq5nftJ4, {from: accounts[2]});
		const uintNTFfc3E = BigInt("1167")
		const stringU9QJnw = await WolfStakingRewardsvpNsqw4.symbol.call({from: accounts[1]});
		const uint8xtV5FlZ = await WolfStakingRewardsvpNsqw4.decimals.call({from: accounts[1]});
		const uint256hsac0PX = await WolfStakingRewardsvpNsqw4.rewardPerToken.call(uintNTFfc3E, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringyP04gUE = "XO4mG8ElnwIMIPvMtLRxnnCfMTX4oAjDloCmhoAJUBUZHG6Eo3GVQGTJkfbwvbyavxia4lyrpcpcPwp5d8yh5bcdA"
		const stringwNXpnWK = "mlg40cJ7QB7h6Gn8FqS"
		const uintiRZTcE = BigInt("124")
		const WolfStakingRewardsodtP3Zu = await WolfStakingRewards.new(stringyP04gUE, stringwNXpnWK, uintiRZTcE, {from: accounts[4]});
		const uintf7CHN8l = BigInt("337")
		const uintH52n3Pj = BigInt("260")
		const addressegaP2sX = accounts[1]
		const uint256arrayyFX14ut = await WolfStakingRewardsodtP3Zu.updateNotifyRewardAmount.call(uintf7CHN8l, {from: accounts[4]});
		const uint8Idsregw = await WolfStakingRewardsodtP3Zu.decimals.call({from: accounts[2]});
		const addressG5dwAiJ = await WolfStakingRewardsodtP3Zu.updateReward.call(addressegaP2sX, uintH52n3Pj, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressBFoyNYM = accounts[0]
		const addressF8VzAqH = accounts[2]
		const addressJjGKrcs = accounts[0]
		const WolfStakingRewardse0SfzxE = await WolfStakingRewards.new(addressBFoyNYM, addressF8VzAqH, addressJjGKrcs, {from: accounts[4]});
		const uintlxPzkqP = BigInt("281")
		const uintMqPCZI6 = BigInt("1450")
//		const uint256eDVWqrM = await WolfStakingRewardse0SfzxE.stake.call(uintMqPCZI6, uintlxPzkqP, {from: accounts[5]});

		await expect(WolfStakingRewardse0SfzxE.stake.call(uintMqPCZI6, uintlxPzkqP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringJKhRDOz = "wBNAMIjyPHQTUTdjiC2mFzgNgrmGH2ijZMGU9ZCVIz4IBols46WsQyueaI"
		const stringCWLo02H = "miYLQaaOagZ5BwKPHRot61bn2ON4Qrr5v4D5xxDrRJ8Sl3XudvJB6JDgJlJXKDgycljCnXcT3Db"
		const uintjQp9Wnf = BigInt("147")
		const WolfStakingRewardsVSsgI8t = await WolfStakingRewards.new(stringJKhRDOz, stringCWLo02H, uintjQp9Wnf, {from: accounts[4]});
		const uintm78S7e3 = BigInt("1868")
		const uintWwrERLy = BigInt("1797")
		const addressGQjNu9U = accounts[2]
		const uintdkaqQe6 = BigInt("1085")
		const uintIAiTefj = BigInt("214")
		const uint256uc7eB0S = await WolfStakingRewardsVSsgI8t.exit.call(uintm78S7e3, {from: accounts[1]});
		const uint8ZX0S30K = await WolfStakingRewardsVSsgI8t.decimals.call({from: accounts[3]});
		const uint256ZXh1Efe = await WolfStakingRewardsVSsgI8t.balanceOfPerPool.call(addressGQjNu9U, uintWwrERLy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256eHhZshg = await WolfStakingRewardsVSsgI8t.rewardPerToken.call(uintdkaqQe6, {from: accounts[4]});
		const uintkq2iKob = await WolfStakingRewardsVSsgI8t.getReward.call(uintIAiTefj, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQX8GtMH = "TUqgm2BehQyNAPWFEC4HcTZ"
		const stringap745Xk = "x5b2t59fgHYyRwUQd"
		const uintQC8WkTO = BigInt("181")
		const WolfStakingRewardsTfss8f = await WolfStakingRewards.new(stringQX8GtMH, stringap745Xk, uintQC8WkTO, {from: accounts[0]});
		const uint76wy87 = BigInt("239")
		const uinteCTFd0v = BigInt("1557")
		const uintd1KvjTa = BigInt("234")
		const uintiY6ktY7 = BigInt("566")
		const uintsGp5bir = BigInt("1210")
		const addressButUsqs = accounts[3]
		const uintMIC2iur = BigInt("1285")
		const addresshhWmV1m = accounts[3]
		const uintmnucZ7n = await WolfStakingRewardsTfss8f.getReward.call(uint76wy87, {from: accounts[1]});
		const uint256Ki32qBm = await WolfStakingRewardsTfss8f.withdrawRemainingBalance.call(uintd1KvjTa, uinteCTFd0v, {from: accounts[4]});
		const uint256qzto9J = await WolfStakingRewardsTfss8f.totalSupplyPerPool.call(uintiY6ktY7, {from: accounts[5]});
		const uint256KSZI7Wh = await WolfStakingRewardsTfss8f.balanceOfPerPool.call(addressButUsqs, uintsGp5bir, {from: accounts[2]});
		const addressC6j7MF3 = await WolfStakingRewardsTfss8f.updateReward.call(addresshhWmV1m, uintMIC2iur, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmSEcXhy = "fijBwBIPqRAL"
		const stringF3JFsvu = "4CgKkjlcyrIFKDQupT3XQ25qCvCTIft7xVMgAX2gxb1A5Hpjl4lTQqt"
		const uinttQFmDnz = BigInt("167")
		const WolfStakingRewardspqEmjB6 = await WolfStakingRewards.new(stringmSEcXhy, stringF3JFsvu, uinttQFmDnz, {from: accounts[4]});
		const uintTgbKpv = BigInt("783")
		const uintEXczp7i = BigInt("1676")
		const uintQa2JQAF = BigInt("342")
		const uintumDEwMZ = BigInt("228")
		const uint25662Vhv6 = await WolfStakingRewardspqEmjB6.exit.call(uintTgbKpv, {from: accounts[1]});
		const uint256arrayq5aT1ur = await WolfStakingRewardspqEmjB6.updateNotifyRewardAmount.call(uintEXczp7i, {from: accounts[3]});
		const uint34tddw = await WolfStakingRewardspqEmjB6.getReward.call(uintQa2JQAF, {from: accounts[3]});
		const uintYr6u3Ai = await WolfStakingRewardspqEmjB6.getReward.call(uintumDEwMZ, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const string8hD7Mw = "mLIZPj2FxE3DUaRt5IbiiFYp7gB5NLkUCSydAD3GFCBu7HToQ1z2y9F2C"
		const stringFISCX3 = "ZnvV2rr1OQG6936OptYX9Wnb3hp8WgkpV"
		const uintdp6v2Py = BigInt("198")
		const WolfStakingRewardsr8M1nH = await WolfStakingRewards.new(string8hD7Mw, stringFISCX3, uintdp6v2Py, {from: accounts[3]});
		const uintz4ig8sv = BigInt("1023")
		const addressOeXluV = accounts[0]
		const uintMWxo7lx = BigInt("283")
		const uintEpIKufv = BigInt("1468")
		const uintqArFPkc = BigInt("1790")
		const stringES0otSM = await WolfStakingRewardsr8M1nH.name.call({from: accounts[3]});
		const addresseHOCIvv = await WolfStakingRewardsr8M1nH.updateReward.call(addressOeXluV, uintz4ig8sv, {from: accounts[2]});
		const uint8hn8lsAD = await WolfStakingRewardsr8M1nH.decimals.call({from: accounts[4]});
		const uint256hNxaJzS = await WolfStakingRewardsr8M1nH.stake.call(uintEpIKufv, uintMWxo7lx, {from: accounts[1]});
		const uint256B3hdvg2 = await WolfStakingRewardsr8M1nH.exit.call(uintqArFPkc, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQty0wKC = "KFYAb44Cgu1zPd5bg4iItA4zSJcvzHrOhnbqFfaG4CvNtjkiV221DyUAKQzyxw4OT6BSBMBfhOtN"
		const stringsyeD1Sz = "HL8AxmDf23GascuiStuRMSM5ROSYk9LdtzRig"
		const uintqKb7J2F = BigInt("209")
		const WolfStakingRewardsKwU4vh9 = await WolfStakingRewards.new(stringQty0wKC, stringsyeD1Sz, uintqKb7J2F, {from: accounts[2]});
		const uintU4Vijob = BigInt("1343")
		const uintR1FUh1 = BigInt("1247")
		const uintOZPRJO = BigInt("556")
		const uintG7gKR9I = BigInt("510")
		const uintrsUlhfa = BigInt("1650")
		const addressCsMd44 = accounts[5]
		const uintKdi4rkA = BigInt("267")
		const uint5GRKzD = BigInt("1263")
		const stringX3WWgf6 = await WolfStakingRewardsKwU4vh9.symbol.call({from: accounts[4]});
		const uint256cOmCerb = await WolfStakingRewardsKwU4vh9.totalSupplyPerPool.call(uintU4Vijob, {from: accounts[4]});
		const uint256PQ0JorD = await WolfStakingRewardsKwU4vh9.withdrawRemainingBalance.call(uintOZPRJO, uintR1FUh1, {from: accounts[5]});
		const uint256khwM8yB = await WolfStakingRewardsKwU4vh9.exit.call(uintG7gKR9I, {from: accounts[2]});
		const addresszbnEsh5 = await WolfStakingRewardsKwU4vh9.updateReward.call(addressCsMd44, uintrsUlhfa, {from: accounts[4]});
		const uint256S7tenhy = await WolfStakingRewardsKwU4vh9.withdraw.call(uint5GRKzD, uintKdi4rkA, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringN80Mdg = "xasYs8Pn4PyqHxJ9LRdjeVbiD27AwFmii2SJ26e8bDKYeVrx8BVBHXnBOTaudTgAiH"
		const stringkAhuhU8 = "5D"
		const uintkMwLI5L = BigInt("174")
		const WolfStakingRewardsRmBn0xv = await WolfStakingRewards.new(stringN80Mdg, stringkAhuhU8, uintkMwLI5L, {from: accounts[5]});
		const uintpFXxvr = BigInt("911")
		const uintQlVMWGy = BigInt("846")
		const addressqG88Bm = accounts[0]
		const uint256VAoVlQi = await WolfStakingRewardsRmBn0xv.exit.call(uintpFXxvr, {from: accounts[2]});
		await WolfStakingRewardsRmBn0xv.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256pRDErr = await WolfStakingRewardsRmBn0xv.earned.call(addressqG88Bm, uintQlVMWGy, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringpGeXQLf = "IbC"
		const stringBzNFpol = "qFKxN748zqZQMBl90Gy9dE3dddrpKbTjcyDuPa4rwF1uCi1crlBh5qmcYgk1b"
		const uintKToDu8Y = BigInt("60")
		const WolfStakingRewardszWnLb9 = await WolfStakingRewards.new(stringpGeXQLf, stringBzNFpol, uintKToDu8Y, {from: accounts[1]});
		const uinthx33qe7 = BigInt("915")
		const uintVaceP1g = BigInt("927")
		const uintPT1WJbW = BigInt("1770")
		const addressgHcGwYJ = accounts[4]
		const uintIGsDYyV = BigInt("1862")
		const uintuTLPQyp = BigInt("686")
		const uint256arrayLV09Y2a = await WolfStakingRewardszWnLb9.updateNotifyRewardAmount.call(uinthx33qe7, {from: accounts[4]});
		const uint256arrayEes5WKl = await WolfStakingRewardszWnLb9.updateNotifyRewardAmount.call(uintVaceP1g, {from: accounts[3]});
		const uint256xyHPz1E = await WolfStakingRewardszWnLb9.balanceOfPerPool.call(addressgHcGwYJ, uintPT1WJbW, {from: accounts[4]});
		const uint256f3Qp8BT = await WolfStakingRewardszWnLb9.getRewardForDuration.call(uintIGsDYyV, {from: accounts[0]});
		const uint256bwmORcM = await WolfStakingRewardszWnLb9.exit.call(uintuTLPQyp, {from: "0x0000000000000000000000000000000000000001"});
		const uint8hKntIZe = await WolfStakingRewardszWnLb9.decimals.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWB1FWUH = "TMHPP9q2T3h"
		const stringEfOXVre = "3VpSPnVdcfnNP6IN6R7WgfXKZImGvD6BfDcEM5T1dCX4hI9CXrQDuTzXL5l21ArDcGnJ9qN18j"
		const uintd7hDwhF = BigInt("170")
		const WolfStakingRewardsq3ywjHi = await WolfStakingRewards.new(stringWB1FWUH, stringEfOXVre, uintd7hDwhF, {from: accounts[3]});
		const uintSThV61h = BigInt("1104")
		const uintlBzik9H = BigInt("396")
		const uint256TroYukt = await WolfStakingRewardsq3ywjHi.withdrawRemainingBalance.call(uintlBzik9H, uintSThV61h, {from: accounts[4]});
		const uint8h209ArO = await WolfStakingRewardsq3ywjHi.decimals.call({from: accounts[1]});
		await WolfStakingRewardsq3ywjHi.onlyOwner.call({from: accounts[1]});
		const stringLRhn1Mq = await WolfStakingRewardsq3ywjHi.name.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSv3oiC = "Bqi3GkiezAAecrPAfziaBH"
		const string7nnW5t = "Emr"
		const uinttvoNRw7 = BigInt("95")
		const WolfStakingRewardsNW7XWO3 = await WolfStakingRewards.new(stringSv3oiC, string7nnW5t, uinttvoNRw7, {from: accounts[1]});
		const uintAYEv0aV = BigInt("1924")
		const uintscGGneo = BigInt("962")
		const uintlZE4FVW = BigInt("2008")
		const uintokG6GMf = await WolfStakingRewardsNW7XWO3.getReward.call(uintAYEv0aV, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arrays2lhDSA = await WolfStakingRewardsNW7XWO3.updateNotifyRewardAmount.call(uintscGGneo, {from: accounts[3]});
		await WolfStakingRewardsNW7XWO3.onlyRewardsDistribution.call({from: accounts[1]});
		await WolfStakingRewardsNW7XWO3.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uintvgHTfvs = await WolfStakingRewardsNW7XWO3.getReward.call(uintlZE4FVW, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzG6Apyv = "AVTfosymtAO5xEriGErm6hjyu9WcX6nRV"
		const stringDSzo5GG = "WSnGofts9"
		const uintVSQE4FD = BigInt("198")
		const WolfStakingRewardsXeo9ZWX = await WolfStakingRewards.new(stringzG6Apyv, stringDSzo5GG, uintVSQE4FD, {from: "0x0000000000000000000000000000000000000001"});
		const uint5aWgTz = BigInt("860")
		const uintQKmlvFW = BigInt("1658")
		const uintNjrgTKG = BigInt("1727")
		const addresswelucu5 = accounts[4]
		const uintwHAOd52 = BigInt("890")
		const uintRTs41uF = BigInt("700")
		const uint256Pvc3F0F = await WolfStakingRewardsXeo9ZWX.lastTimeRewardApplicable.call(uint5aWgTz, {from: "0x0000000000000000000000000000000000000001"});
		const uintj3GcOKZ = await WolfStakingRewardsXeo9ZWX.getReward.call(uintQKmlvFW, {from: accounts[0]});
		const uint256TTTr1l4 = await WolfStakingRewardsXeo9ZWX.earned.call(addresswelucu5, uintNjrgTKG, {from: accounts[1]});
		const uint2562GplTF = await WolfStakingRewardsXeo9ZWX.stake.call(uintRTs41uF, uintwHAOd52, {from: accounts[3]});
		await WolfStakingRewardsXeo9ZWX.nonReentrant.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const string9U1GHv = "7XotU9Piln1rcgWEHeEqg4XsD3igqHAqzXjkic6CrDMvxKKJJmlG9irKHgnNaxeqmX"
		const stringGCJTLv5 = "mpHaOXDwAxiQqX8Vu0w7ijYkOwY0iqGU21etbxicGdcqkIrylfYiqmBqYhViv75MzLECdKc"
		const uintRkQxUoN = BigInt("167")
		const WolfStakingRewardswJzAKZB = await WolfStakingRewards.new(string9U1GHv, stringGCJTLv5, uintRkQxUoN, {from: accounts[0]});
		const uintSjhDlpJ = BigInt("1475")
		const uintXQLyC4V = BigInt("246")
		const uintji6AJ9p = BigInt("1207")
		const uint256V75aAva = await WolfStakingRewardswJzAKZB.withdraw.call(uintXQLyC4V, uintSjhDlpJ, {from: accounts[3]});
		const uint256qPQtHxM = await WolfStakingRewardswJzAKZB.rewardPerToken.call(uintji6AJ9p, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringgbOTQ8b = "t9A6GoG4Meqwy1vS8ewTyLGkXtS70aB"
		const stringgWdrcmi = "yUhKDW2syBIbqDbSbUgwirepMaR7ecrJLI30SAvAKSBhEgAEeVJV85sNj4Gcf5VbhQmnqDWild37GlBP"
		const uintXl24Ex = BigInt("128")
		const WolfStakingRewardsb8wTJwX = await WolfStakingRewards.new(stringgbOTQ8b, stringgWdrcmi, uintXl24Ex, {from: accounts[1]});
		const uintEFFUiC8 = BigInt("1234")
		const uintaJD0cQ4 = BigInt("523")
		const uintj1PCTSz = await WolfStakingRewardsb8wTJwX.getReward.call(uintEFFUiC8, {from: accounts[0]});
		const uint8TkmJxuQ = await WolfStakingRewardsb8wTJwX.decimals.call({from: accounts[3]});
		const uintZHwBivr = await WolfStakingRewardsb8wTJwX.getReward.call(uintaJD0cQ4, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const string2sNPhf = "vMlKgY22OgQaICuo8YECIFWJNxVcZrAX7HOMIoSihbcwWRbIhQgknWdmOsYfY8VHKjTuVc"
		const string2PZQby = "hf41eYwKghq8qwCP3b5Vr"
		const uinte5baRJ7 = BigInt("80")
		const WolfStakingRewardszeycsHo = await WolfStakingRewards.new(string2sNPhf, string2PZQby, uinte5baRJ7, {from: accounts[3]});
		const uintuD2TbLm = BigInt("203")
		const uintCYAN13L = BigInt("1814")
		const addressV7nPTK = accounts[0]
		const uinttSCG1R6 = BigInt("1334")
		const addressFoBwd67 = accounts[5]
		const uint256ePhmeeV = await WolfStakingRewardszeycsHo.lastTimeRewardApplicable.call(uintuD2TbLm, {from: accounts[5]});
		const uint256o03kB6 = await WolfStakingRewardszeycsHo.earned.call(addressV7nPTK, uintCYAN13L, {from: accounts[2]});
		const uint8ePvwPT = await WolfStakingRewardszeycsHo.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256wYDMuky = await WolfStakingRewardszeycsHo.earned.call(addressFoBwd67, uinttSCG1R6, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIr6FGD = "J8NISqQGenv7b2UKkC5ko"
		const stringSkR51R = "OKnYmcsA3BM5tgLNtJ8bEkb3ocMWY4MXmWRhsDQpqF7xE7"
		const uint4dkNr2 = BigInt("225")
		const WolfStakingRewardsLrDoBD = await WolfStakingRewards.new(stringIr6FGD, stringSkR51R, uint4dkNr2, {from: accounts[1]});
		const stringQJK16bh = await WolfStakingRewardsLrDoBD.symbol.call({from: accounts[5]});
		const uint8qFncsTQ = await WolfStakingRewardsLrDoBD.decimals.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHgjfcxg = "6JbzfTAhaVrPs1uLr8k5EkgbSrG4Z"
		const string3PwGgz = "SQUjTfSmpR"
		const uintkv4P6f5 = BigInt("113")
		const WolfStakingRewardsdi4JcAf = await WolfStakingRewards.new(stringHgjfcxg, string3PwGgz, uintkv4P6f5, {from: accounts[0]});
		const uintjkdKrzs = BigInt("1070")
		const uintXC8NVy6 = BigInt("620")
		const uintFN3gUu = BigInt("156")
		const addressMONHe35 = "0x0000000000000000000000000000000000000001"
		const uint256fYiQvj = await WolfStakingRewardsdi4JcAf.withdraw.call(uintXC8NVy6, uintjkdKrzs, {from: accounts[1]});
		const addresseqM1b6 = await WolfStakingRewardsdi4JcAf.updateReward.call(addressMONHe35, uintFN3gUu, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMmCGBol = "S9SVO9g6b2Yh9SnHpEwHZVOQSozMO9sxQssUpjwIQ4abbP7k9dDBrWOIzghMNCTikhintFfmLR0pggvMHEQDyEFWAL"
		const stringKSETahy = "tunB2a7tOy36uwVBFGwrEB1xmTtkXywwcuHHskF"
		const uintu3Yeq7c = BigInt("72")
		const WolfStakingRewardsFYZJfHB = await WolfStakingRewards.new(stringMmCGBol, stringKSETahy, uintu3Yeq7c, {from: accounts[4]});
		const uintWGqUTZ2 = BigInt("1634")
		const uintFJmTD6 = BigInt("62")
		const uintv4dc5Fk = BigInt("1409")
		const uintl3WkTRN = BigInt("1897")
		const addresslCbAKrQ = accounts[4]
		const uintIo3OVBL = BigInt("1549")
		const uint256NbjcUp = await WolfStakingRewardsFYZJfHB.withdraw.call(uintFJmTD6, uintWGqUTZ2, {from: accounts[0]});
		const uint256C9Lljx1 = await WolfStakingRewardsFYZJfHB.exit.call(uintv4dc5Fk, {from: accounts[1]});
		const uint256iiBS9Gt = await WolfStakingRewardsFYZJfHB.earned.call(addresslCbAKrQ, uintl3WkTRN, {from: accounts[1]});
		const uint8HuHwrNM = await WolfStakingRewardsFYZJfHB.decimals.call({from: accounts[4]});
		const uint256LOLonOu = await WolfStakingRewardsFYZJfHB.totalSupplyPerPool.call(uintIo3OVBL, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjidooeS = "En2"
		const stringcWAZIJd = "7kKgCPXLNd5UISXKydCjKnzUu2bdiPxuTk"
		const uintOfPyyhD = BigInt("1")
		const WolfStakingRewardsjoOAY2x = await WolfStakingRewards.new(stringjidooeS, stringcWAZIJd, uintOfPyyhD, {from: accounts[4]});
		const uintBoa9jH = BigInt("1552")
		const uintbLrZLk = BigInt("1268")
		const uintGZ7eE2l = BigInt("1084")
		const uintTtsXnXP = BigInt("1709")
		const uint256pZKeKx1 = await WolfStakingRewardsjoOAY2x.lastTimeRewardApplicable.call(uintBoa9jH, {from: accounts[1]});
		await WolfStakingRewardsjoOAY2x.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256xEO4Cg = await WolfStakingRewardsjoOAY2x.totalSupplyPerPool.call(uintbLrZLk, {from: accounts[0]});
		const uintHHLc9Ue = await WolfStakingRewardsjoOAY2x.getReward.call(uintGZ7eE2l, {from: accounts[0]});
		const uintEw2cgUZ = await WolfStakingRewardsjoOAY2x.getReward.call(uintTtsXnXP, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringESxC6a = "a6yKYDm2QhjEzeLFdQATVYQMwEBaFnuytwL9AtgHSyXyOQOAtVa7VnIROxQvbSMcmzpuDTbGpnfkzR8nc44f"
		const stringbcEl4lC = "KX11sYQVwoeVtZWQ6b4mATrPWcJv1uWSUdUMGaQznTCnGOoIrO6TQBDHfyFzDJKcc"
		const uintRKCM27t = BigInt("163")
		const WolfStakingRewardsji7cDqu = await WolfStakingRewards.new(stringESxC6a, stringbcEl4lC, uintRKCM27t, {from: accounts[3]});
		const uintOrye3lh = BigInt("565")
		const uintSeTAjjg = BigInt("693")
		const uintXTlP8q7 = BigInt("762")
		const uint256bIcGBj = await WolfStakingRewardsji7cDqu.exit.call(uintOrye3lh, {from: accounts[0]});
		const uint256wRdZUh = await WolfStakingRewardsji7cDqu.withdraw.call(uintXTlP8q7, uintSeTAjjg, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhEExkMs = "S67XN4mrwLt"
		const stringC5UVlu = "tN1S5UF8Fd2UZp26pu4"
		const uintblJMThO = BigInt("197")
		const WolfStakingRewardssSp6mRv = await WolfStakingRewards.new(stringhEExkMs, stringC5UVlu, uintblJMThO, {from: accounts[2]});
		const uintrp2tV8M = BigInt("2043")
		const uintENfzG4w = BigInt("752")
		const uinthaZsXIq = BigInt("1933")
		const uint256EgQwzIe = await WolfStakingRewardssSp6mRv.withdrawRemainingBalance.call(uintENfzG4w, uintrp2tV8M, {from: accounts[3]});
		const uint256Xg8saGh = await WolfStakingRewardssSp6mRv.rewardPerToken.call(uinthaZsXIq, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXRc5yb2 = "UeXRty9Uv44Wt5VsLMDfnnKJD2i28qVTjfTAov876SbgkGj4I2vGMuewxcJ3WTRo"
		const string0T17cW = "27AM222IFtHuHJoqomBveE29asmNHMQkXeq07ByaigStYYfrLwMOiKIT"
		const uintgmGoWp = BigInt("92")
		const WolfStakingRewardsAYwp2Za = await WolfStakingRewards.new(stringXRc5yb2, string0T17cW, uintgmGoWp, {from: accounts[3]});
		const uintr0as82P = BigInt("1365")
		const uintCOSpCr = BigInt("1497")
		const uintJYandyL = BigInt("1892")
		const uintYYLGBh = BigInt("882")
		const uint256Ivp6QcS = await WolfStakingRewardsAYwp2Za.exit.call(uintr0as82P, {from: accounts[3]});
		const uint256arrayqIxyBSL = await WolfStakingRewardsAYwp2Za.updateNotifyRewardAmount.call(uintCOSpCr, {from: accounts[4]});
		const uintNWKEBDn = await WolfStakingRewardsAYwp2Za.getReward.call(uintJYandyL, {from: accounts[1]});
		const uint256hO8Ekhj = await WolfStakingRewardsAYwp2Za.getRewardForDuration.call(uintYYLGBh, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringr7HpWm4 = "yZofMtEpBDMjIvsyVhz"
		const stringyVtSBB1 = "8poJKOeH5RIrRCF"
		const uintqiPVCMW = BigInt("216")
		const WolfStakingRewardsMYYeWOU = await WolfStakingRewards.new(stringr7HpWm4, stringyVtSBB1, uintqiPVCMW, {from: accounts[5]});
		const uintT0pqhSb = BigInt("1943")
		const addressg7z72wH = accounts[2]
		const uintvBtbvCe = BigInt("1004")
		const uintKHs438 = BigInt("1143")
		const uint256Y1desvu = await WolfStakingRewardsMYYeWOU.earned.call(addressg7z72wH, uintT0pqhSb, {from: accounts[0]});
		const uint8YEGAmE = await WolfStakingRewardsMYYeWOU.decimals.call({from: accounts[5]});
		const uint8cZQ7vQt = await WolfStakingRewardsMYYeWOU.decimals.call({from: accounts[2]});
		const uint256iJ8uGoR = await WolfStakingRewardsMYYeWOU.getRewardForDuration.call(uintvBtbvCe, {from: "0x0000000000000000000000000000000000000001"});
		const uintRwgaTmb = await WolfStakingRewardsMYYeWOU.getReward.call(uintKHs438, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringqccyGzo = "7Ginr"
		const stringxSnpNqC = "oPJGIbNwe6y6RgGOUC3YF9pWjGsyFuxYsBfPazKzV3aEmShLBi1jZes"
		const uintuuBfJc = BigInt("30")
		const WolfStakingRewardsfARNE7 = await WolfStakingRewards.new(stringqccyGzo, stringxSnpNqC, uintuuBfJc, {from: accounts[2]});
		const uintOomV4Xs = BigInt("1767")
		const addressX7dsAZ7 = accounts[4]
		const uintEFmtoXq = BigInt("1732")
		const uint256nz6rEUD = await WolfStakingRewardsfARNE7.balanceOfPerPool.call(addressX7dsAZ7, uintOomV4Xs, {from: accounts[4]});
		const uint25610zrpg = await WolfStakingRewardsfARNE7.rewardPerToken.call(uintEFmtoXq, {from: accounts[1]});
		const uint8XJAtjem = await WolfStakingRewardsfARNE7.decimals.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringoUdD6v0 = "x534ZNhSPEchX7rP5U9q1xy015noZb2DMR44Yn7gFAlQsrPxevfOwetxn0WyEH"
		const stringUJcdwjG = "5hmF9SXWfPMjjfokIXmOA5sYh"
		const uintMnPOxfS = BigInt("65")
		const WolfStakingRewardsQFPZzj5 = await WolfStakingRewards.new(stringoUdD6v0, stringUJcdwjG, uintMnPOxfS, {from: accounts[2]});
		const uintewsOOXF = BigInt("818")
		const uintaDfrhOf = BigInt("976")
		const stringeIVXdsN = await WolfStakingRewardsQFPZzj5.name.call({from: accounts[0]});
		const uint256S8WwWJX = await WolfStakingRewardsQFPZzj5.withdrawRemainingBalance.call(uintaDfrhOf, uintewsOOXF, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuJytJZ = "sRZNP7fYR"
		const stringEvxJ7Ku = "JSOyeE"
		const uintrS6N3OG = BigInt("172")
		const WolfStakingRewardsfDwK2nt = await WolfStakingRewards.new(stringuJytJZ, stringEvxJ7Ku, uintrS6N3OG, {from: accounts[0]});
		const uinttNAfI5L = BigInt("119")
		const uintPczhkjn = BigInt("1200")
		const uintsiFcsDB = BigInt("1373")
		const uintJIcKCZh = BigInt("780")
		const uint256EA3i4Qr = await WolfStakingRewardsfDwK2nt.totalSupplyPerPool.call(uinttNAfI5L, {from: accounts[3]});
		const uint256a1I5HW = await WolfStakingRewardsfDwK2nt.withdraw.call(uintsiFcsDB, uintPczhkjn, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayqPBqF6 = await WolfStakingRewardsfDwK2nt.updateNotifyRewardAmount.call(uintJIcKCZh, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringc7L3TI = "BHfsEpPCz0QxXmofS1cMHvXCspgtRgGFPuO41mvQX1rIyt2hoBDzAzzn1eA71liNpd3fTp3wMhQjfXc4NBRzpLA9Rdbj"
		const stringcCaHW5 = "9JvxLCQhoRP8yPZKOW"
		const uintQVppjiI = BigInt("10")
		const WolfStakingRewardszd7I3Eo = await WolfStakingRewards.new(stringc7L3TI, stringcCaHW5, uintQVppjiI, {from: accounts[0]});
		const uintPWOuba = BigInt("208")
		const uintXWlf4bi = BigInt("1234")
		const uintqmul5HT = BigInt("337")
		const uintHM2i856 = BigInt("1117")
		const uintkb2lrdL = BigInt("542")
		const uintUYtkoC = BigInt("90")
		const uintcg7qJ2D = BigInt("917")
		const uint256arraybl4ohPq = await WolfStakingRewardszd7I3Eo.updateNotifyRewardAmount.call(uintPWOuba, {from: accounts[2]});
		await WolfStakingRewardszd7I3Eo.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256arrayGz0kf8L = await WolfStakingRewardszd7I3Eo.updateNotifyRewardAmount.call(uintXWlf4bi, {from: accounts[0]});
		const uint256GBXId0X = await WolfStakingRewardszd7I3Eo.withdrawRemainingBalance.call(uintHM2i856, uintqmul5HT, {from: accounts[5]});
		const uint256cigMefl = await WolfStakingRewardszd7I3Eo.stake.call(uintUYtkoC, uintkb2lrdL, {from: accounts[4]});
		const uint256UoFupa8 = await WolfStakingRewardszd7I3Eo.exit.call(uintcg7qJ2D, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQMSXXvr = "G26qicKkGoW3rWRMv3pusBFwCQ6rXW91WFnQI06t9jmrQj47VrYjQm3fRRpoeqeAz7H7wCztOJiewcOWhztZts"
		const stringn2gUZmj = "lQBQ04oUqnK9idu1a1vxGQq2rRqwwjw4qVo7z4lguNlXAPxsyrXgFOdE1J5NF"
		const uintCp6tGTL = BigInt("138")
		const WolfStakingRewardsLkg8bN = await WolfStakingRewards.new(stringQMSXXvr, stringn2gUZmj, uintCp6tGTL, {from: accounts[2]});
		const uintRPfDAwB = BigInt("1198")
		const uintQ8AqpQw = BigInt("1442")
		const uintmGDkHfR = BigInt("488")
		const addresswsXN8Fc = "0x0000000000000000000000000000000000000001"
		const uintEsxenkl = BigInt("1428")
		const stringXAGF0x = await WolfStakingRewardsLkg8bN.name.call({from: accounts[0]});
		const uint256lkwoHvO = await WolfStakingRewardsLkg8bN.stake.call(uintQ8AqpQw, uintRPfDAwB, {from: accounts[4]});
		const uint256F2ToGZv = await WolfStakingRewardsLkg8bN.earned.call(addresswsXN8Fc, uintmGDkHfR, {from: accounts[2]});
		const uint256ZmMeKb5 = await WolfStakingRewardsLkg8bN.totalSupplyPerPool.call(uintEsxenkl, {from: accounts[3]});
		const stringfmJf9PD = await WolfStakingRewardsLkg8bN.symbol.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXQxvosk = "hWDbWdirEPig7xT8GeuPL4eWS4LmTWAIlv4M1xfRIHHmHnS3xpYfK7JlZYIJ11RxKYrgqWb34cyhYeLSSWjK"
		const stringszkfta7 = "Of3bLX3ELvCz7GMFm9AqxsesGDCiziA5fzGwFP"
		const uintJLipmp = BigInt("15")
		const WolfStakingRewardsTlU4V0 = await WolfStakingRewards.new(stringXQxvosk, stringszkfta7, uintJLipmp, {from: accounts[3]});
		const uintmerA5Yc = BigInt("294")
		const uintZyoo8kX = BigInt("580")
		const uintddnKXDv = BigInt("667")
		const uintXgQ6HQ = BigInt("722")
		const uintEMxJRVa = BigInt("1523")
		const uintR8DafT = BigInt("652")
		const uint256mWsxWiM = await WolfStakingRewardsTlU4V0.withdrawRemainingBalance.call(uintZyoo8kX, uintmerA5Yc, {from: accounts[0]});
		await WolfStakingRewardsTlU4V0.nonReentrant.call({from: accounts[4]});
		const uint256KUYozS = await WolfStakingRewardsTlU4V0.withdrawRemainingBalance.call(uintXgQ6HQ, uintddnKXDv, {from: accounts[3]});
		const uint256XDBIs26 = await WolfStakingRewardsTlU4V0.stake.call(uintR8DafT, uintEMxJRVa, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringqyam5xu = "AxorSp179Ewhg7BWlnhiprAu9cU1cr7EqQhdhHeVeUFxLQajKh"
		const stringXFi7q8z = "lsAhfzIaz4DepGxGg5EOPABkt"
		const uinterycEqK = BigInt("18")
		const WolfStakingRewardsTwDjBgB = await WolfStakingRewards.new(stringqyam5xu, stringXFi7q8z, uinterycEqK, {from: accounts[0]});
		const uintKMW4cft = BigInt("1635")
		const uintnJTkYpS = BigInt("1959")
		const uintX7Po1Dh = BigInt("509")
		const uint81Ph0o = BigInt("1656")
		const uint256arrayOxrY5or = await WolfStakingRewardsTwDjBgB.updateNotifyRewardAmount.call(uintKMW4cft, {from: accounts[0]});
		const uint256Y2AABRI = await WolfStakingRewardsTwDjBgB.exit.call(uintnJTkYpS, {from: accounts[4]});
		const uintLPJ6HpZ = await WolfStakingRewardsTwDjBgB.getReward.call(uintX7Po1Dh, {from: accounts[3]});
		const uint256fNhZFX = await WolfStakingRewardsTwDjBgB.getRewardForDuration.call(uint81Ph0o, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringGx2wyFk = "gzsKTthQoyBQEW0GQanN1KGUcrNKg0daCRHtyVdGpZGHWAusbs7jjcwRet"
		const stringemYrwGH = "61GSR6RWFaBt8vJxzj822LNO26JmZDH4gxUa8frgq50f7wGqClaPxBjJRn3baTp"
		const uint7fuP8m = BigInt("147")
		const WolfStakingRewardsFqHupXy = await WolfStakingRewards.new(stringGx2wyFk, stringemYrwGH, uint7fuP8m, {from: accounts[4]});
		const uintej5csQx = BigInt("123")
		const uintmHX5qt2 = BigInt("325")
		const uintyui4Ymn = BigInt("1740")
		const uinthVV5JLX = BigInt("1031")
		const uint256P5uxAuy = await WolfStakingRewardsFqHupXy.stake.call(uintmHX5qt2, uintej5csQx, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bhqIsm7 = await WolfStakingRewardsFqHupXy.stake.call(uinthVV5JLX, uintyui4Ymn, {from: accounts[3]});
		const stringdMDWGk9 = await WolfStakingRewardsFqHupXy.symbol.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringrht84tQ = "Gyq3tLtRORSxMtpYtWwuPqyo"
		const stringzRP8JXG = "9Os0jAGm4FlreoXISw9w1Cdav4qFFWJIbaWO7yRJmriqr4fhH5Hsoj9p45snFM0W4"
		const uintwtyNFCP = BigInt("4")
		const WolfStakingRewardsJpQdPhP = await WolfStakingRewards.new(stringrht84tQ, stringzRP8JXG, uintwtyNFCP, {from: accounts[1]});
		const uintYLYR6Pl = BigInt("82")
		const uintpWribg0 = BigInt("1208")
		const uintW8q9HkB = BigInt("616")
		const uintjgGwJbA = BigInt("62")
		const uint256hxu3Bqw = await WolfStakingRewardsJpQdPhP.getRewardForDuration.call(uintYLYR6Pl, {from: accounts[3]});
		const uint256DkGLhxv = await WolfStakingRewardsJpQdPhP.rewardPerToken.call(uintpWribg0, {from: accounts[1]});
		await WolfStakingRewardsJpQdPhP.onlyRewardsDistribution.call({from: accounts[4]});
		const uintxugePhI = await WolfStakingRewardsJpQdPhP.getReward.call(uintW8q9HkB, {from: accounts[5]});
		const uint256lNNWxwy = await WolfStakingRewardsJpQdPhP.lastTimeRewardApplicable.call(uintjgGwJbA, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringP55itUp = "vghfk3RvheUiS4L0kWEIsuXXBNgKVajCqtvAvG7TyG2jq4hPXFNQ3aI"
		const stringKEDSXCI = "bbM7Pm1L8k7NKEG37utzLjDTtXelimNoOWSQaUk5D5w8booXkjUa8gsVbndTnaG44DP52mg7UNev1mXe5XRnWDrO"
		const uintJewx3Y3 = BigInt("127")
		const WolfStakingRewardsrIrICz = await WolfStakingRewards.new(stringP55itUp, stringKEDSXCI, uintJewx3Y3, {from: accounts[4]});
		const uintVrrMvaj = BigInt("10")
		const uintUpVvstf = BigInt("1916")
		const uintsyMlVRb = BigInt("915")
		const uintMeBk4Vp = BigInt("569")
		const uint256E3j0802 = await WolfStakingRewardsrIrICz.withdraw.call(uintUpVvstf, uintVrrMvaj, {from: accounts[4]});
		const stringdlXomV = await WolfStakingRewardsrIrICz.symbol.call({from: accounts[5]});
		const uint256gnjTWLU = await WolfStakingRewardsrIrICz.withdraw.call(uintMeBk4Vp, uintsyMlVRb, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringD4JKjjd = "YLAfJYkvp9mQbGLspIniTrKPcEr"
		const stringarGIG3f = "wChFLIMyNHY8cIXNooTbfRs8PzbpUU6MuW5CSTp7NMqs4y7b1QODB5CNjWU6gx1VyntXCXzqaDnMWi"
		const uintlVV9hp = BigInt("11")
		const WolfStakingRewardsH2muHuJ = await WolfStakingRewards.new(stringD4JKjjd, stringarGIG3f, uintlVV9hp, {from: accounts[2]});
		const uintgTrk2r6 = BigInt("1272")
		const uintPMDlzgr = BigInt("1134")
		const uintDE6Yhpn = BigInt("1308")
		const uint99WDXQ = BigInt("335")
		const uintYZ8qGsa = BigInt("306")
		const addressz6shVs6 = accounts[0]
		const uintaVJ4a1Z = BigInt("1494")
		const uint256KeRNxq6 = await WolfStakingRewardsH2muHuJ.withdraw.call(uintPMDlzgr, uintgTrk2r6, {from: accounts[1]});
		const uint256TacgPJ = await WolfStakingRewardsH2muHuJ.withdrawRemainingBalance.call(uint99WDXQ, uintDE6Yhpn, {from: accounts[4]});
		const uint256BMdQKx = await WolfStakingRewardsH2muHuJ.earned.call(addressz6shVs6, uintYZ8qGsa, {from: accounts[2]});
		const uint256arrayq1Smq7Q = await WolfStakingRewardsH2muHuJ.updateNotifyRewardAmount.call(uintaVJ4a1Z, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjv809mS = "O4OHcRaIzxvzy9finm0RNCLdvcFWyNVjRRDA7V56Q62YOUvle4uSV7Sz0sbNWoJytn9DKJEd3yEAGAliwZdJBaRfnL39"
		const stringegGnZ4p = "J9F772wgB01WVeBLOKYmFh6am"
		const uintTopYoNb = BigInt("209")
		const WolfStakingRewardseiIWiE0 = await WolfStakingRewards.new(stringjv809mS, stringegGnZ4p, uintTopYoNb, {from: accounts[1]});
		const uintLQUnC9j = BigInt("1182")
		const uintfcrjit4 = BigInt("2007")
		const addressK44kiqW = accounts[2]
		const uintexDF3Wp = BigInt("524")
		const stringsBgUnzr = await WolfStakingRewardseiIWiE0.name.call({from: accounts[1]});
		const uintYoBToNL = await WolfStakingRewardseiIWiE0.getReward.call(uintLQUnC9j, {from: accounts[4]});
		const uint256dj33NyT = await WolfStakingRewardseiIWiE0.balanceOfPerPool.call(addressK44kiqW, uintfcrjit4, {from: accounts[4]});
		const uint256njXl5OU = await WolfStakingRewardseiIWiE0.getRewardForDuration.call(uintexDF3Wp, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringsVvll2 = "GcvbOG37aU3w7UdLfSlVaXbqlbBlBYip4JBrFGmxAnVSYJLnE8BXUlnK3PkrDqCUXsr4MmXXoxCElGS"
		const stringz8lJCua = "7Lp17lQCbPyhjG6LiSs2rdv1vB6pgwqs2UcCJoVjvr4qVlAZTffKaLznO22feUFeSSqruon1m52nCdggivHg0cDWFCxRl"
		const uintvwmpMZa = BigInt("219")
		const WolfStakingRewardsfILsXES = await WolfStakingRewards.new(stringsVvll2, stringz8lJCua, uintvwmpMZa, {from: accounts[0]});
		const uintA5y8GgU = BigInt("1266")
		const uintutPPm7o = BigInt("457")
		const addressSDbfHoV = "0x0000000000000000000000000000000000000001"
		const uintPE0eYK2 = BigInt("1699")
		const addressIGxsZ2p = accounts[5]
		const uint256bBTyYEq = await WolfStakingRewardsfILsXES.exit.call(uintA5y8GgU, {from: accounts[3]});
		const stringbmFHDQV = await WolfStakingRewardsfILsXES.symbol.call({from: accounts[4]});
		const uint256lu77zn4 = await WolfStakingRewardsfILsXES.balanceOfPerPool.call(addressSDbfHoV, uintutPPm7o, {from: accounts[1]});
		await WolfStakingRewardsfILsXES.onlyOwner.call({from: accounts[3]});
		const uint256zPyyj8i = await WolfStakingRewardsfILsXES.earned.call(addressIGxsZ2p, uintPE0eYK2, {from: accounts[3]});
	});
})