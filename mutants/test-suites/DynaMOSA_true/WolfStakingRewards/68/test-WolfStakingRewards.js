const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const stringC8co9RH = "Boux"
		const stringtkFQZnt = "ndfvVx2hNg542RGynRF4SJvC7KCI2vqrMhUhvYdr1Bl8eBgTFNvr4nL"
		const uintrU285Dy = BigInt("234")
		const WolfStakingRewardspUjZx1D = await WolfStakingRewards.new(stringC8co9RH, stringtkFQZnt, uintrU285Dy, {from: accounts[3]});
		const uintq0VrFja = BigInt("403")
		const uintUpFHjYl = BigInt("345")
		const addressXjvHeWa = accounts[2]
		const uintcw0m8vu = BigInt("933")
		const addressxs6VwK = accounts[0]
		await WolfStakingRewardspUjZx1D.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256arrayo9dtM9n = await WolfStakingRewardspUjZx1D.updateNotifyRewardAmount.call(uintq0VrFja, {from: accounts[1]});
		const uint256QOQcxkS = await WolfStakingRewardspUjZx1D.balanceOfPerPool.call(addressXjvHeWa, uintUpFHjYl, {from: accounts[2]});
		const string4OboqR = await WolfStakingRewardspUjZx1D.name.call({from: accounts[1]});
		const uint256W1YcUwz = await WolfStakingRewardspUjZx1D.balanceOfPerPool.call(addressxs6VwK, uintcw0m8vu, {from: accounts[3]});
		await WolfStakingRewardspUjZx1D.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXLnTyS = "rFyo7LmFb2QOIUX"
		const stringc34KB8M = "pasQkogrd2nDTzMIwANWYuakXPHWnJDtR1SeNGHsGBEOqgc1R5f1LXVjC4wPkGIVgmqeienywUtk4zC6LQA8CQhDfWX"
		const uintCYMalYq = BigInt("75")
		const WolfStakingRewardsZAbGgUT = await WolfStakingRewards.new(stringXLnTyS, stringc34KB8M, uintCYMalYq, {from: accounts[3]});
		const uintVhpzny = BigInt("695")
		const addressMPyUDrb = accounts[0]
		const uintX0cIoF1 = BigInt("959")
		const addresso9BQrdC = accounts[5]
		const uintA22pyXI = BigInt("1132")
		await WolfStakingRewardsZAbGgUT.nonReentrant.call({from: accounts[0]});
		const uint256gOkPtuS = await WolfStakingRewardsZAbGgUT.earned.call(addressMPyUDrb, uintVhpzny, {from: accounts[4]});
		await WolfStakingRewardsZAbGgUT.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256wxGMyS = await WolfStakingRewardsZAbGgUT.balanceOfPerPool.call(addresso9BQrdC, uintX0cIoF1, {from: accounts[3]});
		const uint256ZIlH00w = await WolfStakingRewardsZAbGgUT.rewardPerToken.call(uintA22pyXI, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVmJBKm = "v0uBthgDQTJk0SJaH8rvS228QMfPLPcsqIDnqAb1IHGfMCtt0E9qPscdqbq"
		const stringlTbFPDp = "k7OxxWw56KYXYSdTXmHBKbe1TOxiUETHLPhx6A2dLp5"
		const uintt5VgjdU = BigInt("68")
		const WolfStakingRewardsyvB7Jq = await WolfStakingRewards.new(stringVmJBKm, stringlTbFPDp, uintt5VgjdU, {from: accounts[0]});
		const uintO7DQGte = BigInt("354")
		const addressOGb06Za = accounts[1]
		const uint256i9dIAQf = await WolfStakingRewardsyvB7Jq.balanceOfPerPool.call(addressOGb06Za, uintO7DQGte, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsyvB7Jq.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressuDYm3tG = "0x0000000000000000000000000000000000000001"
		const addressaXAKBj = accounts[0]
		const addressfJQFoLd = accounts[1]
		const WolfStakingRewardsuSS8lhZ = await WolfStakingRewards.new(addressuDYm3tG, addressaXAKBj, addressfJQFoLd, {from: "0x0000000000000000000000000000000000000001"});
		const uintKXcneZi = BigInt("1502")
		const addresswKuVTRH = accounts[5]
		const uinttcvxnnw = BigInt("1168")
		const uintsPwdDP = BigInt("408")
		const uint2BFBjH = BigInt("163")
		const addressH861qCK = await WolfStakingRewardsuSS8lhZ.updateReward.call(addresswKuVTRH, uintKXcneZi, {from: accounts[3]});
		await WolfStakingRewardsuSS8lhZ.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256yOCgT6N = await WolfStakingRewardsuSS8lhZ.lastTimeRewardApplicable.call(uinttcvxnnw, {from: accounts[5]});
		const uint256cFEYAtH = await WolfStakingRewardsuSS8lhZ.lastTimeRewardApplicable.call(uintsPwdDP, {from: accounts[4]});
		const uintwE2B3nk = await WolfStakingRewardsuSS8lhZ.getReward.call(uint2BFBjH, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeBo97V = "SmJ5CnaEkgU6PU1SEjC3Qk3VATHRo4mdMEPmouIiCmiUwqilyBHBQ22Lae6SwNnbeWNUVAxo3Cx9DjNH2IeTnsUh451U"
		const stringq7j2RAq = "iCE3Mh8bFwdska9T6VnS2iDBrHvswQGHPbLYzunfNNA8mzFId977U"
		const uintuOPbBPl = BigInt("207")
		const WolfStakingRewardscCPf6WI = await WolfStakingRewards.new(stringeBo97V, stringq7j2RAq, uintuOPbBPl, {from: accounts[0]});
		const uintEmznBB1 = BigInt("2008")
		const uintZ74gyQ0 = BigInt("503")
		const addressqTOGipn = accounts[5]
		await WolfStakingRewardscCPf6WI.onlyOwner.call({from: accounts[2]});
		const uintneRA1Mx = await WolfStakingRewardscCPf6WI.getReward.call(uintEmznBB1, {from: accounts[4]});
		const addressLe0fLqR = await WolfStakingRewardscCPf6WI.updateReward.call(addressqTOGipn, uintZ74gyQ0, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressJHNMHa4 = accounts[2]
		const addressmpRn4C = accounts[5]
		const address1MlmzZ = accounts[1]
		const WolfStakingRewardsS2iDzwz = await WolfStakingRewards.new(addressJHNMHa4, addressmpRn4C, address1MlmzZ, {from: accounts[3]});
		const uintwPiLRNQ = BigInt("1689")
		const uintoHvQDFz = BigInt("561")
		const uint5o08d1 = BigInt("1228")
		const uintsD1iySE = BigInt("1072")
		const uintaQo6fex = BigInt("1361")
//		await WolfStakingRewardsS2iDzwz.onlyOwner.call({from: accounts[2]});
//		const uint256EkX8yEm = await WolfStakingRewardsS2iDzwz.exit.call(uintwPiLRNQ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256arrayYTMadyJ = await WolfStakingRewardsS2iDzwz.updateNotifyRewardAmount.call(uintoHvQDFz, {from: accounts[3]});
//		const uint256hIEZkRG = await WolfStakingRewardsS2iDzwz.stake.call(uintsD1iySE, uint5o08d1, {from: accounts[2]});
//		const uint256wqqr8C = await WolfStakingRewardsS2iDzwz.getRewardForDuration.call(uintaQo6fex, {from: accounts[4]});

		await expect(WolfStakingRewardsS2iDzwz.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringEFpkM3h = "cjBXyv5niNZqKnkkhRf94gn07EPYMOorH6UaLXQISq4qJhuuGGxsnPQbQ6gbRKakHbCnPOfn6cwTQfF5slyUTC5VrfkdmnW0"
		const stringlZC8j8B = ""
		const uintj4wk5H = BigInt("3")
		const WolfStakingRewardsSWZNIIL = await WolfStakingRewards.new(stringEFpkM3h, stringlZC8j8B, uintj4wk5H, {from: accounts[3]});
		const uintqNvKQBX = BigInt("2016")
		const uintxYIfSe5 = BigInt("1824")
		const uintv7z4hXn = BigInt("869")
		const uint256FxDMTu7 = await WolfStakingRewardsSWZNIIL.totalSupplyPerPool.call(uintqNvKQBX, {from: accounts[3]});
		const uint256u7FAMN9 = await WolfStakingRewardsSWZNIIL.lastTimeRewardApplicable.call(uintxYIfSe5, {from: accounts[4]});
		const uint2562rVpPC = await WolfStakingRewardsSWZNIIL.rewardPerToken.call(uintv7z4hXn, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringa1p7uf5 = "cCnvmzulb2MvPnFVHzMD8erEGHAhhDNVKVN79gWyVXg"
		const stringo34ZSG9 = "HTsLLgGXd99qjuvSYVRJTdfleTIqdUDMd9HL1M3D4NPHZEJYXsjRklES0rNEzubWC0SHK34fWHlA1WxMuH9sptWYh98r"
		const uintt6NevPw = BigInt("83")
		const WolfStakingRewardspDrIbY9 = await WolfStakingRewards.new(stringa1p7uf5, stringo34ZSG9, uintt6NevPw, {from: accounts[2]});
		const uintJ5cNcAT = BigInt("1217")
		const addressWhq8G5K = accounts[3]
		const uintPTv6Xnu = BigInt("465")
		const addressPtWuseX = "0x0000000000000000000000000000000000000001"
		const uintUtjzgnQ = BigInt("1526")
		const uintwcqa96G = BigInt("279")
		const uint256Jlq74b5 = await WolfStakingRewardspDrIbY9.balanceOfPerPool.call(addressWhq8G5K, uintJ5cNcAT, {from: accounts[4]});
		const addressxfcix4S = await WolfStakingRewardspDrIbY9.updateReward.call(addressPtWuseX, uintPTv6Xnu, {from: accounts[5]});
		const uint256sRDrfX9 = await WolfStakingRewardspDrIbY9.stake.call(uintwcqa96G, uintUtjzgnQ, {from: accounts[2]});
		await WolfStakingRewardspDrIbY9.nonReentrant.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringkF7rNQb = "31DDukY2xqe6RXGrLs369fqS9jtj7MgeYY1ByVAVz9QR68zHxG3JWdXSVvAtnafTeJWVijR"
		const stringTvToAYs = "nr"
		const uintVXSFFb = BigInt("40")
		const WolfStakingRewardspElB6c = await WolfStakingRewards.new(stringkF7rNQb, stringTvToAYs, uintVXSFFb, {from: accounts[5]});
		const uintHcLsV3 = BigInt("1850")
		const uintAFftngw = BigInt("1668")
		const uintLmMQZUY = BigInt("1992")
		const uintBwIn5nm = BigInt("1717")
		const addressLfupiKk = accounts[4]
		const uint256arrayMvFQ5T = await WolfStakingRewardspElB6c.updateNotifyRewardAmount.call(uintHcLsV3, {from: accounts[0]});
		const uint256b25r4KC = await WolfStakingRewardspElB6c.rewardPerToken.call(uintAFftngw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arraydRnE78L = await WolfStakingRewardspElB6c.updateNotifyRewardAmount.call(uintLmMQZUY, {from: accounts[0]});
		const addressJc8Q7rj = await WolfStakingRewardspElB6c.updateReward.call(addressLfupiKk, uintBwIn5nm, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressYD9lEW = accounts[0]
		const addressMAwd5Us = accounts[2]
		const addressjHExlRn = accounts[4]
		const WolfStakingRewardsNArZfjx = await WolfStakingRewards.new(addressYD9lEW, addressMAwd5Us, addressjHExlRn, {from: accounts[2]});
		const uintavz6SUU = BigInt("1903")
		const uintLqqyuSy = BigInt("1717")
		const uintwSB29Tr = BigInt("948")
		const uinthjcYvmM = BigInt("125")
		const uintegi2pEN = BigInt("1157")
		const uintKZsXsqX = BigInt("1291")
		const uintZdTCWHd = BigInt("212")
		const uintSYofyI3 = BigInt("796")
		const uintsord9zQ = BigInt("1909")
		const uint256y5ZQ2M = await WolfStakingRewardsNArZfjx.totalSupplyPerPool.call(uintavz6SUU, {from: accounts[5]});
//		const uint8smYTICn = await WolfStakingRewardsNArZfjx.decimals.call({from: accounts[0]});
//		const uint256CC7yeIc = await WolfStakingRewardsNArZfjx.getRewardForDuration.call(uintLqqyuSy, {from: accounts[0]});
//		const uint256IrtsglV = await WolfStakingRewardsNArZfjx.rewardPerToken.call(uintwSB29Tr, {from: accounts[4]});
//		const uint256mEX66V8 = await WolfStakingRewardsNArZfjx.stake.call(uintegi2pEN, uinthjcYvmM, {from: accounts[1]});
//		const uint256niiswCo = await WolfStakingRewardsNArZfjx.stake.call(uintZdTCWHd, uintKZsXsqX, {from: accounts[1]});
//		const uint256Wfnwdrt = await WolfStakingRewardsNArZfjx.exit.call(uintSYofyI3, {from: accounts[2]});
//		const uintNEvMNJu = await WolfStakingRewardsNArZfjx.getReward.call(uintsord9zQ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256y5ZQ2M, BigInt("0"))
		await expect(WolfStakingRewardsNArZfjx.decimals.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressb3b9Q9E = accounts[3]
		const address79TP6A = accounts[2]
		const addressS3mW3Hr = accounts[0]
		const WolfStakingRewardsIxOJdSa = await WolfStakingRewards.new(addressb3b9Q9E, address79TP6A, addressS3mW3Hr, {from: accounts[0]});
		const uintAwacGkW = BigInt("1099")
		const uintXZnBx5m = BigInt("192")
		const uintjfcYD7N = BigInt("770")
		const uintH0PcnS0 = BigInt("1979")
		const uintPbC1WFi = BigInt("1079")
//		const uint256XLZ8O6i = await WolfStakingRewardsIxOJdSa.withdraw.call(uintXZnBx5m, uintAwacGkW, {from: accounts[4]});
//		const uint256fAXUxW = await WolfStakingRewardsIxOJdSa.rewardPerToken.call(uintjfcYD7N, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256UlZi6D = await WolfStakingRewardsIxOJdSa.getRewardForDuration.call(uintH0PcnS0, {from: accounts[0]});
//		const uint256z4JAp2I = await WolfStakingRewardsIxOJdSa.rewardPerToken.call(uintPbC1WFi, {from: accounts[5]});
//		const uint8aNSL1N0 = await WolfStakingRewardsIxOJdSa.decimals.call({from: accounts[0]});

		await expect(WolfStakingRewardsIxOJdSa.withdraw.call(uintXZnBx5m, uintAwacGkW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringpdp1Bt = "6IVtyviSSQCGKDYeMSnS0Vgu4hCHHpcHkim6kqrrTP7HpoJT"
		const stringOSkVcu7 = "0Mj2vWhbQUBNEdX8ExK1NU6L0frWMBM2grpEybo2zF0b7xLG7HRYfIWXrzJ"
		const uintU6oirM6 = BigInt("75")
		const WolfStakingRewardst0wazJ = await WolfStakingRewards.new(stringpdp1Bt, stringOSkVcu7, uintU6oirM6, {from: accounts[3]});
		const uintcwgSl4A = BigInt("518")
		const uintZz1LgZ0 = BigInt("1750")
		await WolfStakingRewardst0wazJ.nonReentrant.call({from: accounts[5]});
		const uint256arrayAqB0toa = await WolfStakingRewardst0wazJ.updateNotifyRewardAmount.call(uintcwgSl4A, {from: accounts[0]});
		const uint256rMveJeU = await WolfStakingRewardst0wazJ.totalSupplyPerPool.call(uintZz1LgZ0, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtcW73HC = "4ksGRQK9Q8vAGCET7zECIkB4uxNgRT93Qu3P3bgvosKKjXgxTTdwzv"
		const stringrgoipDO = "pjcQkI7idQEpYzMTAQevbnjF22dlOcv0s48lsPVjr"
		const uintu6U7Nkw = BigInt("111")
		const WolfStakingRewardswsO8Bij = await WolfStakingRewards.new(stringtcW73HC, stringrgoipDO, uintu6U7Nkw, {from: accounts[2]});
		const uintgVWuoE = BigInt("1146")
		const uintPCnUV9A = BigInt("1010")
		const uint76YfZS = BigInt("934")
		const stringRIX0liu = await WolfStakingRewardswsO8Bij.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256LEYpyG1 = await WolfStakingRewardswsO8Bij.getRewardForDuration.call(uintgVWuoE, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardswsO8Bij.nonReentrant.call({from: accounts[3]});
		const uint256rO3e9tu = await WolfStakingRewardswsO8Bij.stake.call(uint76YfZS, uintPCnUV9A, {from: accounts[1]});
		const stringtgVn3x = await WolfStakingRewardswsO8Bij.symbol.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringlpNTHca = "ThGuJAT6R0ONMaqm1XchJzmrJASgtGEzgobHEff"
		const stringpL3LnC8 = "9vfTrHk7gQCcZkhBgzowq5KygiTRzEUWBcvKDsgfKmKSSlaa8t"
		const uintjpbsS7 = BigInt("239")
		const WolfStakingRewardswijrTc = await WolfStakingRewards.new(stringlpNTHca, stringpL3LnC8, uintjpbsS7, {from: accounts[3]});
		await WolfStakingRewardswijrTc.onlyOwner.call({from: accounts[0]});
		const stringrSarmgy = await WolfStakingRewardswijrTc.symbol.call({from: accounts[4]});
		const uint8C317Luh = await WolfStakingRewardswijrTc.decimals.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressq1BvnLY = accounts[3]
		const addressRUaLEtI = accounts[2]
		const addressAQwYZKw = accounts[0]
		const WolfStakingRewardsIxOJdSa = await WolfStakingRewards.new(addressq1BvnLY, addressRUaLEtI, addressAQwYZKw, {from: accounts[0]});
		const uintx1phHiL = BigInt("770")
		const uintq3ll8cM = BigInt("1067")
		const uintFPlFNgh = BigInt("2005")
		const addressQPIlnjf = accounts[1]
		const uintYoAhCCG = BigInt("1079")
		const uint256fAXUxW = await WolfStakingRewardsIxOJdSa.rewardPerToken.call(uintx1phHiL, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256UlZi6D = await WolfStakingRewardsIxOJdSa.getRewardForDuration.call(uintq3ll8cM, {from: accounts[0]});
//		const uint256UdCRZpu = await WolfStakingRewardsIxOJdSa.earned.call(addressQPIlnjf, uintFPlFNgh, {from: accounts[2]});
//		const uint256z4JAp2I = await WolfStakingRewardsIxOJdSa.rewardPerToken.call(uintYoAhCCG, {from: accounts[5]});
//		const uint8aNSL1N0 = await WolfStakingRewardsIxOJdSa.decimals.call({from: accounts[0]});

		assert.equal(uint256fAXUxW, BigInt("0"))
		await expect(WolfStakingRewardsIxOJdSa.getRewardForDuration.call(uintq3ll8cM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressBiBXST0 = accounts[3]
		const addressQiGrvuJ = accounts[2]
		const addressVKv2ZXK = accounts[0]
		const WolfStakingRewardsIxOJdSa = await WolfStakingRewards.new(addressBiBXST0, addressQiGrvuJ, addressVKv2ZXK, {from: accounts[0]});
		const uintKC9rEpk = BigInt("1296")
		const uintLWsx4P3 = BigInt("1601")
		const uintOErlsaF = BigInt("1099")
		const uintAgKxxt = BigInt("192")
		const uintp8zuLGV = BigInt("766")
		const uintoMy4Cw9 = BigInt("1979")
		const uintGAwh48y = BigInt("1079")
//		const uint256esGdZwR = await WolfStakingRewardsIxOJdSa.withdrawRemainingBalance.call(uintLWsx4P3, uintKC9rEpk, {from: accounts[1]});
//		const uint8HFhyiTU = await WolfStakingRewardsIxOJdSa.decimals.call({from: accounts[1]});
//		const uint256XLZ8O6i = await WolfStakingRewardsIxOJdSa.withdraw.call(uintAgKxxt, uintOErlsaF, {from: accounts[4]});
//		const uint256fAXUxW = await WolfStakingRewardsIxOJdSa.rewardPerToken.call(uintp8zuLGV, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256UlZi6D = await WolfStakingRewardsIxOJdSa.getRewardForDuration.call(uintoMy4Cw9, {from: accounts[0]});
//		const uint256z4JAp2I = await WolfStakingRewardsIxOJdSa.rewardPerToken.call(uintGAwh48y, {from: accounts[5]});
//		const uint8aNSL1N0 = await WolfStakingRewardsIxOJdSa.decimals.call({from: accounts[0]});

		await expect(WolfStakingRewardsIxOJdSa.withdrawRemainingBalance.call(uintLWsx4P3, uintKC9rEpk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresstkyhZv2 = accounts[3]
		const addressfQpwwe3 = accounts[2]
		const addressr19lJ1 = accounts[0]
		const WolfStakingRewardsIxOJdSa = await WolfStakingRewards.new(addresstkyhZv2, addressfQpwwe3, addressr19lJ1, {from: accounts[0]});
		const uintl0JJuoz = BigInt("1435")
		const uintZQIYkua = BigInt("1069")
		const uintbgk1DMv = BigInt("192")
		const uinttPJ9Jx2 = BigInt("761")
		const uintFql0LEb = BigInt("1979")
		const uintnbhD02d = BigInt("1079")
//		const uint256R4bUmcf = await WolfStakingRewardsIxOJdSa.exit.call(uintl0JJuoz, {from: accounts[0]});
//		const uint256XLZ8O6i = await WolfStakingRewardsIxOJdSa.withdraw.call(uintbgk1DMv, uintZQIYkua, {from: accounts[4]});
//		const uint256fAXUxW = await WolfStakingRewardsIxOJdSa.rewardPerToken.call(uinttPJ9Jx2, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256UlZi6D = await WolfStakingRewardsIxOJdSa.getRewardForDuration.call(uintFql0LEb, {from: accounts[0]});
//		const uint256z4JAp2I = await WolfStakingRewardsIxOJdSa.rewardPerToken.call(uintnbhD02d, {from: accounts[5]});

		await expect(WolfStakingRewardsIxOJdSa.exit.call(uintl0JJuoz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringSVKrhk = "Oo3AKp4j9am4dC22qCCcjKk64WIK9E3maXkIKPqIXa842J3bsm6Cb17f7rIlE4lR"
		const stringHi77nHe = "QYuyPvGuUoi883SRXah8y6tuv3OXlVeNYnlMmStAInkDgduGcx614R3XQ"
		const uintbyQ0ECB = BigInt("145")
		const WolfStakingRewardsoo0j7S4 = await WolfStakingRewards.new(stringSVKrhk, stringHi77nHe, uintbyQ0ECB, {from: accounts[5]});
		const uintDF3HKt = BigInt("962")
		const uintP3yXYz6 = BigInt("322")
		const uintDpzVKa = BigInt("1737")
		const uint256KG8MBUR = await WolfStakingRewardsoo0j7S4.exit.call(uintDF3HKt, {from: accounts[4]});
		const uint256n1UYk5X = await WolfStakingRewardsoo0j7S4.lastTimeRewardApplicable.call(uintP3yXYz6, {from: accounts[0]});
		const uint256KjrY78G = await WolfStakingRewardsoo0j7S4.rewardPerToken.call(uintDpzVKa, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressE8gcERS = accounts[1]
		const addressAjfbOT4 = accounts[4]
		const addressTLaCX0l = accounts[4]
		const WolfStakingRewardscHGXEZ = await WolfStakingRewards.new(addressE8gcERS, addressAjfbOT4, addressTLaCX0l, {from: accounts[5]});
		const uintU3t6jt = BigInt("974")
		const uintBsWbjpd = BigInt("1541")
		const addressJHaiN0 = accounts[1]
		const uintdKmzWxB = BigInt("504")
//		const uint256arraylH0XKE8 = await WolfStakingRewardscHGXEZ.updateNotifyRewardAmount.call(uintU3t6jt, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256JQ8rXdy = await WolfStakingRewardscHGXEZ.balanceOfPerPool.call(addressJHaiN0, uintBsWbjpd, {from: accounts[0]});
//		const uint256Zt01YL3 = await WolfStakingRewardscHGXEZ.totalSupplyPerPool.call(uintdKmzWxB, {from: accounts[0]});

		await expect(WolfStakingRewardscHGXEZ.updateNotifyRewardAmount.call(uintU3t6jt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressEpofs6T = accounts[3]
		const addressxirkneq = accounts[2]
		const address4di0po = accounts[0]
		const WolfStakingRewardsIxOJdSa = await WolfStakingRewards.new(addressEpofs6T, addressxirkneq, address4di0po, {from: accounts[0]});
		const uintS7AQrt8 = BigInt("1421")
		const addresspaXclce = accounts[1]
		const uintvWmcLbc = BigInt("1138")
		const uintAccEdmN = BigInt("1069")
		const uintElYQb69 = BigInt("192")
		const uintrp5sGw = BigInt("770")
		const uinthzk9icO = BigInt("1982")
		const uinteYa3lu3 = BigInt("1079")
		const uint256Dka5HBo = await WolfStakingRewardsIxOJdSa.balanceOfPerPool.call(addresspaXclce, uintS7AQrt8, {from: accounts[4]});
//		const uint256TjDjjp = await WolfStakingRewardsIxOJdSa.exit.call(uintvWmcLbc, {from: accounts[1]});
//		const uint256XLZ8O6i = await WolfStakingRewardsIxOJdSa.withdraw.call(uintElYQb69, uintAccEdmN, {from: accounts[4]});
//		const uint256fAXUxW = await WolfStakingRewardsIxOJdSa.rewardPerToken.call(uintrp5sGw, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256UlZi6D = await WolfStakingRewardsIxOJdSa.getRewardForDuration.call(uinthzk9icO, {from: accounts[0]});
//		const uint256z4JAp2I = await WolfStakingRewardsIxOJdSa.rewardPerToken.call(uinteYa3lu3, {from: accounts[5]});

		assert.equal(uint256Dka5HBo, BigInt("0"))
		await expect(WolfStakingRewardsIxOJdSa.exit.call(uintvWmcLbc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressmQgHmVp = accounts[3]
		const addressemJi0cZ = accounts[2]
		const addresstAovfzQ = accounts[0]
		const WolfStakingRewardsIxOJdSa = await WolfStakingRewards.new(addressmQgHmVp, addressemJi0cZ, addresstAovfzQ, {from: accounts[0]});
		const uintMaiu2J8 = BigInt("1356")
		const uintqg3bj77 = BigInt("1418")
		const uintmHIBNU5 = BigInt("1421")
		const addressgQmm1jw = accounts[1]
		const uintZxZyOI7 = BigInt("1102")
		const uintVTymKoI = BigInt("1069")
		const uintdZOYQcY = BigInt("192")
		const uintILLY623 = BigInt("770")
		const uintBZrGcUx = BigInt("1982")
		const uintP4YPwZ9 = BigInt("1079")
//		const uint256yLw2Mau = await WolfStakingRewardsIxOJdSa.stake.call(uintqg3bj77, uintMaiu2J8, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Dka5HBo = await WolfStakingRewardsIxOJdSa.balanceOfPerPool.call(addressgQmm1jw, uintmHIBNU5, {from: accounts[4]});
//		const uint256TjDjjp = await WolfStakingRewardsIxOJdSa.exit.call(uintZxZyOI7, {from: accounts[1]});
//		const uint256XLZ8O6i = await WolfStakingRewardsIxOJdSa.withdraw.call(uintdZOYQcY, uintVTymKoI, {from: accounts[4]});
//		const uint256fAXUxW = await WolfStakingRewardsIxOJdSa.rewardPerToken.call(uintILLY623, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256UlZi6D = await WolfStakingRewardsIxOJdSa.getRewardForDuration.call(uintBZrGcUx, {from: accounts[0]});
//		const uint256z4JAp2I = await WolfStakingRewardsIxOJdSa.rewardPerToken.call(uintP4YPwZ9, {from: accounts[5]});

		await expect(WolfStakingRewardsIxOJdSa.stake.call(uintqg3bj77, uintMaiu2J8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressLaB6Fjc = accounts[3]
		const addressu6kCz5m = accounts[2]
		const addressCN3Tko = accounts[0]
		const WolfStakingRewardsIxOJdSa = await WolfStakingRewards.new(addressLaB6Fjc, addressu6kCz5m, addressCN3Tko, {from: accounts[0]});
		const uintC0yh6k8 = BigInt("1983")
		const uintAIXCjW = BigInt("1085")
		const uintl45Uxe = BigInt("192")
		const uintqo42MMo = BigInt("773")
		const uintwXupusp = BigInt("1979")
		const uintt5tve1u = await WolfStakingRewardsIxOJdSa.getReward.call(uintC0yh6k8, {from: accounts[4]});
//		const uint256XLZ8O6i = await WolfStakingRewardsIxOJdSa.withdraw.call(uintl45Uxe, uintAIXCjW, {from: accounts[4]});
//		const uint256fAXUxW = await WolfStakingRewardsIxOJdSa.rewardPerToken.call(uintqo42MMo, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256UlZi6D = await WolfStakingRewardsIxOJdSa.getRewardForDuration.call(uintwXupusp, {from: accounts[0]});

		await expect(WolfStakingRewardsIxOJdSa.withdraw.call(uintl45Uxe, uintAIXCjW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringvk5f52F = "BGXJkmPffKGN2bkcPYh6hMvwEVeHeOqbONpo15EAfZqIjiqcGNt1HRphNbrajL33Bvo11ECiKMy9bQM16PE7i8Reu95jfvN"
		const stringrOryQ7 = "G56QAns5Be"
		const uintBg6X6oa = BigInt("221")
		const WolfStakingRewardsc3sowin = await WolfStakingRewards.new(stringvk5f52F, stringrOryQ7, uintBg6X6oa, {from: "0x0000000000000000000000000000000000000001"});
		const uintDbBZrDl = BigInt("1186")
		const uintl3M9W9 = BigInt("1013")
		const uintZPXW2dp = BigInt("934")
		const uintiQwVMCx = BigInt("1831")
		const uintVv73Mst = BigInt("1235")
		const stringkdtvzY = await WolfStakingRewardsc3sowin.symbol.call({from: accounts[5]});
		const uint256xB1PMSU = await WolfStakingRewardsc3sowin.stake.call(uintl3M9W9, uintDbBZrDl, {from: accounts[1]});
		const uint256Dviwyzt = await WolfStakingRewardsc3sowin.rewardPerToken.call(uintZPXW2dp, {from: accounts[0]});
		const uint256KF2A0rw = await WolfStakingRewardsc3sowin.withdraw.call(uintVv73Mst, uintiQwVMCx, {from: accounts[4]});
		await WolfStakingRewardsc3sowin.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressJZLqdd4 = accounts[3]
		const addressOrcUoSM = accounts[2]
		const addressm6l4Nqn = accounts[0]
		const WolfStakingRewardsIxOJdSa = await WolfStakingRewards.new(addressJZLqdd4, addressOrcUoSM, addressm6l4Nqn, {from: accounts[0]});
		const uintTOAANdx = BigInt("1356")
		const uintZYI7AW0 = BigInt("1418")
		const uintGA3NVgt = BigInt("1421")
		const address93uRLR = accounts[4]
		const uintPQQ9CeF = BigInt("1102")
		const uintaoATtd = BigInt("1178")
		const uintvScoouJ = BigInt("1968")
		const uintd6WveBR = BigInt("1069")
		const uintvbify9k = BigInt("192")
		const uintGZpQaO = BigInt("770")
		const uintaym0m3w = BigInt("1982")
		const uintUz4qQ8y = BigInt("1079")
//		const uint256yLw2Mau = await WolfStakingRewardsIxOJdSa.stake.call(uintZYI7AW0, uintTOAANdx, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Dka5HBo = await WolfStakingRewardsIxOJdSa.balanceOfPerPool.call(address93uRLR, uintGA3NVgt, {from: accounts[4]});
//		const uint256TjDjjp = await WolfStakingRewardsIxOJdSa.exit.call(uintPQQ9CeF, {from: accounts[1]});
//		const uint256KEbRigI = await WolfStakingRewardsIxOJdSa.withdraw.call(uintvScoouJ, uintaoATtd, {from: accounts[4]});
//		const uint256XLZ8O6i = await WolfStakingRewardsIxOJdSa.withdraw.call(uintvbify9k, uintd6WveBR, {from: accounts[4]});
//		const uint256fAXUxW = await WolfStakingRewardsIxOJdSa.rewardPerToken.call(uintGZpQaO, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256UlZi6D = await WolfStakingRewardsIxOJdSa.getRewardForDuration.call(uintaym0m3w, {from: accounts[0]});
//		const uint256z4JAp2I = await WolfStakingRewardsIxOJdSa.rewardPerToken.call(uintUz4qQ8y, {from: accounts[5]});

		await expect(WolfStakingRewardsIxOJdSa.stake.call(uintZYI7AW0, uintTOAANdx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringMsAC2Nj = "II3XWyBCg1BYFEQYxq7cxq4oP824Hrnlk11oCDSE7yPjdCGbMdhdGbr1vVPy818HDfSx"
		const stringeO5I0yP = "N59oAnqasDzhwVioEe8hKv55wL0QyHlA6CSjF2CxLbb6n6dJDPLEVtDWFzOzQTwTZHGo"
		const uintmrQfF70 = BigInt("165")
		const WolfStakingRewardsNTVaXlJ = await WolfStakingRewards.new(stringMsAC2Nj, stringeO5I0yP, uintmrQfF70, {from: accounts[5]});
		const uintJmKUYC = BigInt("1658")
		const uintK6Hjge6 = BigInt("1515")
		const uintluzEOy = BigInt("1396")
		const uintHfau67D = BigInt("921")
		const uint8VDi1Bgd = await WolfStakingRewardsNTVaXlJ.decimals.call({from: accounts[0]});
		const uint25632gtqc = await WolfStakingRewardsNTVaXlJ.stake.call(uintK6Hjge6, uintJmKUYC, {from: accounts[2]});
		const uint256mne5yXN = await WolfStakingRewardsNTVaXlJ.stake.call(uintHfau67D, uintluzEOy, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringBSICdKD = "kJjfRUfCtiDaidacTYkM0wvoZSWHBnYNtve2YxT85qXF5IMnvqGBiUzoSyeogSsRTWxYCw1fV56aJWiWk4XpCLDxZ"
		const stringY4yfYh0 = "xS1i5ssd1JCSa3i6q9ksohPTz2fe2h4WsxrXKsvs19TYzbwvEG29ufdYjVax3n4s9g7"
		const uintF90Aqf4 = BigInt("103")
		const WolfStakingRewardsQogLa6B = await WolfStakingRewards.new(stringBSICdKD, stringY4yfYh0, uintF90Aqf4, {from: accounts[3]});
		const uintAMnsZ00 = BigInt("305")
		const uintkLDXgiq = BigInt("519")
		const stringXEtPPap = await WolfStakingRewardsQogLa6B.name.call({from: accounts[4]});
		const uint256DnQ1Kev = await WolfStakingRewardsQogLa6B.lastTimeRewardApplicable.call(uintAMnsZ00, {from: accounts[2]});
		const uint256rclSi1p = await WolfStakingRewardsQogLa6B.totalSupplyPerPool.call(uintkLDXgiq, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringu0PNooV = "fuH5zD7NCbxDIWz1g5yBK0zaa"
		const stringsXarySJ = "PItiGge2Xx7GVqxbVXM8XEqMcqd"
		const uintG4tSL3D = BigInt("128")
		const WolfStakingRewardsRcWJMv = await WolfStakingRewards.new(stringu0PNooV, stringsXarySJ, uintG4tSL3D, {from: accounts[2]});
		const uintb6w3age = BigInt("1647")
		const addressMDZuGER = accounts[0]
		const uintNnedOuE = BigInt("1546")
		const uintihAENXf = BigInt("1148")
		const addressKw6oju2 = accounts[3]
		const addressEWIdzVi = await WolfStakingRewardsRcWJMv.updateReward.call(addressMDZuGER, uintb6w3age, {from: accounts[0]});
		const uint256arrayLI9xaIs = await WolfStakingRewardsRcWJMv.updateNotifyRewardAmount.call(uintNnedOuE, {from: accounts[3]});
		const uint256E32Tco9 = await WolfStakingRewardsRcWJMv.balanceOfPerPool.call(addressKw6oju2, uintihAENXf, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringokEwUKM = "UIyv7X66BPWNvF1aV9IWlVHkAnppnT7fteXOkdxLErJtMIWYAGTv"
		const stringDlSL3AD = "TRcT"
		const uintq6ytLqg = BigInt("186")
		const WolfStakingRewardsJqBRKg = await WolfStakingRewards.new(stringokEwUKM, stringDlSL3AD, uintq6ytLqg, {from: accounts[4]});
		const uintshEnk8B = BigInt("485")
		const uintC3l5g5N = BigInt("485")
		const uintaDYEZXd = BigInt("1495")
		const uintgfApY7x = BigInt("1673")
		const addressppAFC5 = accounts[2]
		const uintZE8XGZR = BigInt("490")
		const addressPdkIZK = accounts[0]
		const uintAPcYk4T = await WolfStakingRewardsJqBRKg.getReward.call(uintshEnk8B, {from: accounts[1]});
		const uint256aWJCfx5 = await WolfStakingRewardsJqBRKg.getRewardForDuration.call(uintC3l5g5N, {from: accounts[1]});
		const uintRlH0CBI = await WolfStakingRewardsJqBRKg.getReward.call(uintaDYEZXd, {from: accounts[2]});
		const addressSKxKYeR = await WolfStakingRewardsJqBRKg.updateReward.call(addressppAFC5, uintgfApY7x, {from: "0x0000000000000000000000000000000000000001"});
		const uint256n9voHtx = await WolfStakingRewardsJqBRKg.earned.call(addressPdkIZK, uintZE8XGZR, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSc4mzfR = "Wr4Ay6PdvC4do2oM6We4q4un4yUwSYpIUzps1Ma9pLnkI57Jg4G1OFR8BcUXrMUieV"
		const stringp7mHLGT = "VeGcjT1fk2P4PH6u76UT5"
		const uintRbORDtE = BigInt("155")
		const WolfStakingRewardsQU4B0Wf = await WolfStakingRewards.new(stringSc4mzfR, stringp7mHLGT, uintRbORDtE, {from: accounts[2]});
		const uintpqkMQmR = BigInt("343")
		const uintYvhbEU = BigInt("650")
		const uintrQGlOqN = BigInt("1988")
		const addressjsHCHdA = accounts[5]
		const uintBPEDT1D = BigInt("238")
		await WolfStakingRewardsQU4B0Wf.nonReentrant.call({from: accounts[3]});
		const uint256JihNKjs = await WolfStakingRewardsQU4B0Wf.exit.call(uintpqkMQmR, {from: accounts[1]});
		const uint256arrayBh7gPFe = await WolfStakingRewardsQU4B0Wf.updateNotifyRewardAmount.call(uintYvhbEU, {from: accounts[3]});
		const addresszweqmiM = await WolfStakingRewardsQU4B0Wf.updateReward.call(addressjsHCHdA, uintrQGlOqN, {from: accounts[1]});
		const uint256za3oYV = await WolfStakingRewardsQU4B0Wf.getRewardForDuration.call(uintBPEDT1D, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringaJewVe9 = "QI8RlfBndUXLfwnhNk5aPNKlt8LHghumH9yqeK75UEMeD9MJB2SkE1dvN3HopxLxQKFvKHjfNS4bxbsK6c1Cdv65lmnjF6gf"
		const stringA21T1J5 = "RVUIxG64pKlR59Pcy"
		const uintPCcoBE = BigInt("51")
		const WolfStakingRewardsjbC98px = await WolfStakingRewards.new(stringaJewVe9, stringA21T1J5, uintPCcoBE, {from: accounts[2]});
		const uintnKgF5RZ = BigInt("824")
		const uintMrxKGwJ = BigInt("557")
		const uintAEv7YA = BigInt("668")
		const addressTsGsFk9 = accounts[5]
		const uintFa8OXtI = BigInt("1476")
		const uint256arrayfgD6fqC = await WolfStakingRewardsjbC98px.updateNotifyRewardAmount.call(uintnKgF5RZ, {from: accounts[5]});
		const uint256U606ngY = await WolfStakingRewardsjbC98px.rewardPerToken.call(uintMrxKGwJ, {from: accounts[5]});
		const addresseqRbxqf = await WolfStakingRewardsjbC98px.updateReward.call(addressTsGsFk9, uintAEv7YA, {from: accounts[2]});
		const uint256Uw99jOl = await WolfStakingRewardsjbC98px.rewardPerToken.call(uintFa8OXtI, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfoPpt06 = "K2874OWhCFLwQqnMdsw4HZoV9IELgrDmN1dLCHYbrsFh6j"
		const stringHBhnrGy = "sDWepYHUZum5WbPQdPRQK72rUfTQBm9DHqsI76GM3mhdRyc9UOXyoC4CKuenp9VsjarTc1jB8DyzsIPqu2MVzVm"
		const uintnnY8zn3 = BigInt("0")
		const WolfStakingRewardsMZWDYB3 = await WolfStakingRewards.new(stringfoPpt06, stringHBhnrGy, uintnnY8zn3, {from: accounts[5]});
		const uintkHrDPu = BigInt("1058")
		const uintitGHlxP = BigInt("166")
		const uintYdMVWKf = BigInt("8")
		const uintS1dl0kK = BigInt("553")
		const addressYbR77CI = accounts[2]
		const uint256eT45oot = await WolfStakingRewardsMZWDYB3.getRewardForDuration.call(uintkHrDPu, {from: accounts[1]});
		const uint256pQFbvkF = await WolfStakingRewardsMZWDYB3.stake.call(uintYdMVWKf, uintitGHlxP, {from: accounts[4]});
		const uint256Oo7IvW = await WolfStakingRewardsMZWDYB3.earned.call(addressYbR77CI, uintS1dl0kK, {from: accounts[3]});
		await WolfStakingRewardsMZWDYB3.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtjhCwZn = "sWn4B6F9fOTBtRa48CdTxXcgn6iQii4tyzMO9VSHRqlzAJmJc2nkD37oN5IfLsL4Swv845PhQq1jh8S"
		const stringlkzsp50 = "DCwM"
		const uintf4YyNki = BigInt("190")
		const WolfStakingRewardseMnhlXH = await WolfStakingRewards.new(stringtjhCwZn, stringlkzsp50, uintf4YyNki, {from: accounts[4]});
		const uintH1XEAub = BigInt("716")
		const uintIPW86fa = BigInt("565")
		const uintRh2tGdA = BigInt("1468")
		const uint8ALPprD2 = await WolfStakingRewardseMnhlXH.decimals.call({from: accounts[0]});
		const uint256HHGE3he = await WolfStakingRewardseMnhlXH.totalSupplyPerPool.call(uintH1XEAub, {from: accounts[3]});
		const uint256SG5ktPG = await WolfStakingRewardseMnhlXH.withdraw.call(uintRh2tGdA, uintIPW86fa, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTcWnHy0 = "38WRgq1Q7XJoGBShGFoRJQlx"
		const stringIXu12uq = "4fWlj767qCkaOdZ1pjLEML9vfkGQDWKPH"
		const uintrsSPWOK = BigInt("191")
		const WolfStakingRewardsPHrTmLJ = await WolfStakingRewards.new(stringTcWnHy0, stringIXu12uq, uintrsSPWOK, {from: accounts[2]});
		const uintSefIOl = BigInt("880")
		const uintsw9kIet = BigInt("1941")
		const uintgrLipC7 = BigInt("1226")
		await WolfStakingRewardsPHrTmLJ.onlyRewardsDistribution.call({from: accounts[1]});
		const stringCrNvBr1 = await WolfStakingRewardsPHrTmLJ.symbol.call({from: accounts[4]});
		const uint256qFsJA38 = await WolfStakingRewardsPHrTmLJ.withdraw.call(uintsw9kIet, uintSefIOl, {from: accounts[0]});
		const uint256arraycwZD1q0 = await WolfStakingRewardsPHrTmLJ.updateNotifyRewardAmount.call(uintgrLipC7, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringaB3ovHN = "Y9iVs97Jlu2iaPoM8fFGJAoGC5pqzPG2TJUmed1KHCEEno7NKerIF5z"
		const stringTO4f3qm = "uUx6jXVnJXkHO9SgPGP4Fj3U7cuJuQEw2683ESPFzUmoAtoGLFdBPH7b25WtaSywz5oRNbRHfeucKvfvG"
		const uintyfPfYIE = BigInt("24")
		const WolfStakingRewardsumvHFwM = await WolfStakingRewards.new(stringaB3ovHN, stringTO4f3qm, uintyfPfYIE, {from: accounts[2]});
		const uintEpiDPI = BigInt("1307")
		const uinty2rFfmT = BigInt("444")
		const uintMKmwVk = BigInt("706")
		const uintPU9XZE = BigInt("1905")
		const uintGG0X4mb = BigInt("775")
		const uintowvVvmC = BigInt("927")
		const uinthcYXNgj = await WolfStakingRewardsumvHFwM.getReward.call(uintEpiDPI, {from: accounts[1]});
		const uint256arrayeqIoeDB = await WolfStakingRewardsumvHFwM.updateNotifyRewardAmount.call(uinty2rFfmT, {from: accounts[1]});
		const uint256JWPJS6w = await WolfStakingRewardsumvHFwM.exit.call(uintMKmwVk, {from: accounts[2]});
		const uint256hEXc4cJ = await WolfStakingRewardsumvHFwM.withdrawRemainingBalance.call(uintGG0X4mb, uintPU9XZE, {from: accounts[1]});
		const uintD82AfRC = await WolfStakingRewardsumvHFwM.getReward.call(uintowvVvmC, {from: accounts[4]});
		const stringyXjjac9 = await WolfStakingRewardsumvHFwM.name.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFevhg3 = "FFuujNwOQSCUVogfRhW5V2Zg9UvOmKKDEiRYGtwOMQT4TFxelIfSMT37ObDQUE5IpzbIeqsPows5VCHfWFZCY4"
		const stringblbbyx5 = "OhNILpm4vCOMP0TL3hBn4T8yAqEtjSdSotiKzfcnMLSxQ413uuKD54dm0KRvVdWfOsMmYSIeYormHX"
		const uintfjp0VtJ = BigInt("210")
		const WolfStakingRewardsCgjNTE = await WolfStakingRewards.new(stringFevhg3, stringblbbyx5, uintfjp0VtJ, {from: accounts[1]});
		const uintS79iE4F = BigInt("1320")
		const addressP5P9gh1 = accounts[3]
		const uintZPNiW7a = BigInt("1298")
		const uintSn5QMbW = BigInt("901")
		const uintIYA1l45 = BigInt("1492")
		const addresse51aaIm = await WolfStakingRewardsCgjNTE.updateReward.call(addressP5P9gh1, uintS79iE4F, {from: accounts[0]});
		const uint256qMWoQ8w = await WolfStakingRewardsCgjNTE.withdrawRemainingBalance.call(uintSn5QMbW, uintZPNiW7a, {from: accounts[2]});
		const stringSySvHSy = await WolfStakingRewardsCgjNTE.symbol.call({from: accounts[0]});
		const uint8NFGsroC = await WolfStakingRewardsCgjNTE.decimals.call({from: accounts[4]});
		const uint256gUsQMCH = await WolfStakingRewardsCgjNTE.lastTimeRewardApplicable.call(uintIYA1l45, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringk7o77Ft = "XBrcqVdupPUUbt9LeYkOZiyM8yw63hoZDxNh2mpi2jQ2bjdh7m76dj0"
		const stringmyX4Hci = "3HWHjqkusIn"
		const uint02hek7 = BigInt("207")
		const WolfStakingRewardsBXubxkq = await WolfStakingRewards.new(stringk7o77Ft, stringmyX4Hci, uint02hek7, {from: accounts[2]});
		const uintAOmoSFs = BigInt("1234")
		const uintI1ftRXL = BigInt("928")
		const uintZOHIT0R = BigInt("990")
		const uintuCgRzCr = BigInt("1987")
		const uint256VVq1vU = await WolfStakingRewardsBXubxkq.withdrawRemainingBalance.call(uintI1ftRXL, uintAOmoSFs, {from: accounts[1]});
		const uint256LZrr8uh = await WolfStakingRewardsBXubxkq.withdrawRemainingBalance.call(uintuCgRzCr, uintZOHIT0R, {from: accounts[3]});
		const stringY8AzSkh = await WolfStakingRewardsBXubxkq.symbol.call({from: accounts[5]});
		const stringyDumjCD = await WolfStakingRewardsBXubxkq.name.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMoIQ7t = "6uKy5lmjk"
		const stringMdeRTC7 = "WHh9JY5qqKiuqqkqzID5PWnpfI9BhLneXg3cB"
		const uintnLb8sUt = BigInt("184")
		const WolfStakingRewardsUazVLO1 = await WolfStakingRewards.new(stringMoIQ7t, stringMdeRTC7, uintnLb8sUt, {from: "0x0000000000000000000000000000000000000001"});
		const uintfxl3f6T = BigInt("1097")
		const uintqGXYbNL = BigInt("1761")
		const uintQucXEM6 = BigInt("1437")
		await WolfStakingRewardsUazVLO1.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256OedvLvH = await WolfStakingRewardsUazVLO1.totalSupplyPerPool.call(uintfxl3f6T, {from: accounts[0]});
		const uint256arrayuquGIEg = await WolfStakingRewardsUazVLO1.updateNotifyRewardAmount.call(uintqGXYbNL, {from: accounts[1]});
		const uint256VRpeCMZ = await WolfStakingRewardsUazVLO1.getRewardForDuration.call(uintQucXEM6, {from: accounts[4]});
		await WolfStakingRewardsUazVLO1.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcAusicy = "N7CGxGKFV8RTvd1V"
		const stringlVtCCHc = "4LkIQQHXKEwt"
		const uintTpWwhXr = BigInt("213")
		const WolfStakingRewardsoOT1R6i = await WolfStakingRewards.new(stringcAusicy, stringlVtCCHc, uintTpWwhXr, {from: accounts[2]});
		const uintlsA0aRd = BigInt("965")
		const addressAhUcj6Y = "0x0000000000000000000000000000000000000001"
		const uintRr26r6g = BigInt("1253")
		const uintOXP5LWO = BigInt("1026")
		const address8B2TFA = accounts[2]
		const addressBsOKZli = await WolfStakingRewardsoOT1R6i.updateReward.call(addressAhUcj6Y, uintlsA0aRd, {from: accounts[4]});
		const stringrGqFJj = await WolfStakingRewardsoOT1R6i.symbol.call({from: accounts[1]});
		const uint256XF98x9y = await WolfStakingRewardsoOT1R6i.getRewardForDuration.call(uintRr26r6g, {from: accounts[0]});
		const address8jAWAx = await WolfStakingRewardsoOT1R6i.updateReward.call(address8B2TFA, uintOXP5LWO, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringk8SYTQg = "DwKkRqxgCeiJ9yxtwkuoCQ7EeeqTpYd507u"
		const stringVVkx9gU = "ThoHHJ87yenfDdbRHFJO9cZfsAXAWMUWdytlSYA9TNOOOPkBHzbkBnm"
		const uintmHHgVCV = BigInt("232")
		const WolfStakingRewardshiyiF74 = await WolfStakingRewards.new(stringk8SYTQg, stringVVkx9gU, uintmHHgVCV, {from: accounts[2]});
		const uintjXsFKAi = BigInt("392")
		const addressUiXwecR = "0x0000000000000000000000000000000000000001"
		const uint256vVtYuwt = await WolfStakingRewardshiyiF74.balanceOfPerPool.call(addressUiXwecR, uintjXsFKAi, {from: accounts[0]});
		await WolfStakingRewardshiyiF74.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const stringSLbBfd3 = await WolfStakingRewardshiyiF74.symbol.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringyicmwpZ = "WYr4ok1HIdPkdtf7uluIlrcpOQHxY2kuDeJnFkNnrpjHHv5TTNvHidLVOkjeaMgIj5wmGzu46mHCBn"
		const stringrww83SK = "Ou3uFDPhpAP1DTYGidqSIDsFaC9q2EnTqY9VwCQ7i8RrhjS"
		const uintZ43nGJg = BigInt("201")
		const WolfStakingRewardsgOOnowX = await WolfStakingRewards.new(stringyicmwpZ, stringrww83SK, uintZ43nGJg, {from: accounts[5]});
		const uintyMaeRWe = BigInt("803")
		const uintZCrfBME = BigInt("994")
		const addresssqB6w4t = accounts[2]
		const uint256X8mxQR = await WolfStakingRewardsgOOnowX.totalSupplyPerPool.call(uintyMaeRWe, {from: accounts[4]});
		const uint8AaKUe8u = await WolfStakingRewardsgOOnowX.decimals.call({from: accounts[3]});
		await WolfStakingRewardsgOOnowX.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256DW4ORn = await WolfStakingRewardsgOOnowX.balanceOfPerPool.call(addresssqB6w4t, uintZCrfBME, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeOXMsxV = "LwsZTDMIdk2jcxWetwXaSs7O0dJdNfizgblQC"
		const stringLIObM0v = "lH40e0hGaeAoQ1nB5fiMqWTL0BSkmljfCV8OigZgN"
		const uintzlEA9YL = BigInt("86")
		const WolfStakingRewardsHpWBYBL = await WolfStakingRewards.new(stringeOXMsxV, stringLIObM0v, uintzlEA9YL, {from: accounts[2]});
		const uintlPimgqu = BigInt("549")
		const addressttTrse = accounts[1]
		const uint256JNTFeB = await WolfStakingRewardsHpWBYBL.earned.call(addressttTrse, uintlPimgqu, {from: accounts[1]});
		const stringYXv6ogx = await WolfStakingRewardsHpWBYBL.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringy3fTDHc = "lPQGGEyYufOlaRQB3ehtEUAIdbt8SOskk"
		const stringg6bcri = "7OFVqhCAwtvFeRr5TVW6x5M1YFmYV6xruHOlxz7DyJ5FyM"
		const uintlGjCciL = BigInt("156")
		const WolfStakingRewardsizx7RrD = await WolfStakingRewards.new(stringy3fTDHc, stringg6bcri, uintlGjCciL, {from: accounts[3]});
		const uintHFXr05D = BigInt("1888")
		const uintMiEJ2mS = BigInt("783")
		const uintRbP7vs7 = BigInt("886")
		const uintImRh2yk = BigInt("1130")
		const uinthQUBSog = BigInt("603")
		const uintrL3stgI = BigInt("1117")
		const uintFpeRyjE = BigInt("609")
		const uint256VvGMC2T = await WolfStakingRewardsizx7RrD.getRewardForDuration.call(uintHFXr05D, {from: accounts[5]});
		const uint256cLtQJZf = await WolfStakingRewardsizx7RrD.lastTimeRewardApplicable.call(uintMiEJ2mS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bOcDEAD = await WolfStakingRewardsizx7RrD.withdraw.call(uintImRh2yk, uintRbP7vs7, {from: accounts[5]});
		const uint256XJi0fC = await WolfStakingRewardsizx7RrD.exit.call(uinthQUBSog, {from: accounts[3]});
		const uint256arrayUIbP14H = await WolfStakingRewardsizx7RrD.updateNotifyRewardAmount.call(uintrL3stgI, {from: accounts[0]});
		const uint2563XsvgO = await WolfStakingRewardsizx7RrD.totalSupplyPerPool.call(uintFpeRyjE, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcKqVKF9 = "490PrL5Bj1i8TjC5LjsqdAX432"
		const stringQ2AqvEI = "o1KbgEv7CKuOey1JeS1b3ZK55rtPqvmPwjmHshyGGS0VeqPU"
		const uintqyT00IH = BigInt("204")
		const WolfStakingRewardsWpGBV6S = await WolfStakingRewards.new(stringcKqVKF9, stringQ2AqvEI, uintqyT00IH, {from: accounts[0]});
		const uint0epRZu = BigInt("2026")
		const addressRutNqg7 = accounts[5]
		const uintrW6Jwlp = BigInt("1091")
		const uint8dGfRtJW = await WolfStakingRewardsWpGBV6S.decimals.call({from: accounts[1]});
		const uint256adNjyNh = await WolfStakingRewardsWpGBV6S.earned.call(addressRutNqg7, uint0epRZu, {from: accounts[2]});
		const uint256XV5xUli = await WolfStakingRewardsWpGBV6S.totalSupplyPerPool.call(uintrW6Jwlp, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringetRsyd = "NgTjQIqOdk6KzIzGSLXYCCoq914Or7qMj8Br2u3Nd4y2xF1HZnAfi9JBd655aJuIJLV8GgUFt5SHxG"
		const stringNqzYP9h = "QLV6L"
		const uintUbpNg1 = BigInt("103")
		const WolfStakingRewardsyZ5EZ2r = await WolfStakingRewards.new(stringetRsyd, stringNqzYP9h, uintUbpNg1, {from: accounts[3]});
		const uinthn3qsU8 = BigInt("1649")
		const uint256JneQEXn = await WolfStakingRewardsyZ5EZ2r.totalSupplyPerPool.call(uinthn3qsU8, {from: accounts[2]});
		const uint8GWNr0xz = await WolfStakingRewardsyZ5EZ2r.decimals.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMbMJyu9 = "MYiwQY2dqMgUPOGtVDiFBqKfvhEodyXd7qsusv9XsEhJv2ocBajg7hbgjpvnzCMt4Sw8BqJsabbCOftYzYwfp8tutAhInYC"
		const stringhNqVic = "cjNgQtOVKnJUIVBA4cL2CFrEIdCgFpG"
		const uintg7QWoaR = BigInt("193")
		const WolfStakingRewardsJnsRih = await WolfStakingRewards.new(stringMbMJyu9, stringhNqVic, uintg7QWoaR, {from: accounts[2]});
		const uintSkfWNS0 = BigInt("635")
		const addressP9Sor5w = accounts[2]
		const uintSb2DWL = BigInt("774")
		await WolfStakingRewardsJnsRih.onlyRewardsDistribution.call({from: accounts[3]});
		const addressPDHu5R6 = await WolfStakingRewardsJnsRih.updateReward.call(addressP9Sor5w, uintSkfWNS0, {from: accounts[5]});
		const stringBbWite2 = await WolfStakingRewardsJnsRih.symbol.call({from: accounts[1]});
		const uint256Niz6PIT = await WolfStakingRewardsJnsRih.exit.call(uintSb2DWL, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringOV1abTQ = "maAA0eNil9tqXTSzp3wErCDvnouqbrKQEtn"
		const stringKvqdqws = "Nqv93USqImD6y9KYbD8m3hdWmT1dNGbPo8Q1ny3TsITtbfN31"
		const uintzm0oYWq = BigInt("158")
		const WolfStakingRewardskOsbU2p = await WolfStakingRewards.new(stringOV1abTQ, stringKvqdqws, uintzm0oYWq, {from: accounts[2]});
		const uintAEeSzMs = BigInt("335")
		const uintKkMvPgo = BigInt("36")
		const uintUEspB5S = BigInt("1604")
		const uintIcGOpW5 = BigInt("961")
		const uintUL4fgqS = BigInt("1756")
		const uintd18xBKK = BigInt("880")
		await WolfStakingRewardskOsbU2p.onlyOwner.call({from: accounts[4]});
		const uintMwY3iGd = await WolfStakingRewardskOsbU2p.getReward.call(uintAEeSzMs, {from: accounts[4]});
		const uint256BM7bRBN = await WolfStakingRewardskOsbU2p.withdraw.call(uintUEspB5S, uintKkMvPgo, {from: accounts[2]});
		const uint256MIrU1dW = await WolfStakingRewardskOsbU2p.rewardPerToken.call(uintIcGOpW5, {from: accounts[0]});
		const uint256uFG2jD = await WolfStakingRewardskOsbU2p.stake.call(uintd18xBKK, uintUL4fgqS, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringrMNVOWK = "slNzDQVjNvbWUVt1HrhdJaPbcOW1MDKA3uopx8ZiexiHKI2MnAY9ewochOxOKkMWwQdg"
		const stringVnYEJBy = "Lgt2rB6FnwMaxBTgYRSKlFGixU"
		const uintYC0ijnB = BigInt("182")
		const WolfStakingRewardsg8oOxs6 = await WolfStakingRewards.new(stringrMNVOWK, stringVnYEJBy, uintYC0ijnB, {from: accounts[3]});
		const uintS37LOK = BigInt("1897")
		const uintqaHMl6F = BigInt("128")
		const uintd2plqeq = BigInt("1933")
		const uint256YIT3aHc = await WolfStakingRewardsg8oOxs6.exit.call(uintS37LOK, {from: accounts[2]});
		const uint256ZO9KhRp = await WolfStakingRewardsg8oOxs6.withdrawRemainingBalance.call(uintd2plqeq, uintqaHMl6F, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringW0uN8K = "IXckbGubQcPYVtj7d8jD8skVW5EIFge6MxtGFvV51TbGHRF4HvDJNIgBqJNmxRg2z9yvz4psrB7GQ8dgm"
		const stringbp1VDQ = "bk68lv8GR2XEvHafvUrteGqvAJD84v2r41UXSlyqaDS1BlkZLuAyozjG7RFQ81fUPYDz"
		const uintY7mh5P = BigInt("149")
		const WolfStakingRewards2VgCaz = await WolfStakingRewards.new(stringW0uN8K, stringbp1VDQ, uintY7mh5P, {from: accounts[0]});
		const uintKl7NCv3 = BigInt("187")
		const addressPfptPqi = accounts[3]
		const uintlqAf4yq = BigInt("1925")
		const uintrtQgVDw = BigInt("1731")
		const uintZdIhuKN = BigInt("1016")
		const uintqj3DJV = BigInt("698")
		const uint256Qngm84X = await WolfStakingRewards2VgCaz.balanceOfPerPool.call(addressPfptPqi, uintKl7NCv3, {from: accounts[0]});
		const uint8mrjLSE = await WolfStakingRewards2VgCaz.decimals.call({from: accounts[3]});
		const uint256JBnOdvf = await WolfStakingRewards2VgCaz.stake.call(uintrtQgVDw, uintlqAf4yq, {from: accounts[2]});
		const uint256BDem4vD = await WolfStakingRewards2VgCaz.stake.call(uintqj3DJV, uintZdIhuKN, {from: accounts[5]});
		const uint8RtuW3Z = await WolfStakingRewards2VgCaz.decimals.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringkyw9YJ5 = "qoaCPioI6RmuBHQ"
		const stringSb0myM7 = "CU0Y5NO3hM8yD1RQ3oXFJ9RQLigyJBn8qgx"
		const uintHqVQ6dB = BigInt("153")
		const WolfStakingRewardsA4HUrfh = await WolfStakingRewards.new(stringkyw9YJ5, stringSb0myM7, uintHqVQ6dB, {from: accounts[2]});
		const uintLAxyHfl = BigInt("347")
		const addresslC6nUC = accounts[0]
		const uintTijTGbb = BigInt("1910")
		const uintKo7YC3s = BigInt("1204")
		const uintNBmpKVS = BigInt("1113")
		const uintm5782e7 = BigInt("672")
		await WolfStakingRewardsA4HUrfh.nonReentrant.call({from: accounts[3]});
		const addresssJ7wEMJ = await WolfStakingRewardsA4HUrfh.updateReward.call(addresslC6nUC, uintLAxyHfl, {from: accounts[2]});
		const uint8FgDDuc = await WolfStakingRewardsA4HUrfh.decimals.call({from: accounts[2]});
		const uint256rVg2bL = await WolfStakingRewardsA4HUrfh.withdrawRemainingBalance.call(uintKo7YC3s, uintTijTGbb, {from: accounts[2]});
		const uint256PpuqXM = await WolfStakingRewardsA4HUrfh.withdrawRemainingBalance.call(uintm5782e7, uintNBmpKVS, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwlWaW4l = "Y10lIRHpRNwjErUVhV8vqCJMCF2bHpPF9cuc"
		const stringE2kO2kY = "RMkD1HE0xo33t829XXfemXzo"
		const uintFLpniBN = BigInt("13")
		const WolfStakingRewardsXpp0YBQ = await WolfStakingRewards.new(stringwlWaW4l, stringE2kO2kY, uintFLpniBN, {from: accounts[3]});
		const uintGuFbDOC = BigInt("842")
		const addressNfq2N7s = accounts[2]
		const uintjWZGxlh = BigInt("439")
		const uintEOoWgyz = BigInt("690")
		const uintRMcpSBD = BigInt("1226")
		const uintyM6oTYl = BigInt("693")
		const uintXeKobI = BigInt("1219")
		const uintf5VU0Ce = BigInt("653")
		const uint8g53LMN3 = await WolfStakingRewardsXpp0YBQ.decimals.call({from: accounts[1]});
		const addressL69gsGK = await WolfStakingRewardsXpp0YBQ.updateReward.call(addressNfq2N7s, uintGuFbDOC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256YGdCdw7 = await WolfStakingRewardsXpp0YBQ.withdrawRemainingBalance.call(uintEOoWgyz, uintjWZGxlh, {from: accounts[5]});
		const uint256zeFRUrM = await WolfStakingRewardsXpp0YBQ.withdraw.call(uintyM6oTYl, uintRMcpSBD, {from: accounts[1]});
		const uint256Bk5VAdE = await WolfStakingRewardsXpp0YBQ.stake.call(uintf5VU0Ce, uintXeKobI, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressV4CLF3D = accounts[3]
		const addressG6yrw9J = accounts[2]
		const addresshf3uIe5 = accounts[0]
		const WolfStakingRewardsIxOJdSa = await WolfStakingRewards.new(addressV4CLF3D, addressG6yrw9J, addresshf3uIe5, {from: accounts[0]});
		const uintMBsl7H9 = BigInt("1524")
		const uintb5McZT = BigInt("0")
		const uintW4PXhjT = BigInt("1413")
//		const uint256AL9hUe1 = await WolfStakingRewardsIxOJdSa.withdraw.call(uintb5McZT, uintMBsl7H9, {from: accounts[5]});
//		const uint256R4bUmcf = await WolfStakingRewardsIxOJdSa.exit.call(uintW4PXhjT, {from: accounts[0]});
//		await WolfStakingRewardsIxOJdSa.onlyOwner.call({from: accounts[0]});
//		const stringqJ4H9MZ = await WolfStakingRewardsIxOJdSa.name.call({from: accounts[1]});

		await expect(WolfStakingRewardsIxOJdSa.withdraw.call(uintb5McZT, uintMBsl7H9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressJOfSLNa = accounts[3]
		const addressBDCcCO6 = accounts[2]
		const addresseGk00F = accounts[0]
		const WolfStakingRewardsIxOJdSa = await WolfStakingRewards.new(addressJOfSLNa, addressBDCcCO6, addresseGk00F, {from: accounts[0]});
		const uintK7A6hlR = BigInt("9")
		const uintE9tGLoA = BigInt("355")
		const uintUSgPQq = BigInt("479")
		const uintGa9etIz = BigInt("1254")
		const uintZj11xPS = BigInt("259")
//		const uint256knLx3p1 = await WolfStakingRewardsIxOJdSa.exit.call(uintK7A6hlR, {from: accounts[4]});
//		const uint256b8GwUv3 = await WolfStakingRewardsIxOJdSa.stake.call(uintUSgPQq, uintE9tGLoA, {from: accounts[4]});
//		const uint256Qyfv1iN = await WolfStakingRewardsIxOJdSa.stake.call(uintZj11xPS, uintGa9etIz, {from: accounts[2]});

		await expect(WolfStakingRewardsIxOJdSa.exit.call(uintK7A6hlR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringPoI1AU9 = "5nJzLQO4NdwLj452H52h9BcndVgW9yP3AmOWKzyd8oQD8UBHgL6fKLrlxoUFW9pNUjHDLnbR6Eh2nkVA2LGJrf7A"
		const stringxmPVJJ = "RMP6TKQbNnNBXQOb3I"
		const uinty3RTrKn = BigInt("127")
		const WolfStakingRewardsMyzsK6C = await WolfStakingRewards.new(stringPoI1AU9, stringxmPVJJ, uinty3RTrKn, {from: accounts[3]});
		const uintkm1MV3o = BigInt("1583")
		const uintN8aXIlA = BigInt("897")
		const uint8oe9fx9e = await WolfStakingRewardsMyzsK6C.decimals.call({from: accounts[4]});
		const uint256u3sGujV = await WolfStakingRewardsMyzsK6C.withdrawRemainingBalance.call(uintN8aXIlA, uintkm1MV3o, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressaz9dngV = accounts[3]
		const addressxrB2Mu = accounts[2]
		const addressamYHWno = accounts[0]
		const WolfStakingRewardsIxOJdSa = await WolfStakingRewards.new(addressaz9dngV, addressxrB2Mu, addressamYHWno, {from: accounts[0]});
		const uintmFa5b61 = BigInt("558")
		const addressHfcJYHw = accounts[3]
		const uintRScYDaR = BigInt("1804")
		const uintJf5UnZL = BigInt("158")
		const uintL289WlO = BigInt("676")
		const addressffVaypE = accounts[1]
		const uintnbACQ6M = BigInt("369")
		const uint256rSHijji = await WolfStakingRewardsIxOJdSa.earned.call(addressHfcJYHw, uintmFa5b61, {from: accounts[4]});
//		const uint256C6ESQQ7 = await WolfStakingRewardsIxOJdSa.withdrawRemainingBalance.call(uintJf5UnZL, uintRScYDaR, {from: accounts[0]});
//		const addressIaouf2 = await WolfStakingRewardsIxOJdSa.updateReward.call(addressffVaypE, uintL289WlO, {from: accounts[4]});
//		const stringDeD6W5N = await WolfStakingRewardsIxOJdSa.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintt5tve1u = await WolfStakingRewardsIxOJdSa.getReward.call(uintnbACQ6M, {from: accounts[4]});

		assert.equal(uint256rSHijji, BigInt("0"))
		await expect(WolfStakingRewardsIxOJdSa.withdrawRemainingBalance.call(uintJf5UnZL, uintRScYDaR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const strings5spo9b = "TTPvSSz5aEgTU5O1yV4d0qmMnmTeJgQeH5BfFh5BUWgqUkkRJNrukg9nj0JkHNMX42BRYa"
		const stringGhqeHs4 = "nOeUIzMxmuPq3VhuQosU3HRj9xmCWJ8vZzxTPzsyCnQobV6rILk"
		const uint5V7NHM = BigInt("100")
		const WolfStakingRewardsZBjSEVT = await WolfStakingRewards.new(strings5spo9b, stringGhqeHs4, uint5V7NHM, {from: accounts[0]});
		const uintWVBp3vx = BigInt("404")
		const uintFUWe89y = BigInt("1072")
		const uintvfBO4od = BigInt("1019")
		const uintsyHkFjb = BigInt("1547")
		await WolfStakingRewardsZBjSEVT.onlyOwner.call({from: accounts[4]});
		const uint256BoegsT = await WolfStakingRewardsZBjSEVT.withdraw.call(uintFUWe89y, uintWVBp3vx, {from: accounts[4]});
		const uint256eCHpp7z = await WolfStakingRewardsZBjSEVT.withdraw.call(uintsyHkFjb, uintvfBO4od, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfHAxsrf = "7xJgMeajcs2N7KtfzTII"
		const stringnNUqwUO = "Thg7aWqwcDJGSXQesGLssx4VYGh9k5JaG4jro1SMf7p5gaLz1AtKzW6QuyqVm9Is7JvzSodOSnUpFD"
		const uintAQQqLcT = BigInt("6")
		const WolfStakingRewardsO8EODei = await WolfStakingRewards.new(stringfHAxsrf, stringnNUqwUO, uintAQQqLcT, {from: accounts[0]});
		const uintPItYwoY = BigInt("1527")
		const addressXhUryF6 = accounts[1]
		const uintD3KNgHq = BigInt("1298")
		const uintNKPoXdO = BigInt("1439")
		const uint8QarQGlb = await WolfStakingRewardsO8EODei.decimals.call({from: accounts[5]});
		const uint256lQOf5ug = await WolfStakingRewardsO8EODei.balanceOfPerPool.call(addressXhUryF6, uintPItYwoY, {from: accounts[5]});
		const uint256lON6N30 = await WolfStakingRewardsO8EODei.totalSupplyPerPool.call(uintD3KNgHq, {from: accounts[0]});
		const uint256FyJn1hg = await WolfStakingRewardsO8EODei.getRewardForDuration.call(uintNKPoXdO, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYyvRidI = "4O95QxE9ov7uSE"
		const stringkOGEu4u = "cW7QrAWfFzJfobzt4cti7ElMEnecwQBEICcgpuOiNHxDIAIsozVF563j2E5PSJOLoqrmpnPSA6pUNKkKmQKLR3axPj0"
		const uintny2Qux = BigInt("161")
		const WolfStakingRewardsN4sRes4 = await WolfStakingRewards.new(stringYyvRidI, stringkOGEu4u, uintny2Qux, {from: accounts[1]});
		const uintkC7mIhs = BigInt("1480")
		const uintvNyeEWU = BigInt("1220")
		const uint8VWFCPaH = await WolfStakingRewardsN4sRes4.decimals.call({from: accounts[2]});
		const uint256RfFcSj1 = await WolfStakingRewardsN4sRes4.rewardPerToken.call(uintkC7mIhs, {from: accounts[4]});
		const uint256JKXAx9l = await WolfStakingRewardsN4sRes4.totalSupplyPerPool.call(uintvNyeEWU, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringaxjzEoG = "eIPOOPP5U8KQVK1OlDNHlHR9dDIWj41rMhP5tUhWdgH2n176RHN6zo9dH"
		const stringSBBt2Ab = "jmqP"
		const uinttTcPnBM = BigInt("4")
		const WolfStakingRewardsDjVJH7q = await WolfStakingRewards.new(stringaxjzEoG, stringSBBt2Ab, uinttTcPnBM, {from: accounts[0]});
		const uintANnwUzY = BigInt("1705")
		const addressuNB7kWp = accounts[4]
		const uintJ7KZ5si = BigInt("697")
		const uintoXl5vkw = BigInt("69")
		const uintAukbq5u = BigInt("1011")
		const addressWJQtCs = accounts[4]
		await WolfStakingRewardsDjVJH7q.onlyRewardsDistribution.call({from: accounts[3]});
		const addresshsPD1T7 = await WolfStakingRewardsDjVJH7q.updateReward.call(addressuNB7kWp, uintANnwUzY, {from: accounts[4]});
		const uint256idUBa0 = await WolfStakingRewardsDjVJH7q.getRewardForDuration.call(uintJ7KZ5si, {from: accounts[2]});
		const uint256lPwLQ8o = await WolfStakingRewardsDjVJH7q.totalSupplyPerPool.call(uintoXl5vkw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256sKsFZ9p = await WolfStakingRewardsDjVJH7q.balanceOfPerPool.call(addressWJQtCs, uintAukbq5u, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringqh9oeke = "eu05iU2DSafGK4htsEOMFc3YHjeg7zfAhX1fTz66gZLxPLxcB4JGGkb6amFeM8N4"
		const stringCIQnUie = "nuvBqLvjd"
		const uintKDd9S94 = BigInt("206")
		const WolfStakingRewardsTGi3AN0 = await WolfStakingRewards.new(stringqh9oeke, stringCIQnUie, uintKDd9S94, {from: accounts[3]});
		const uintVT0PXGI = BigInt("1594")
		const addressGS2E3oX = accounts[4]
		const uintMOlgoE0 = BigInt("204")
		const uinthoOkHZX = BigInt("1996")
		const uinthrUgAiV = BigInt("20")
		const uintKo2xXDA = BigInt("1837")
		const uintfpxnHHs = BigInt("1929")
		const addressvdma3oN = await WolfStakingRewardsTGi3AN0.updateReward.call(addressGS2E3oX, uintVT0PXGI, {from: accounts[1]});
		const uint256gwk1p4a = await WolfStakingRewardsTGi3AN0.exit.call(uintMOlgoE0, {from: accounts[3]});
		const uint256RuNTwVM = await WolfStakingRewardsTGi3AN0.withdrawRemainingBalance.call(uinthrUgAiV, uinthoOkHZX, {from: accounts[5]});
		const uint256VcXbDiP = await WolfStakingRewardsTGi3AN0.lastTimeRewardApplicable.call(uintKo2xXDA, {from: accounts[3]});
		const stringBewepqP = await WolfStakingRewardsTGi3AN0.symbol.call({from: accounts[0]});
		const uint256DbAe2Xc = await WolfStakingRewardsTGi3AN0.getRewardForDuration.call(uintfpxnHHs, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPKRhKZx = "dDkVa629bC3elYXe9UUT3za1QOcQUrHM"
		const stringCgB6bdQ = "va2tgfKTjysGkhdwDBeLT4ayIBsncFWiu3UpcbyqWdG9e3ouPule8XzhVGa7l6WsedDwtM8e9gHCgOuSik74J6u6VYliDtte5"
		const uintrGYe2NT = BigInt("110")
		const WolfStakingRewardsV8CAUqW = await WolfStakingRewards.new(stringPKRhKZx, stringCgB6bdQ, uintrGYe2NT, {from: accounts[5]});
		const uintP5dxUy8 = BigInt("1084")
		const uintMWMCmnp = BigInt("486")
		await WolfStakingRewardsV8CAUqW.nonReentrant.call({from: accounts[0]});
		const uint256BEED94l = await WolfStakingRewardsV8CAUqW.getRewardForDuration.call(uintP5dxUy8, {from: accounts[3]});
		const stringRyBPCLq = await WolfStakingRewardsV8CAUqW.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256KI0ayBK = await WolfStakingRewardsV8CAUqW.lastTimeRewardApplicable.call(uintMWMCmnp, {from: accounts[3]});
		await WolfStakingRewardsV8CAUqW.nonReentrant.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringm8C6lyI = "w4QDngfeNqo0dsGSkw9ZtI87qzC3ixw4P5qIOKLIC8lVvoUNGCGHChSUOTXlX4RfLOOWYP5IDelbXYm6qVxojW77f9GM"
		const stringJpx1Q4l = "Da5u"
		const uintWjVB75L = BigInt("147")
		const WolfStakingRewardswb9vBnP = await WolfStakingRewards.new(stringm8C6lyI, stringJpx1Q4l, uintWjVB75L, {from: accounts[1]});
		const uintFMy6DB = BigInt("550")
		const uintwwEJrNT = BigInt("376")
		const uintX2uCTwl = BigInt("1227")
		const uintV1gts8l = BigInt("1423")
		const uintLFK24wy = BigInt("1230")
		const uinty5chMDn = BigInt("1808")
		const uints9XllKY = BigInt("560")
		const uint256UdPL1Yt = await WolfStakingRewardswb9vBnP.lastTimeRewardApplicable.call(uintFMy6DB, {from: accounts[3]});
		const uint256wKIQOd0 = await WolfStakingRewardswb9vBnP.lastTimeRewardApplicable.call(uintwwEJrNT, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mFEKuad = await WolfStakingRewardswb9vBnP.getRewardForDuration.call(uintX2uCTwl, {from: accounts[5]});
		const uint256Rk8dOiH = await WolfStakingRewardswb9vBnP.getRewardForDuration.call(uintV1gts8l, {from: accounts[3]});
		const uint256GQdj3Rn = await WolfStakingRewardswb9vBnP.totalSupplyPerPool.call(uintLFK24wy, {from: accounts[4]});
		const uint256psfEQI = await WolfStakingRewardswb9vBnP.withdrawRemainingBalance.call(uints9XllKY, uinty5chMDn, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringGrXA0oO = "iDP8AJuIKkwlQjAyeIweMBbB1yw4scEQbtIhH69zKd2oto6iq4Xu9BihnYPYDmE1Em36XZUpN887ufSuqt8i"
		const stringfrE4En3 = "ZYMbvTGdayYqpPzFVJAMgtXVzzN1ro2sRkcYFjvtRwhcKGmkwAeibbwwrKBvFyi2hSMVvBd1dQEt"
		const uintJWQFQY = BigInt("97")
		const WolfStakingRewardsltiFQ3 = await WolfStakingRewards.new(stringGrXA0oO, stringfrE4En3, uintJWQFQY, {from: accounts[5]});
		const uintzHZGEsT = BigInt("1206")
		const uintMgHx6yp = BigInt("951")
		const uintYuDWecl = BigInt("1140")
		const uintUutbfmm = BigInt("1477")
		const uintUte7SfU = BigInt("100")
		await WolfStakingRewardsltiFQ3.onlyOwner.call({from: accounts[3]});
		const uintQ1kl1PW = await WolfStakingRewardsltiFQ3.getReward.call(uintzHZGEsT, {from: accounts[1]});
		const uint256fSl0756 = await WolfStakingRewardsltiFQ3.withdraw.call(uintYuDWecl, uintMgHx6yp, {from: accounts[5]});
		const uint256ZRFjTU4 = await WolfStakingRewardsltiFQ3.withdraw.call(uintUte7SfU, uintUutbfmm, {from: accounts[3]});
		const stringFwjvXZC = await WolfStakingRewardsltiFQ3.symbol.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXkU6UEf = "EcK7WWpqENwbyoLCzNp7xfVgZyVvTiO"
		const stringhGNA2e = "iwifVupQLPyd3XSq53zbQOIdvy"
		const uintL4F9AhA = BigInt("232")
		const WolfStakingRewardshKO9EdL = await WolfStakingRewards.new(stringXkU6UEf, stringhGNA2e, uintL4F9AhA, {from: "0x0000000000000000000000000000000000000001"});
		const uintatFpMaw = BigInt("1632")
		const addressk9nnjIu = accounts[1]
		const uinttHiiLP3 = BigInt("380")
		const addressWpsoqgY = accounts[4]
		const uintfMwioia = BigInt("753")
		const uintj4LzreS = BigInt("1541")
		const uintrFTd3eT = BigInt("843")
		const addressyqzSfWA = await WolfStakingRewardshKO9EdL.updateReward.call(addressk9nnjIu, uintatFpMaw, {from: accounts[2]});
		const uint256MPOTTfJ = await WolfStakingRewardshKO9EdL.balanceOfPerPool.call(addressWpsoqgY, uinttHiiLP3, {from: accounts[3]});
		const uint256xmITc5 = await WolfStakingRewardshKO9EdL.lastTimeRewardApplicable.call(uintfMwioia, {from: accounts[2]});
		const uint256UZO0JM = await WolfStakingRewardshKO9EdL.totalSupplyPerPool.call(uintj4LzreS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayzxeAmXN = await WolfStakingRewardshKO9EdL.updateNotifyRewardAmount.call(uintrFTd3eT, {from: accounts[5]});
		const stringlgDYcjI = await WolfStakingRewardshKO9EdL.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXpjp4C = "2jlUWtQJLaJC5QX"
		const stringNP2WxBV = "Nc8gmsE8AgsXR0kxiO0GpkazV8kLlFsa5iHKOiPnLAPEpGkpezOlh4mckSgDTzzSXQL2MmqYIjFGoqd5"
		const uintB1a5qp = BigInt("125")
		const WolfStakingRewardssowFcbk = await WolfStakingRewards.new(stringXpjp4C, stringNP2WxBV, uintB1a5qp, {from: accounts[0]});
		const uintcpvtrxO = BigInt("1988")
		const uintv7OeHad = BigInt("774")
		const string88gMeb = await WolfStakingRewardssowFcbk.symbol.call({from: accounts[3]});
		const uint8DGmYdZr = await WolfStakingRewardssowFcbk.decimals.call({from: accounts[1]});
		const uint256qX2Zdx = await WolfStakingRewardssowFcbk.exit.call(uintcpvtrxO, {from: accounts[4]});
		const uint256TguFZux = await WolfStakingRewardssowFcbk.lastTimeRewardApplicable.call(uintv7OeHad, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringdultVMv = "fLIrZlE0YgDHw"
		const stringQzAMUQf = "RHfWdbP23VXLkJkL1ADlgcupOp9ALfWj1KYinm13IOxMLxBmLpDc8ealJ73ZUTPUDlx9LRhHdQP1j5S7"
		const uintKalhy3p = BigInt("65")
		const WolfStakingRewardsvhxrq6r = await WolfStakingRewards.new(stringdultVMv, stringQzAMUQf, uintKalhy3p, {from: accounts[3]});
		const uintq2RbdYS = BigInt("1924")
		const uintc7vrBBG = BigInt("113")
		const uinteuhxX6S = BigInt("1420")
		const addressYXctes4 = accounts[3]
		const uintrDuA27E = BigInt("1895")
		const addresspremWam = accounts[4]
		const uint256lYFz3ih = await WolfStakingRewardsvhxrq6r.stake.call(uintc7vrBBG, uintq2RbdYS, {from: accounts[3]});
		const uint8YSTu3py = await WolfStakingRewardsvhxrq6r.decimals.call({from: accounts[3]});
		const uint256SEGjWVP = await WolfStakingRewardsvhxrq6r.balanceOfPerPool.call(addressYXctes4, uinteuhxX6S, {from: accounts[0]});
		const addressCS7pCs9 = await WolfStakingRewardsvhxrq6r.updateReward.call(addresspremWam, uintrDuA27E, {from: accounts[5]});
		await WolfStakingRewardsvhxrq6r.onlyOwner.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzgW6o5g = "i3gf5ZxlYCMNu4DvUDferSn668HYfdjygh8FKYnCmPP2GsNtmDtN90wQU9sozEJ"
		const stringmb4SfWq = "AUX5eUgcKWqlRdudYn8gvQ6BJyt4Z3Dm7784ikuOnvg8UjmpJhvVTjqqhcDr6O18P29w8Ni3Hzdnu75TSimYmMhPay2hUSUa"
		const uint4T2jqe = BigInt("112")
		const WolfStakingRewardsfoWtpVs = await WolfStakingRewards.new(stringzgW6o5g, stringmb4SfWq, uint4T2jqe, {from: accounts[0]});
		const uintb1aUspp = BigInt("2037")
		const uint256l8uQ9N0 = await WolfStakingRewardsfoWtpVs.lastTimeRewardApplicable.call(uintb1aUspp, {from: accounts[1]});
		const stringZzo2BUR = await WolfStakingRewardsfoWtpVs.symbol.call({from: accounts[4]});
	});
})