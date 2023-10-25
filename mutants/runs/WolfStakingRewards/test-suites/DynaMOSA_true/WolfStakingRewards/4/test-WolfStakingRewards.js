const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressyRIa83 = accounts[0]
		const addressMosYwIZ = accounts[1]
		const addressQVY2jhE = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardsvIKrYw = await WolfStakingRewards.new(addressyRIa83, addressMosYwIZ, addressQVY2jhE, {from: accounts[1]});
		const uintg4P5yw = BigInt("1233")
		const uintn8v9HdP = BigInt("1163")
		const uintuEgxoQS = BigInt("513")
		const uintNVgje8D = BigInt("62")
		const uint8eI2VtY4 = await WolfStakingRewardsvIKrYw.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256EYNJHR = await WolfStakingRewardsvIKrYw.exit.call(uintg4P5yw, {from: accounts[3]});
		const uint256C4mxrlo = await WolfStakingRewardsvIKrYw.stake.call(uintuEgxoQS, uintn8v9HdP, {from: accounts[3]});
		const uint256ItRD1um = await WolfStakingRewardsvIKrYw.totalSupplyPerPool.call(uintNVgje8D, {from: accounts[0]});
		await WolfStakingRewardsvIKrYw.onlyOwner.call({from: accounts[1]});

		await expect(WolfStakingRewardsvIKrYw.decimals.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringPh48M6u = "pInyXtvlpbc9UtljHA2MOxCPtGJ7mHoAWInU9K90gu9VVmTtqqRu7t6RXF6t3PDESYyhETbMoiyPIRVjH3"
		const stringF29EARX = "pqJCCefIwqEy15jJhosPlpb28IZRCYwy8xmsVl8ULnHKtVSLw2"
		const uintUlgqHzK = BigInt("12")
		const WolfStakingRewardsK5zIovP = await WolfStakingRewards.new(stringPh48M6u, stringF29EARX, uintUlgqHzK, {from: accounts[1]});
		const uintaeqQHNG = BigInt("1818")
		const uintD32h1RC = BigInt("640")
		const uintX5wGFgi = BigInt("1127")
		const addressTGhfKl = accounts[1]
		const uintBlBYESe = BigInt("1531")
		const uintNsv30iK = BigInt("397")
		const uint256zoKaFra = await WolfStakingRewardsK5zIovP.stake.call(uintD32h1RC, uintaeqQHNG, {from: accounts[3]});
		const addressxLtcbLA = await WolfStakingRewardsK5zIovP.updateReward.call(addressTGhfKl, uintX5wGFgi, {from: accounts[2]});
		const uint256C4IkfSe = await WolfStakingRewardsK5zIovP.stake.call(uintNsv30iK, uintBlBYESe, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresszlLCnO6 = accounts[3]
		const addresszJQEwcn = accounts[0]
		const addressaf9i6j6 = accounts[1]
		const WolfStakingRewardsp8e9kqd = await WolfStakingRewards.new(addresszlLCnO6, addresszJQEwcn, addressaf9i6j6, {from: accounts[5]});
		const uintUHCZAMR = BigInt("29")
		const uintihgjEDY = BigInt("1637")
		const uintH9jeGM = BigInt("1808")
		const uint256B7fhq3X = await WolfStakingRewardsp8e9kqd.withdraw.call(uintihgjEDY, uintUHCZAMR, {from: accounts[3]});
		await WolfStakingRewardsp8e9kqd.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256I4PLio = await WolfStakingRewardsp8e9kqd.lastTimeRewardApplicable.call(uintH9jeGM, {from: accounts[1]});
		const stringBgwlfvQ = await WolfStakingRewardsp8e9kqd.symbol.call({from: accounts[2]});
		const stringEoAJ4wR = await WolfStakingRewardsp8e9kqd.symbol.call({from: accounts[2]});
		await WolfStakingRewardsp8e9kqd.onlyOwner.call({from: accounts[4]});

		await expect(WolfStakingRewardsp8e9kqd.withdraw.call(uintihgjEDY, uintUHCZAMR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringqHWFiCv = "Q2fVZFNk11DhVYDtAzQ8lkv"
		const stringBQZ4S03 = "eOLdVrYD2e3VtXDkgn3hXMhB8uxOzcP64Oh3C19FOeUg6zBEAZleq2IkigOR94Gt8QM89geuNAgsC1G8"
		const uintTDU4H41 = BigInt("167")
		const WolfStakingRewardsIXgUibm = await WolfStakingRewards.new(stringqHWFiCv, stringBQZ4S03, uintTDU4H41, {from: accounts[5]});
		const uintCLnBKfX = BigInt("1142")
		const addressNU5Ft7M = accounts[0]
		const uintXtXwQW = BigInt("114")
		const uintH3DVfaC = BigInt("1032")
		const uintpnJTFs5 = BigInt("269")
		const uint256zfRywin = await WolfStakingRewardsIXgUibm.balanceOfPerPool.call(addressNU5Ft7M, uintCLnBKfX, {from: accounts[5]});
		const uint8vleniVV = await WolfStakingRewardsIXgUibm.decimals.call({from: accounts[0]});
		const uint256XIrayXO = await WolfStakingRewardsIXgUibm.stake.call(uintH3DVfaC, uintXtXwQW, {from: accounts[0]});
		const uintpKoru4Q = await WolfStakingRewardsIXgUibm.getReward.call(uintpnJTFs5, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const string1mikpH = "w6xvXQRyB"
		const stringsYMjatv = "FELqjriMjBmdgXFFFR0fMucQgK2BgQmpCa9KcSwSIgDT1kIulXfMakaGwyvxdTQa"
		const uinto6L03FT = BigInt("202")
		const WolfStakingRewardsPMN1UkU = await WolfStakingRewards.new(string1mikpH, stringsYMjatv, uinto6L03FT, {from: accounts[4]});
		const uintK9PIQrd = BigInt("872")
		const stringWaaoCU = await WolfStakingRewardsPMN1UkU.name.call({from: accounts[0]});
		const uintLhqqVxa = await WolfStakingRewardsPMN1UkU.getReward.call(uintK9PIQrd, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressM9tzMm = accounts[0]
		const addressXK2WqD4 = accounts[1]
		const addresssO0bM9s = accounts[1]
		const WolfStakingRewardstaeBtH1 = await WolfStakingRewards.new(addressM9tzMm, addressXK2WqD4, addresssO0bM9s, {from: accounts[0]});
		const uintxV7TkE4 = BigInt("346")
		const uintgAV8mEO = BigInt("761")
		const uinteR7tKil = BigInt("705")
		const uintIe1uB5 = BigInt("1159")
		const uint256idpSfsY = await WolfStakingRewardstaeBtH1.withdrawRemainingBalance.call(uintgAV8mEO, uintxV7TkE4, {from: accounts[0]});
		const uint256lennVTw = await WolfStakingRewardstaeBtH1.withdrawRemainingBalance.call(uintIe1uB5, uinteR7tKil, {from: accounts[5]});

		await expect(WolfStakingRewardstaeBtH1.withdrawRemainingBalance.call(uintgAV8mEO, uintxV7TkE4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressUVRObb = accounts[2]
		const addressZ1X2twu = accounts[1]
		const addressQhXKCAr = accounts[4]
		const WolfStakingRewardsgkEMeie = await WolfStakingRewards.new(addressUVRObb, addressZ1X2twu, addressQhXKCAr, {from: accounts[3]});
		const uintzMxUpPm = BigInt("39")
		const uintvmWdJ3 = BigInt("1150")
		const addressrDODvA = accounts[2]
		const uintBxqTWJg = BigInt("1276")
		const uintHtnpE7c = BigInt("93")
		const uint256m5qmtt = await WolfStakingRewardsgkEMeie.totalSupplyPerPool.call(uintzMxUpPm, {from: accounts[3]});
		const uint256sK4pHR = await WolfStakingRewardsgkEMeie.balanceOfPerPool.call(addressrDODvA, uintvmWdJ3, {from: accounts[0]});
		const uint256Wp4ybI = await WolfStakingRewardsgkEMeie.withdraw.call(uintHtnpE7c, uintBxqTWJg, {from: accounts[1]});
		await WolfStakingRewardsgkEMeie.nonReentrant.call({from: accounts[1]});
		await WolfStakingRewardsgkEMeie.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256m5qmtt, BigInt("0"))
		assert.equal(uint256sK4pHR, BigInt("0"))
		await expect(WolfStakingRewardsgkEMeie.withdraw.call(uintHtnpE7c, uintBxqTWJg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringaWkmOVQ = "Yzs2AqqWLEQCzFVwAufQxYpGkhJ3q4rX6xPWbz5dfeVUdi1WAuASw6tErOxPJv6Qj27LOiLQLLRMe7LEdO"
		const stringw1FIy04 = "nQSR"
		const uintXslvm6M = BigInt("174")
		const WolfStakingRewardsUuGcD45 = await WolfStakingRewards.new(stringaWkmOVQ, stringw1FIy04, uintXslvm6M, {from: accounts[3]});
		const uintIRNPH7A = BigInt("1243")
		const addressYD5Z0N = accounts[2]
		const uintj5fpbwB = BigInt("1238")
		const addressqEGiyl = accounts[1]
		const uintkyGeJoQ = BigInt("1458")
		const uint256CzyyFPc = await WolfStakingRewardsUuGcD45.earned.call(addressYD5Z0N, uintIRNPH7A, {from: accounts[4]});
		const addressc8eVdw4 = await WolfStakingRewardsUuGcD45.updateReward.call(addressqEGiyl, uintj5fpbwB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wjE9RrJ = await WolfStakingRewardsUuGcD45.lastTimeRewardApplicable.call(uintkyGeJoQ, {from: accounts[1]});
		const stringB11QdcK = await WolfStakingRewardsUuGcD45.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressT7wxcBl = accounts[2]
		const addressYi1Fb6 = accounts[1]
		const addressSs4StBG = accounts[4]
		const WolfStakingRewardsgkEMeie = await WolfStakingRewards.new(addressT7wxcBl, addressYi1Fb6, addressSs4StBG, {from: accounts[3]});
		const uintDcDd4d = BigInt("39")
		const uintwMNKukC = BigInt("1150")
		const addressa6CWQbJ = accounts[2]
		const uintiPjX4O4 = BigInt("632")
		const uintUHSbzlA = BigInt("751")
		const uint5SR4Wx = BigInt("829")
		const uintjvr7ybw = BigInt("1276")
		const uintoiQnBPi = BigInt("93")
		const uint256m5qmtt = await WolfStakingRewardsgkEMeie.totalSupplyPerPool.call(uintDcDd4d, {from: accounts[3]});
		const uint256sK4pHR = await WolfStakingRewardsgkEMeie.balanceOfPerPool.call(addressa6CWQbJ, uintwMNKukC, {from: accounts[0]});
		const uint256vMHde23 = await WolfStakingRewardsgkEMeie.getRewardForDuration.call(uintiPjX4O4, {from: accounts[3]});
		const uint25610rhoH = await WolfStakingRewardsgkEMeie.withdrawRemainingBalance.call(uint5SR4Wx, uintUHSbzlA, {from: accounts[4]});
		const uint256Wp4ybI = await WolfStakingRewardsgkEMeie.withdraw.call(uintoiQnBPi, uintjvr7ybw, {from: accounts[1]});
		await WolfStakingRewardsgkEMeie.nonReentrant.call({from: accounts[1]});
		await WolfStakingRewardsgkEMeie.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256m5qmtt, BigInt("0"))
		assert.equal(uint256sK4pHR, BigInt("0"))
		await expect(WolfStakingRewardsgkEMeie.getRewardForDuration.call(uintiPjX4O4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressBbxfTxy = "0x0000000000000000000000000000000000000001"
		const addressDq0hvsP = accounts[1]
		const addressQrjnO8B = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardsC90JC4y = await WolfStakingRewards.new(addressBbxfTxy, addressDq0hvsP, addressQrjnO8B, {from: accounts[3]});
		const uintYpShzNH = BigInt("1418")
		const uintEF81C0K = BigInt("501")
		const uintMQi6bU6 = BigInt("1120")
		const uintVh4rF6R = BigInt("1731")
		const uint256hKl5nR = await WolfStakingRewardsC90JC4y.withdrawRemainingBalance.call(uintEF81C0K, uintYpShzNH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256By0TKip = await WolfStakingRewardsC90JC4y.exit.call(uintMQi6bU6, {from: accounts[0]});
		await WolfStakingRewardsC90JC4y.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256RyzTCoN = await WolfStakingRewardsC90JC4y.exit.call(uintVh4rF6R, {from: accounts[2]});

		await expect(WolfStakingRewardsC90JC4y.withdrawRemainingBalance.call(uintEF81C0K, uintYpShzNH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressYlsr4Dj = accounts[1]
		const addressbAqNmD = accounts[4]
		const addressnwbVpXe = accounts[2]
		const WolfStakingRewardsUZFTulm = await WolfStakingRewards.new(addressYlsr4Dj, addressbAqNmD, addressnwbVpXe, {from: accounts[4]});
		const uintnRnf4P = BigInt("753")
		const uintuNB0Zl7 = BigInt("305")
		const uintOdb6hPy = BigInt("13")
		const uintxCtoPUi = BigInt("1811")
		const uintXzDpoJv = BigInt("1716")
		const addressWEs9XQP = accounts[1]
		const uint256arrayfH5aVG6 = await WolfStakingRewardsUZFTulm.updateNotifyRewardAmount.call(uintnRnf4P, {from: accounts[1]});
		const uint256x2jPP7W = await WolfStakingRewardsUZFTulm.rewardPerToken.call(uintuNB0Zl7, {from: accounts[2]});
		const uint256MGjbYWW = await WolfStakingRewardsUZFTulm.withdrawRemainingBalance.call(uintxCtoPUi, uintOdb6hPy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yH3Iw2s = await WolfStakingRewardsUZFTulm.earned.call(addressWEs9XQP, uintXzDpoJv, {from: accounts[0]});
		const uint8Ynfzd9J = await WolfStakingRewardsUZFTulm.decimals.call({from: accounts[2]});

		await expect(WolfStakingRewardsUZFTulm.updateNotifyRewardAmount.call(uintnRnf4P, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringlIPZZ8f = "51bMW4jNCf7mB1Ysx7vRec2EQrvdyWlorXD5JQBHba7w3d6A5oBQVsPi5C8GCcQBHpVi4LGnJpit0xGxy2WZb2Xd"
		const stringLM3REzw = "wWJFmYQbi6KnSVxUsq8H08k0VeHGqyuvheo6"
		const uintVWQ5h54 = BigInt("92")
		const WolfStakingRewardsk0gW4uD = await WolfStakingRewards.new(stringlIPZZ8f, stringLM3REzw, uintVWQ5h54, {from: accounts[2]});
		const uintDN15Vj0 = BigInt("1309")
		const uintejCwTsk = BigInt("1760")
		const uinttLp6tjW = BigInt("691")
		const uintf64CCaU = BigInt("1179")
		await WolfStakingRewardsk0gW4uD.nonReentrant.call({from: accounts[3]});
		const uintytY3ISs = await WolfStakingRewardsk0gW4uD.getReward.call(uintDN15Vj0, {from: accounts[1]});
		const uint256s4XhL2 = await WolfStakingRewardsk0gW4uD.stake.call(uinttLp6tjW, uintejCwTsk, {from: accounts[3]});
		const uint256naDWh2 = await WolfStakingRewardsk0gW4uD.lastTimeRewardApplicable.call(uintf64CCaU, {from: accounts[1]});
		await WolfStakingRewardsk0gW4uD.nonReentrant.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresswBrovZ = accounts[2]
		const addressdqLIXsW = accounts[1]
		const addressSIXk841 = accounts[4]
		const WolfStakingRewardsgkEMeie = await WolfStakingRewards.new(addresswBrovZ, addressdqLIXsW, addressSIXk841, {from: accounts[3]});
		const uintxzg11O1 = BigInt("39")
		const uintRUZyPLq = BigInt("595")
		const uintp98a3sP = BigInt("1150")
		const addressaDpErv0 = accounts[2]
		const uinthQVvMgi = BigInt("1276")
		const uintAlqO3Vh = BigInt("1284")
		const uintkEaIv32 = BigInt("577")
		const uint256m5qmtt = await WolfStakingRewardsgkEMeie.totalSupplyPerPool.call(uintxzg11O1, {from: accounts[3]});
		const uintT2HBjO = await WolfStakingRewardsgkEMeie.getReward.call(uintRUZyPLq, {from: accounts[2]});
		const uint256sK4pHR = await WolfStakingRewardsgkEMeie.balanceOfPerPool.call(addressaDpErv0, uintp98a3sP, {from: accounts[0]});
		const uint256Wp4ybI = await WolfStakingRewardsgkEMeie.withdraw.call(uintAlqO3Vh, uinthQVvMgi, {from: accounts[1]});
		await WolfStakingRewardsgkEMeie.nonReentrant.call({from: accounts[1]});
		await WolfStakingRewardsgkEMeie.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayJ7JinSV = await WolfStakingRewardsgkEMeie.updateNotifyRewardAmount.call(uintkEaIv32, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256m5qmtt, BigInt("0"))
		assert.equal(uint256sK4pHR, BigInt("0"))
		await expect(WolfStakingRewardsgkEMeie.withdraw.call(uintAlqO3Vh, uinthQVvMgi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresssTIb1t = accounts[4]
		const addressOiEnvgi = accounts[1]
		const addressBBmQw3W = accounts[1]
		const WolfStakingRewardsiiIgTvH = await WolfStakingRewards.new(addresssTIb1t, addressOiEnvgi, addressBBmQw3W, {from: accounts[3]});
		const uintsw8VC5 = BigInt("1813")
		const uintIXmmq8 = BigInt("1576")
		const uintpJxo63b = BigInt("1839")
		const addresswo39U43 = accounts[1]
		const uintOSHCA1 = BigInt("1924")
		const uint256TDQXDMI = await WolfStakingRewardsiiIgTvH.totalSupplyPerPool.call(uintsw8VC5, {from: accounts[5]});
		const uint256Z627CRu = await WolfStakingRewardsiiIgTvH.exit.call(uintIXmmq8, {from: accounts[3]});
		const addressh2ONIIv = await WolfStakingRewardsiiIgTvH.updateReward.call(addresswo39U43, uintpJxo63b, {from: accounts[0]});
		await WolfStakingRewardsiiIgTvH.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256jeFCRaE = await WolfStakingRewardsiiIgTvH.totalSupplyPerPool.call(uintOSHCA1, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256TDQXDMI, BigInt("0"))
		await expect(WolfStakingRewardsiiIgTvH.exit.call(uintIXmmq8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringoNBqFYi = "zPCmIZGAtXAmpMiusfeYGcnv3ubeoPvMI2xndifIWnnP9qbm6gc1t3yGcLbOcsSLvlCHlNrFfyYIeEgtX2uGw"
		const stringvp20OP = "k3VxLrwmGMt1JuV5zN1gS3C76z"
		const uintwNoB8wb = BigInt("164")
		const WolfStakingRewardsJEdFFbE = await WolfStakingRewards.new(stringoNBqFYi, stringvp20OP, uintwNoB8wb, {from: accounts[3]});
		const uintb2sxITz = BigInt("583")
		const uintGUz068o = BigInt("1310")
		const addressngJBUY4 = accounts[0]
		const uintp4dAFgy = BigInt("232")
		const uintTy5jO5 = BigInt("1698")
		await WolfStakingRewardsJEdFFbE.onlyOwner.call({from: accounts[2]});
		const stringCquhF22 = await WolfStakingRewardsJEdFFbE.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256q2HEjrm = await WolfStakingRewardsJEdFFbE.getRewardForDuration.call(uintb2sxITz, {from: accounts[1]});
		const uint256XJ1kFjt = await WolfStakingRewardsJEdFFbE.balanceOfPerPool.call(addressngJBUY4, uintGUz068o, {from: accounts[1]});
		await WolfStakingRewardsJEdFFbE.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256kVeAwu = await WolfStakingRewardsJEdFFbE.stake.call(uintTy5jO5, uintp4dAFgy, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressvezAYKq = accounts[4]
		const address7zpgqs = accounts[1]
		const addressNHw6VnB = accounts[1]
		const WolfStakingRewardsiiIgTvH = await WolfStakingRewards.new(addressvezAYKq, address7zpgqs, addressNHw6VnB, {from: accounts[3]});
		const uintA12D9z7 = BigInt("220")
		const uintfOIHU4a = BigInt("1792")
		const uintNUkN8BH = BigInt("1813")
		const uintAZUMTA = BigInt("1576")
		const uintTpIQv6Y = BigInt("1839")
		const addressMORaTbH = accounts[1]
		const uinthYOjFv7 = BigInt("1906")
		const uint256FPZ2l1 = await WolfStakingRewardsiiIgTvH.stake.call(uintfOIHU4a, uintA12D9z7, {from: accounts[3]});
		const uint256TDQXDMI = await WolfStakingRewardsiiIgTvH.totalSupplyPerPool.call(uintNUkN8BH, {from: accounts[5]});
		const uint256Z627CRu = await WolfStakingRewardsiiIgTvH.exit.call(uintAZUMTA, {from: accounts[3]});
		const addressh2ONIIv = await WolfStakingRewardsiiIgTvH.updateReward.call(addressMORaTbH, uintTpIQv6Y, {from: accounts[0]});
		await WolfStakingRewardsiiIgTvH.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256jeFCRaE = await WolfStakingRewardsiiIgTvH.totalSupplyPerPool.call(uinthYOjFv7, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WolfStakingRewardsiiIgTvH.stake.call(uintfOIHU4a, uintA12D9z7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressxSLpbvD = accounts[2]
		const addressy4WbwTg = accounts[1]
		const addressxB2lATy = accounts[4]
		const WolfStakingRewardsgkEMeie = await WolfStakingRewards.new(addressxSLpbvD, addressy4WbwTg, addressxB2lATy, {from: accounts[3]});
		const uintl0Fk2Ag = BigInt("530")
		const addressCtFVmfy = accounts[4]
		const uint723Ps3 = BigInt("39")
		const uinty8AOdu = BigInt("595")
		const uintwZgAY9G = BigInt("1150")
		const addresswq45Yxr = accounts[1]
		const uintUSxnDLb = BigInt("1276")
		const uintbOPaCXs = BigInt("1284")
		const uintaKbQELF = BigInt("1923")
		const uinthMn7h57 = BigInt("736")
		const uintvCZDCWz = BigInt("576")
		const uintBqwgwzM = BigInt("1760")
		const uint256B74j5Vm = await WolfStakingRewardsgkEMeie.earned.call(addressCtFVmfy, uintl0Fk2Ag, {from: accounts[1]});
		const uint256m5qmtt = await WolfStakingRewardsgkEMeie.totalSupplyPerPool.call(uint723Ps3, {from: accounts[3]});
		const uintT2HBjO = await WolfStakingRewardsgkEMeie.getReward.call(uinty8AOdu, {from: accounts[2]});
		const uint256sK4pHR = await WolfStakingRewardsgkEMeie.balanceOfPerPool.call(addresswq45Yxr, uintwZgAY9G, {from: accounts[0]});
		const uint256Wp4ybI = await WolfStakingRewardsgkEMeie.withdraw.call(uintbOPaCXs, uintUSxnDLb, {from: accounts[1]});
		const uint256KcZcKcL = await WolfStakingRewardsgkEMeie.withdraw.call(uinthMn7h57, uintaKbQELF, {from: accounts[4]});
		await WolfStakingRewardsgkEMeie.nonReentrant.call({from: accounts[1]});
		await WolfStakingRewardsgkEMeie.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayJ7JinSV = await WolfStakingRewardsgkEMeie.updateNotifyRewardAmount.call(uintvCZDCWz, {from: "0x0000000000000000000000000000000000000001"});
		const uint256t5zO38L = await WolfStakingRewardsgkEMeie.totalSupplyPerPool.call(uintBqwgwzM, {from: accounts[5]});

		assert.equal(uint256B74j5Vm, BigInt("0"))
		assert.equal(uint256m5qmtt, BigInt("0"))
		assert.equal(uint256sK4pHR, BigInt("0"))
		await expect(WolfStakingRewardsgkEMeie.withdraw.call(uintbOPaCXs, uintUSxnDLb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringoJsjbI1 = "UmVIFBpBYjouoYcu3vsVub7MzQKU4fJEUTWKsIJI8I90lOiC6kchlZKICivku4"
		const stringsWCvmka = "oUgJHrwHRlH57LzD4vjkTJ3KNnK5W12gd5YQaH5rOsZ8Gt"
		const uintfHEZqRj = BigInt("84")
		const WolfStakingRewardsLkJ1mG = await WolfStakingRewards.new(stringoJsjbI1, stringsWCvmka, uintfHEZqRj, {from: accounts[5]});
		const uintt8R8ps = BigInt("1870")
		const uintbI7nopI = BigInt("606")
		const uintWR7wuc1 = BigInt("1317")
		const uintYwicG1W = BigInt("1678")
		const uinttd9IVCL = BigInt("16")
		const uintzkvCUBo = BigInt("904")
		const uint256gC5pDoa = await WolfStakingRewardsLkJ1mG.stake.call(uintbI7nopI, uintt8R8ps, {from: accounts[1]});
		const uint256iWENNj7 = await WolfStakingRewardsLkJ1mG.lastTimeRewardApplicable.call(uintWR7wuc1, {from: accounts[2]});
		const uint256K4vURMF = await WolfStakingRewardsLkJ1mG.totalSupplyPerPool.call(uintYwicG1W, {from: accounts[1]});
		const uint256OaysCxC = await WolfStakingRewardsLkJ1mG.withdrawRemainingBalance.call(uintzkvCUBo, uinttd9IVCL, {from: accounts[2]});
		await WolfStakingRewardsLkJ1mG.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressJMZFW53 = accounts[2]
		const addressHC5tpLI = accounts[1]
		const addressv4F3Htm = accounts[4]
		const WolfStakingRewardsgkEMeie = await WolfStakingRewards.new(addressJMZFW53, addressHC5tpLI, addressv4F3Htm, {from: accounts[3]});
		const uinttdxSCpH = BigInt("39")
		const uintLnI9mX = BigInt("912")
		const uintaUpEbv = BigInt("960")
		const uintm3IhlDA = BigInt("1150")
		const addressV3fxaGz = accounts[2]
		const uintnqYR881 = BigInt("938")
		const uintAz3hj58 = BigInt("1305")
		const uinteHvCLV3 = BigInt("1276")
		const uintP5PkMne = BigInt("93")
		const uint256m5qmtt = await WolfStakingRewardsgkEMeie.totalSupplyPerPool.call(uinttdxSCpH, {from: accounts[3]});
		const uint256yefPFzB = await WolfStakingRewardsgkEMeie.stake.call(uintaUpEbv, uintLnI9mX, {from: "0x0000000000000000000000000000000000000001"});
		const uint256sK4pHR = await WolfStakingRewardsgkEMeie.balanceOfPerPool.call(addressV3fxaGz, uintm3IhlDA, {from: accounts[0]});
		const uint256aWeONzA = await WolfStakingRewardsgkEMeie.stake.call(uintAz3hj58, uintnqYR881, {from: accounts[2]});
		const uint256Wp4ybI = await WolfStakingRewardsgkEMeie.withdraw.call(uintP5PkMne, uinteHvCLV3, {from: accounts[1]});
		await WolfStakingRewardsgkEMeie.nonReentrant.call({from: accounts[1]});

		assert.equal(uint256m5qmtt, BigInt("0"))
		await expect(WolfStakingRewardsgkEMeie.stake.call(uintaUpEbv, uintLnI9mX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringe11SmBC = "ppGh7XX9WGTkxSbA6QtT6JUvoWREDOr"
		const stringg9w2IU = "1W0MOYcOCPTt6YIja6DrVn59yperHVyf1V1ZfeVjHqcg6I4MmU8U99smgWku4wWGeJzOelNR"
		const uintkG52Hi0 = BigInt("8")
		const WolfStakingRewardsSrioO0l = await WolfStakingRewards.new(stringe11SmBC, stringg9w2IU, uintkG52Hi0, {from: accounts[2]});
		const uintDtLDsDT = BigInt("1067")
		const addresse24nPTQ = accounts[0]
		const uintLM3bpFc = BigInt("1558")
		const uintR7V0nfK = BigInt("1853")
		const uinteYYYKT = BigInt("62")
		const uintjySTIK = BigInt("888")
		const uintClAnKTD = BigInt("172")
		const addresskfIh1D7 = await WolfStakingRewardsSrioO0l.updateReward.call(addresse24nPTQ, uintDtLDsDT, {from: accounts[3]});
		const uint256arrayMOAyK4Q = await WolfStakingRewardsSrioO0l.updateNotifyRewardAmount.call(uintLM3bpFc, {from: accounts[2]});
		const uint256XXV1vp = await WolfStakingRewardsSrioO0l.withdraw.call(uinteYYYKT, uintR7V0nfK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bala6Ug = await WolfStakingRewardsSrioO0l.stake.call(uintClAnKTD, uintjySTIK, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringGEA4fdN = "qXOAtl1DU4ParhyUvSLSIMxiO5pj1Re7vBYf22kLTFDxR7E2gJsiNVUmkPrY4KxCS0UhdVNjG59am4PlJssy5SnerKQxhAdZ1"
		const stringSQ2XMki = "EMYb7d3UQVasaMEsDJvyyJhIYbaDchp4CL52qCweWnbRny7ZCfsA0z8Ev4n3Z2mluEQ"
		const uintWr2e7Zv = BigInt("244")
		const WolfStakingRewards7g42IM = await WolfStakingRewards.new(stringGEA4fdN, stringSQ2XMki, uintWr2e7Zv, {from: accounts[0]});
		const uintABC3p7l = BigInt("1645")
		const uintWsE3me = BigInt("1170")
		const uintIkgV1pJ = BigInt("839")
		const uintAAXQbla = BigInt("1463")
		const uintYocgU5p = BigInt("230")
		const addresstDuJAwE = accounts[2]
		const uint256M0FOP5Y = await WolfStakingRewards7g42IM.exit.call(uintABC3p7l, {from: accounts[5]});
		const uint256T5OT8XJ = await WolfStakingRewards7g42IM.totalSupplyPerPool.call(uintWsE3me, {from: accounts[5]});
		const uint256eRH8Eq = await WolfStakingRewards7g42IM.exit.call(uintIkgV1pJ, {from: accounts[2]});
		const uint256BWWsha = await WolfStakingRewards7g42IM.lastTimeRewardApplicable.call(uintAAXQbla, {from: accounts[0]});
		const addressdVItxZ3 = await WolfStakingRewards7g42IM.updateReward.call(addresstDuJAwE, uintYocgU5p, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressp35x6y5 = accounts[5]
		const addresskse43az = accounts[4]
		const addressGc4NMnc = accounts[1]
		const WolfStakingRewardsvwNpHDC = await WolfStakingRewards.new(addressp35x6y5, addresskse43az, addressGc4NMnc, {from: "0x0000000000000000000000000000000000000001"});
		const uintUmbv0BI = BigInt("1096")
		const uintjfq2L9G = BigInt("476")
		const uintTq5K1Cf = await WolfStakingRewardsvwNpHDC.getReward.call(uintUmbv0BI, {from: accounts[4]});
		const stringcf77xD5 = await WolfStakingRewardsvwNpHDC.symbol.call({from: accounts[4]});
		const uint256qba4rrP = await WolfStakingRewardsvwNpHDC.exit.call(uintjfq2L9G, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringf5evJqV = "w1eW3Lnns74dww0bP"
		const stringVTTDTHC = "pzpJQBr64ROdQ"
		const uintrl7x5LP = BigInt("250")
		const WolfStakingRewardsqFJI4wW = await WolfStakingRewards.new(stringf5evJqV, stringVTTDTHC, uintrl7x5LP, {from: accounts[5]});
		const uintys6dzXt = BigInt("143")
		const uintL2EdzAl = BigInt("904")
		const uint3Nljk3 = BigInt("1901")
		const uintTnnG5dH = BigInt("387")
		const uintzLfOt7I = BigInt("1657")
		const uint256arrayCcAZ8BD = await WolfStakingRewardsqFJI4wW.updateNotifyRewardAmount.call(uintys6dzXt, {from: accounts[4]});
		const uint256gk1A8SJ = await WolfStakingRewardsqFJI4wW.lastTimeRewardApplicable.call(uintL2EdzAl, {from: accounts[0]});
		const uint256350oRK = await WolfStakingRewardsqFJI4wW.exit.call(uint3Nljk3, {from: accounts[2]});
		const uint2566s7YG7 = await WolfStakingRewardsqFJI4wW.lastTimeRewardApplicable.call(uintTnnG5dH, {from: accounts[0]});
		const uint256AgWOoum = await WolfStakingRewardsqFJI4wW.exit.call(uintzLfOt7I, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringkWo2j1E = "vjxfCColUbUHnrHLcnba8ouk49nnsFFvwVLJdGlu4JaQ7rFE3RBdkIJ8q96rjB8k2UPfP9QqSUtzfDnM7Ls8eni3aNLVm8oOB"
		const stringpZ3DDRb = "XsXZbWQwlSVreNS65KHb8OR"
		const uintUjUxAw9 = BigInt("176")
		const WolfStakingRewardspm1uBWO = await WolfStakingRewards.new(stringkWo2j1E, stringpZ3DDRb, uintUjUxAw9, {from: accounts[4]});
		const uintzkB9T8T = BigInt("1286")
		const uintqxO1nl4 = BigInt("1904")
		const addressiVRjHEU = accounts[1]
		const uinta95psJq = BigInt("397")
		const uintIKOzqMk = BigInt("1887")
		const uintJonit8b = BigInt("236")
		const uintNbUB0Zi = BigInt("515")
		const uintfOXoIAO = BigInt("122")
		const uint256hLARVbf = await WolfStakingRewardspm1uBWO.exit.call(uintzkB9T8T, {from: accounts[4]});
		const uint256u1HR6Zr = await WolfStakingRewardspm1uBWO.earned.call(addressiVRjHEU, uintqxO1nl4, {from: accounts[3]});
		const uint256ERdZo4 = await WolfStakingRewardspm1uBWO.withdrawRemainingBalance.call(uintIKOzqMk, uinta95psJq, {from: accounts[1]});
		const uint256sxIVTe6 = await WolfStakingRewardspm1uBWO.exit.call(uintJonit8b, {from: accounts[5]});
		const uint256oczaQC1 = await WolfStakingRewardspm1uBWO.withdrawRemainingBalance.call(uintfOXoIAO, uintNbUB0Zi, {from: accounts[2]});
		await WolfStakingRewardspm1uBWO.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringoexuRF = "SeiraIrPtChNfg3fcpi7GkKnHaO"
		const stringRAtYNvH = "DYs1IAaTl"
		const uintbFahAS = BigInt("37")
		const WolfStakingRewardsRptoDnj = await WolfStakingRewards.new(stringoexuRF, stringRAtYNvH, uintbFahAS, {from: accounts[4]});
		const uintq9O4eEM = BigInt("118")
		const uintIkErYfX = BigInt("1430")
		const addressw1xTtvG = accounts[0]
		const uintaA774V3 = BigInt("841")
		const uintegeBvd8 = BigInt("1731")
		const uint256SwwY6mq = await WolfStakingRewardsRptoDnj.lastTimeRewardApplicable.call(uintq9O4eEM, {from: "0x0000000000000000000000000000000000000001"});
		const uint8hmdgckX = await WolfStakingRewardsRptoDnj.decimals.call({from: accounts[4]});
		const addressq7C7Cn3 = await WolfStakingRewardsRptoDnj.updateReward.call(addressw1xTtvG, uintIkErYfX, {from: accounts[2]});
		const uint256AK2q0c = await WolfStakingRewardsRptoDnj.stake.call(uintegeBvd8, uintaA774V3, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVBNRXl = "zHa4UbL9oRwYWGZe0TczxpBsHpxGSlS5dualuQer5rN4MR"
		const stringCZ2KnUB = "zBnOvf6zAdYcXbwryXak2bK8PYaqcsXokgvr7lLTTgeW7V8lN6g61z6sVbanZpbgkvv4Tdp64TW"
		const uintK0bUllj = BigInt("62")
		const WolfStakingRewardsst346FS = await WolfStakingRewards.new(stringVBNRXl, stringCZ2KnUB, uintK0bUllj, {from: accounts[0]});
		const uintxDDIHzX = BigInt("1863")
		const uintDLWqWd = BigInt("1122")
		const uintIgyORq8 = BigInt("664")
		const uint256pGPoeIU = await WolfStakingRewardsst346FS.rewardPerToken.call(uintxDDIHzX, {from: accounts[1]});
		const uint256Sp45In8 = await WolfStakingRewardsst346FS.stake.call(uintIgyORq8, uintDLWqWd, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const string7iZI1G = "dIw31onzpT"
		const stringvE6tUF8 = "1oU2pxlxKtCnJu1a48C8B4lfWBiwAb5fnRlrr33NnJSStGBPCCB3OhtJ9tvwFdR9a"
		const uintKhiDwQI = BigInt("99")
		const WolfStakingRewardskUnQLun = await WolfStakingRewards.new(string7iZI1G, stringvE6tUF8, uintKhiDwQI, {from: accounts[4]});
		const uintiV3cu5 = BigInt("1953")
		const addressXt49uq7 = "0x0000000000000000000000000000000000000001"
		const uintHuY16Yy = BigInt("1098")
		const uinty7euzkQ = BigInt("542")
		const uintx3jIktc = BigInt("563")
		const uintj3Y8wOb = BigInt("751")
		const stringQRS4wAu = await WolfStakingRewardskUnQLun.symbol.call({from: accounts[4]});
		const uint25638PZ5y = await WolfStakingRewardskUnQLun.earned.call(addressXt49uq7, uintiV3cu5, {from: accounts[0]});
		const uint256kftphoB = await WolfStakingRewardskUnQLun.withdrawRemainingBalance.call(uinty7euzkQ, uintHuY16Yy, {from: accounts[1]});
		const uint256nz658yS = await WolfStakingRewardskUnQLun.getRewardForDuration.call(uintx3jIktc, {from: accounts[2]});
		const uint256TWxCn19 = await WolfStakingRewardskUnQLun.rewardPerToken.call(uintj3Y8wOb, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringNfOuMVr = "qsEr9QTpltuQ7x61HyDeZzDiAo2xJ6yxjdMk2fvJSaKjMbpf0YOBvYas5YLNafL"
		const stringpevNKjS = "Uo9r6WmuRDPv1WLCEhrBgK7YKbOqD4W4Gc5RuMoBYyoqWM8K7FEJUuFPGaODZGITkAmd2Cr9i4i9JQxJYM"
		const uintj0TLGq2 = BigInt("27")
		const WolfStakingRewardsGhjEroL = await WolfStakingRewards.new(stringNfOuMVr, stringpevNKjS, uintj0TLGq2, {from: accounts[3]});
		const uintCEW9OBV = BigInt("1173")
		const uintvpmQvPq = BigInt("250")
		const addressWsMsuLG = accounts[1]
		const uintBKU5eF9 = BigInt("1371")
		const uint256USUQrTm = await WolfStakingRewardsGhjEroL.rewardPerToken.call(uintCEW9OBV, {from: "0x0000000000000000000000000000000000000001"});
		const addressYwSxdIL = await WolfStakingRewardsGhjEroL.updateReward.call(addressWsMsuLG, uintvpmQvPq, {from: accounts[4]});
		const uintG0d7HOq = await WolfStakingRewardsGhjEroL.getReward.call(uintBKU5eF9, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcB1gssw = "VAM1GR6VLzpclX5DDm"
		const stringrxbtNm2 = "LWY4jMp896JEUKWcFTdVve2F0VURAOmb8J4SSqARxT666WYeGuD"
		const uintMbmfc1 = BigInt("3")
		const WolfStakingRewardsEUsq8M = await WolfStakingRewards.new(stringcB1gssw, stringrxbtNm2, uintMbmfc1, {from: accounts[2]});
		const uintcqOjUK5 = BigInt("96")
		const uintZKWJXnJ = BigInt("1544")
		const uintiycC7J2 = BigInt("833")
		const uintI7Ukxb5 = BigInt("944")
		const uintnuRXsBL = BigInt("205")
		const uint256hXeHrgw = await WolfStakingRewardsEUsq8M.totalSupplyPerPool.call(uintcqOjUK5, {from: accounts[4]});
		const uintUrDcSnq = await WolfStakingRewardsEUsq8M.getReward.call(uintZKWJXnJ, {from: accounts[0]});
		const uint256D0frbXk = await WolfStakingRewardsEUsq8M.rewardPerToken.call(uintiycC7J2, {from: accounts[0]});
		const uint256exSOCct = await WolfStakingRewardsEUsq8M.withdraw.call(uintnuRXsBL, uintI7Ukxb5, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringD1VvsCw = "wXbudr8HpVjmpJkkQJQ0Qeyyx11F3M720uBjSFBUU"
		const string5M28R5 = "fhXJ9wiSInKdgpLThrTOVElsIQCJod1UFk5qz47BFYwh2eLa7goWHW8F"
		const uintE75n0l7 = BigInt("63")
		const WolfStakingRewardsb5Ocnba = await WolfStakingRewards.new(stringD1VvsCw, string5M28R5, uintE75n0l7, {from: accounts[4]});
		const uintEgOHqZ5 = BigInt("933")
		const uinthdwCgpc = BigInt("1484")
		const uintbcbqtYh = BigInt("1515")
		const uintGYFk3H = BigInt("1343")
		const uintK949hZj = BigInt("498")
		const uintitQffb = BigInt("5")
		const uint256BeewinS = await WolfStakingRewardsb5Ocnba.withdrawRemainingBalance.call(uinthdwCgpc, uintEgOHqZ5, {from: accounts[2]});
		const uint256BtOEZet = await WolfStakingRewardsb5Ocnba.withdraw.call(uintGYFk3H, uintbcbqtYh, {from: accounts[4]});
		const uint256arraypyUj6V1 = await WolfStakingRewardsb5Ocnba.updateNotifyRewardAmount.call(uintK949hZj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vIshNHk = await WolfStakingRewardsb5Ocnba.exit.call(uintitQffb, {from: accounts[0]});
		const stringzruOr7b = await WolfStakingRewardsb5Ocnba.symbol.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringgW1Oxto = "PdKIPRWLljvchRGPAuiQw9U3vO4dDjt9VxU6VHOZieNMM8L"
		const stringGkSS1n = "TEa5RXfuI75McvTD8Bfh5VVpWxUEcvMIOEDhhPBSL1jEO9NWuoj3Umxg"
		const uintXsKy26x = BigInt("189")
		const WolfStakingRewardsb28NpYM = await WolfStakingRewards.new(stringgW1Oxto, stringGkSS1n, uintXsKy26x, {from: accounts[3]});
		const uintQbKBVD = BigInt("15")
		const uintqygqke7 = BigInt("183")
		const addressNHH3nsv = accounts[1]
		const uintw76TpzW = BigInt("825")
		const uintxzv3iqz = BigInt("1245")
		const uintOl9eSy = BigInt("1751")
		const uint256arraytWsNznY = await WolfStakingRewardsb28NpYM.updateNotifyRewardAmount.call(uintQbKBVD, {from: accounts[0]});
		const uint256wiv3tOr = await WolfStakingRewardsb28NpYM.earned.call(addressNHH3nsv, uintqygqke7, {from: accounts[5]});
		const uint256BFWTN7f = await WolfStakingRewardsb28NpYM.withdraw.call(uintxzv3iqz, uintw76TpzW, {from: accounts[2]});
		const uint256x20Pxxz = await WolfStakingRewardsb28NpYM.rewardPerToken.call(uintOl9eSy, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringj3pMHCO = "HuH88MGf7ydiBYJsJd5aBnDDM6eJ4NNa4XVDD7b2duMOTGxWv"
		const stringbnhSO00 = "9QwWJLS"
		const uintMKkkFM2 = BigInt("192")
		const WolfStakingRewardsQ1sjVl5 = await WolfStakingRewards.new(stringj3pMHCO, stringbnhSO00, uintMKkkFM2, {from: accounts[1]});
		const uintuqCpwLz = BigInt("1645")
		const uintog7Rehp = BigInt("151")
		const uintMUwaTf = BigInt("1999")
		const uint256nvK4NW = await WolfStakingRewardsQ1sjVl5.withdraw.call(uintog7Rehp, uintuqCpwLz, {from: accounts[2]});
		const uint256I2pKW3q = await WolfStakingRewardsQ1sjVl5.exit.call(uintMUwaTf, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringF1oxdhm = "tHaVHobvdEoY3VRxRSYGXorB4QcfS9o03l0TFnyBJ5AvwJssgz3vb58dliXX9vIhcdP67eNg9NFilkoHUHe05FpCshFb"
		const stringoeKG6Um = "SpNfy"
		const uintjCh8qWD = BigInt("202")
		const WolfStakingRewardso3G7wDR = await WolfStakingRewards.new(stringF1oxdhm, stringoeKG6Um, uintjCh8qWD, {from: accounts[3]});
		const uintHYu5VBQ = BigInt("744")
		const uinttINMhCa = BigInt("1013")
		const uintRakuzop = BigInt("880")
		const uinta040spy = BigInt("1265")
		const uintw0NrpKU = BigInt("300")
		const addressrPCGiGX = accounts[1]
		const uintqTGv2oh = BigInt("176")
		const uint256knUYbwc = await WolfStakingRewardso3G7wDR.exit.call(uintHYu5VBQ, {from: accounts[0]});
		const uint256Ve109W7 = await WolfStakingRewardso3G7wDR.rewardPerToken.call(uinttINMhCa, {from: accounts[4]});
		const uint256ox4EPIC = await WolfStakingRewardso3G7wDR.withdraw.call(uinta040spy, uintRakuzop, {from: accounts[4]});
		const uint256080Rd6 = await WolfStakingRewardso3G7wDR.balanceOfPerPool.call(addressrPCGiGX, uintw0NrpKU, {from: accounts[4]});
		const uint256TVWEzaW = await WolfStakingRewardso3G7wDR.totalSupplyPerPool.call(uintqTGv2oh, {from: accounts[1]});
		await WolfStakingRewardso3G7wDR.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringCRBexSu = "8LyPOleBXEAqSO60"
		const stringNUoUdAG = "C6P4seDvMcuKDZCWlR2Qm1VGBG4gKqd35OGn4YRI8hEaohhi1RTlhIXq6YIdywdrCOKtfsaQyTIm1WBzMTuAijBKpPHR3TCAh"
		const uintqoj3Le = BigInt("250")
		const WolfStakingRewardsbNfiVUx = await WolfStakingRewards.new(stringCRBexSu, stringNUoUdAG, uintqoj3Le, {from: accounts[0]});
		const uinteAg6ivs = BigInt("960")
		const uintbLmA2JO = BigInt("227")
		const uint3od7j6 = BigInt("1627")
		const uintbs7RHZv = BigInt("1156")
		const uintWpmR45 = BigInt("196")
		const uintutT6xdB = BigInt("1750")
		const uintskSjxar = BigInt("1065")
		const uint3HVD0E = BigInt("1085")
		const uint256Kc3hCrg = await WolfStakingRewardsbNfiVUx.totalSupplyPerPool.call(uinteAg6ivs, {from: accounts[4]});
		const uint256NYyOHDJ = await WolfStakingRewardsbNfiVUx.withdrawRemainingBalance.call(uint3od7j6, uintbLmA2JO, {from: "0x0000000000000000000000000000000000000001"});
		const uint2564RxBdC = await WolfStakingRewardsbNfiVUx.withdrawRemainingBalance.call(uintWpmR45, uintbs7RHZv, {from: accounts[3]});
		const uint256rrlMbnU = await WolfStakingRewardsbNfiVUx.withdraw.call(uintskSjxar, uintutT6xdB, {from: accounts[1]});
		const uint256YFf0m4 = await WolfStakingRewardsbNfiVUx.rewardPerToken.call(uint3HVD0E, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringRrf8XkA = "6BMh3bZX0R"
		const stringKAbgvgF = "FuysPMLKvPXBANgGWptUfe6WiAkD2b4SWkTFuW"
		const uintTG5Sj0y = BigInt("175")
		const WolfStakingRewardsjGSB3J1 = await WolfStakingRewards.new(stringRrf8XkA, stringKAbgvgF, uintTG5Sj0y, {from: accounts[2]});
		const uintSKuuGYY = BigInt("1407")
		const uintVCsnEOe = BigInt("1603")
		const addressnj9p7E9 = accounts[5]
		const uintwg9bm5v = BigInt("1769")
		const addressrSJbR8d = accounts[3]
		const uint256BdPrmrx = await WolfStakingRewardsjGSB3J1.exit.call(uintSKuuGYY, {from: accounts[2]});
		const uint256ZXwvTnS = await WolfStakingRewardsjGSB3J1.balanceOfPerPool.call(addressnj9p7E9, uintVCsnEOe, {from: accounts[5]});
		const uint256waVGb3S = await WolfStakingRewardsjGSB3J1.earned.call(addressrSJbR8d, uintwg9bm5v, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringb4mpSJr = "puVhY6qNtVYnJjob5y5sLNDeuVoJvkIIaMkhkNrPeoYW7Hr1eMisTT3U83pWAzdVN2KVxg"
		const stringD59ZzS = "tv6iL8ppCz3cMJVtk9rRA8cBWKceWW02oUiRboGNEr7i1cCI3qQOFiExfddzlnJS84E"
		const uintTjZns2k = BigInt("118")
		const WolfStakingRewardsXEj3Em5 = await WolfStakingRewards.new(stringb4mpSJr, stringD59ZzS, uintTjZns2k, {from: accounts[1]});
		const uintGNMOgj5 = BigInt("9")
		const uintVl2Lovb = BigInt("1732")
		const addressYGI9TBR = accounts[0]
		const uintZPZY534 = BigInt("1337")
		const uintUWLtdDW = BigInt("428")
		const uintuxygbj8 = BigInt("1459")
		const uintem9kAuQ = BigInt("175")
		const addressMAogi1C = accounts[2]
		const uintJQifuBO = BigInt("1608")
		const uintiMT5BMy = BigInt("335")
		const uint256arrayn9WxZy5 = await WolfStakingRewardsXEj3Em5.updateNotifyRewardAmount.call(uintGNMOgj5, {from: accounts[1]});
		const uint256YE8vgHU = await WolfStakingRewardsXEj3Em5.balanceOfPerPool.call(addressYGI9TBR, uintVl2Lovb, {from: accounts[0]});
		const uint256arrayJ06f13N = await WolfStakingRewardsXEj3Em5.updateNotifyRewardAmount.call(uintZPZY534, {from: accounts[3]});
		const uint256QWh14tC = await WolfStakingRewardsXEj3Em5.stake.call(uintuxygbj8, uintUWLtdDW, {from: accounts[0]});
		const uint256uzHWGS = await WolfStakingRewardsXEj3Em5.balanceOfPerPool.call(addressMAogi1C, uintem9kAuQ, {from: accounts[3]});
		const uint2560EdnbD = await WolfStakingRewardsXEj3Em5.stake.call(uintiMT5BMy, uintJQifuBO, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPtsroT0 = ""
		const stringsibfWAW = "CQ8PlRImya9WlLTtbAD3mckqv4WF4CK6w79KmK027dyecPPu8AIHYXWQcCzWTaXPdzTSQ3SfFoMIMgi6LBS"
		const uintWuZTgjB = BigInt("103")
		const WolfStakingRewardso1fnFer = await WolfStakingRewards.new(stringPtsroT0, stringsibfWAW, uintWuZTgjB, {from: accounts[0]});
		const uintQZbZCCt = BigInt("874")
		const uintiqNDV5G = BigInt("1690")
		const uintQ7ooUXW = BigInt("705")
		const uint256flueTDC = await WolfStakingRewardso1fnFer.lastTimeRewardApplicable.call(uintQZbZCCt, {from: accounts[2]});
		const string2KHMjP = await WolfStakingRewardso1fnFer.symbol.call({from: accounts[3]});
		const uint256vsKITf = await WolfStakingRewardso1fnFer.exit.call(uintiqNDV5G, {from: "0x0000000000000000000000000000000000000001"});
		const uintPMv71dd = await WolfStakingRewardso1fnFer.getReward.call(uintQ7ooUXW, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringRHGZKCc = "bqDomsf2w5O4QVnq8CGF3mKzEJkU3EIN0t2mfCFAXCUPftvTJ7FJsiURx"
		const stringqnpVB1d = "MgnR"
		const uintYF89Mn4 = BigInt("221")
		const WolfStakingRewardsL1h3dSr = await WolfStakingRewards.new(stringRHGZKCc, stringqnpVB1d, uintYF89Mn4, {from: accounts[3]});
		const uintVt8uQcD = BigInt("907")
		const uintbqaKEi3 = BigInt("1704")
		await WolfStakingRewardsL1h3dSr.nonReentrant.call({from: accounts[1]});
		await WolfStakingRewardsL1h3dSr.nonReentrant.call({from: accounts[4]});
		const uint256oQtSiA = await WolfStakingRewardsL1h3dSr.stake.call(uintbqaKEi3, uintVt8uQcD, {from: accounts[2]});
		await WolfStakingRewardsL1h3dSr.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHjH5ak5 = "Vw38jU6iA5MaGh8J082t0iTH4iwByjfPSgCzaPSsYLL9IZEjrJXJFPNSSHCjo3RNPmiJdoyBvd2MSVgSkxSBD8vFGY9KOQJY"
		const stringN0jCU92 = "WeHIUqnSMlqKoOpjVdWaW4NwAhI8Mj1h5YXl3uXkbbmGVbCCFqJiYna3r9NWhqmSlwvciJETIyF"
		const uintQzhTXE = BigInt("110")
		const WolfStakingRewardsSjRSPyZ = await WolfStakingRewards.new(stringHjH5ak5, stringN0jCU92, uintQzhTXE, {from: accounts[2]});
		const uintI0FgTM = BigInt("531")
		const addressMuYEYp7 = "0x0000000000000000000000000000000000000001"
		const uintpVxksu4 = BigInt("1327")
		const uintnG2LosU = BigInt("160")
		const uintprRSce = BigInt("1371")
		const uint256dkVEax7 = await WolfStakingRewardsSjRSPyZ.earned.call(addressMuYEYp7, uintI0FgTM, {from: accounts[4]});
		const uint256oF0NTp4 = await WolfStakingRewardsSjRSPyZ.withdrawRemainingBalance.call(uintnG2LosU, uintpVxksu4, {from: accounts[2]});
		const uint256HR5jtaG = await WolfStakingRewardsSjRSPyZ.getRewardForDuration.call(uintprRSce, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuxsN4Dj = "CkVp4LhjZn7w1QEImygNBi7Aia3poMwmh9lhQDtEWXNVjXqUbhQmkBPWTKVSwguBIWHOzr5xiC1ZLRW6r2fi5F8lGNu"
		const stringqHRTN5u = "qPdCfEr121XGqLeX3iklQvS7yRCdELJQmYCYUK2snLyHvDBRmt"
		const uintlkvApOI = BigInt("24")
		const WolfStakingRewardsGZecGm7 = await WolfStakingRewards.new(stringuxsN4Dj, stringqHRTN5u, uintlkvApOI, {from: accounts[3]});
		const uintkKIaZxl = BigInt("52")
		const uint256AYnuUD7 = await WolfStakingRewardsGZecGm7.lastTimeRewardApplicable.call(uintkKIaZxl, {from: accounts[0]});
		await WolfStakingRewardsGZecGm7.nonReentrant.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringdOgSjMw = "ljO1Ai7S4wao9x885zYANDoLSoLQLKsLWaLyc3Up5TV1dANdDO5Yxk0ugUyQ3uiqD9mgyOy6"
		const stringDSrHTJx = "V26UHqV5XLhVhkh5xN4dxreXCUGTqPEhLWhN4NaQXM5IUFmgbkDl6J"
		const uintmhd7PKe = BigInt("102")
		const WolfStakingRewardsJeh1Ei = await WolfStakingRewards.new(stringdOgSjMw, stringDSrHTJx, uintmhd7PKe, {from: accounts[1]});
		const uinty7B5Mca = BigInt("1048")
		const uintstZM0Dc = BigInt("998")
		const uintzPwNxGd = BigInt("2035")
		const uintJhsyt7e = BigInt("1515")
		const addressgVnbBdS = accounts[5]
		const uintdc1e5KK = BigInt("592")
		const uintEGyUrjr = BigInt("110")
		const uintDFL3HZ = BigInt("125")
		const uint256UDchU88 = await WolfStakingRewardsJeh1Ei.lastTimeRewardApplicable.call(uinty7B5Mca, {from: accounts[1]});
		const uint256T2r2UUC = await WolfStakingRewardsJeh1Ei.withdrawRemainingBalance.call(uintzPwNxGd, uintstZM0Dc, {from: accounts[3]});
		const uint8jHrb16v = await WolfStakingRewardsJeh1Ei.decimals.call({from: accounts[2]});
		const uint256y5H0LeA = await WolfStakingRewardsJeh1Ei.earned.call(addressgVnbBdS, uintJhsyt7e, {from: accounts[4]});
		const uint256g9doZ30 = await WolfStakingRewardsJeh1Ei.stake.call(uintEGyUrjr, uintdc1e5KK, {from: accounts[1]});
		const uint256zNPWI4W = await WolfStakingRewardsJeh1Ei.totalSupplyPerPool.call(uintDFL3HZ, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringY3fVyHv = "Vx2I65BaS41z1aRK8Wk9NoHfOIVaSbRAmlmOqXg1SqA1klvnsDTyqp8asjUebeR3F8ZuQLV6LMh9XcQbsIwCX"
		const stringsg78HSe = "qiSLj0eUivT2evbKhTY2JpI7Ezbxf35K2tSiebBT8HS5YotVJDX8fqpqtxSLcuDys"
		const uintyVy8rfI = BigInt("201")
		const WolfStakingRewardstpre6VA = await WolfStakingRewards.new(stringY3fVyHv, stringsg78HSe, uintyVy8rfI, {from: accounts[2]});
		const uintnxyDxkE = BigInt("971")
		const uintqWC1d4 = BigInt("1437")
		const uintPLdh1Sk = BigInt("1765")
		const uintehR5NgQ = BigInt("933")
		const uintwvLSjsE = await WolfStakingRewardstpre6VA.getReward.call(uintnxyDxkE, {from: accounts[4]});
		const uint256PTw9JKH = await WolfStakingRewardstpre6VA.stake.call(uintPLdh1Sk, uintqWC1d4, {from: accounts[3]});
		const uint8PIbzIya = await WolfStakingRewardstpre6VA.decimals.call({from: accounts[4]});
		await WolfStakingRewardstpre6VA.onlyRewardsDistribution.call({from: accounts[4]});
		await WolfStakingRewardstpre6VA.nonReentrant.call({from: accounts[2]});
		const uint256ESx91Y5 = await WolfStakingRewardstpre6VA.totalSupplyPerPool.call(uintehR5NgQ, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringCDy2DIi = "wcpP"
		const stringiXRm19y = "Jkc8H8QtbLDGu91cUv6aHSxO1qy9CES"
		const uintzgcPPEd = BigInt("241")
		const WolfStakingRewards6XCHDV = await WolfStakingRewards.new(stringCDy2DIi, stringiXRm19y, uintzgcPPEd, {from: accounts[2]});
		const uintXPBrHn = BigInt("1844")
		const uintRJxdiO3 = BigInt("718")
		const uintCXXFs63 = BigInt("1851")
		const addressHC4JXZl = accounts[0]
		const uintfjTpxPP = BigInt("826")
		const uintvdvOdyK = BigInt("171")
		const uint256iXqqoQu = await WolfStakingRewards6XCHDV.stake.call(uintRJxdiO3, uintXPBrHn, {from: "0x0000000000000000000000000000000000000001"});
		const addresso4Pj6P = await WolfStakingRewards6XCHDV.updateReward.call(addressHC4JXZl, uintCXXFs63, {from: accounts[0]});
		const uint256arrayYGzebDz = await WolfStakingRewards6XCHDV.updateNotifyRewardAmount.call(uintfjTpxPP, {from: accounts[5]});
		const uint256GWA8gjp = await WolfStakingRewards6XCHDV.rewardPerToken.call(uintvdvOdyK, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDTPdpLB = "Ar2aBtOxOlSWTF852D8DU"
		const stringrhgw0uX = "9jvDcM0BcuZXVqYCjbxm3OvH8q052u1Mll35JH4RHl0dJcgx5QgMy9qaPHRNQESACQ2h1lN6t4UB3Sv"
		const uintPZQVZ09 = BigInt("92")
		const WolfStakingRewardsqoQFyv7 = await WolfStakingRewards.new(stringDTPdpLB, stringrhgw0uX, uintPZQVZ09, {from: accounts[0]});
		const uintcYFLhpa = BigInt("353")
		const addressS3i9ulS = accounts[2]
		const stringcQfwZbc = await WolfStakingRewardsqoQFyv7.symbol.call({from: accounts[5]});
		const uint256EKcToA6 = await WolfStakingRewardsqoQFyv7.balanceOfPerPool.call(addressS3i9ulS, uintcYFLhpa, {from: "0x0000000000000000000000000000000000000001"});
		const stringeGR5Ebh = await WolfStakingRewardsqoQFyv7.name.call({from: accounts[1]});
		const uint8qtQf0OP = await WolfStakingRewardsqoQFyv7.decimals.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVLSTei8 = "BTmjXEvzI3V9tVMMvo6qlu9bMgqof8AnEFR9kdV5ucMj4wN3TAfXQTh1jjtMcY7Qx3hgrg9jGcUl"
		const stringbOuBWhs = "OdKtKHwd0tEMMdprGpzWRkeit6Q1te2g7n5KNB94DGxloo69lVi"
		const uintgsBLDu3 = BigInt("233")
		const WolfStakingRewardseyBr7hy = await WolfStakingRewards.new(stringVLSTei8, stringbOuBWhs, uintgsBLDu3, {from: accounts[3]});
		const uinth9SHFQ = BigInt("1397")
		const addresskhaKqwf = accounts[4]
		const uintRKTtBVl = BigInt("1288")
		const addressIzvwYy = accounts[0]
		const uintMWHkYaC = BigInt("881")
		const addressIkY3lFs = accounts[0]
		const uintvwq1Tqn = BigInt("2007")
		const uint256ZPD8iqM = await WolfStakingRewardseyBr7hy.balanceOfPerPool.call(addresskhaKqwf, uinth9SHFQ, {from: accounts[3]});
		const uint256YDOZ0yV = await WolfStakingRewardseyBr7hy.balanceOfPerPool.call(addressIzvwYy, uintRKTtBVl, {from: accounts[3]});
		const addresskZrjyUf = await WolfStakingRewardseyBr7hy.updateReward.call(addressIkY3lFs, uintMWHkYaC, {from: accounts[2]});
		const uint8rJk8Vdd = await WolfStakingRewardseyBr7hy.decimals.call({from: accounts[4]});
		const uint256arrayCoK41BB = await WolfStakingRewardseyBr7hy.updateNotifyRewardAmount.call(uintvwq1Tqn, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringW8mqD0 = "2pfYAVuUbssWe2BuOsZ5ilBXl9IsMxlnkBS0d3H8CLpYwvSI537vt1SMKrHkPjjKCHwUg"
		const string1UKQhk = "myrO"
		const uintZZiYgI9 = BigInt("244")
		const WolfStakingRewardsyIZz21 = await WolfStakingRewards.new(stringW8mqD0, string1UKQhk, uintZZiYgI9, {from: accounts[4]});
		const uintMoqOBei = BigInt("1891")
		const addresshemIbxM = accounts[0]
		const uinthzZohB = BigInt("773")
		const stringHVDn05D = await WolfStakingRewardsyIZz21.name.call({from: accounts[0]});
		const addresstNQHKn4 = await WolfStakingRewardsyIZz21.updateReward.call(addresshemIbxM, uintMoqOBei, {from: accounts[3]});
		const uint256CwHm5UG = await WolfStakingRewardsyIZz21.lastTimeRewardApplicable.call(uinthzZohB, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtZYxG4b = "sPdYEBUr6mJaXDuawegMjNdwtWBvfOW4ge9ts"
		const stringGL2M3wI = "zWhkQnANvbS8hIM7"
		const uintGbrh20 = BigInt("90")
		const WolfStakingRewardsK129nyS = await WolfStakingRewards.new(stringtZYxG4b, stringGL2M3wI, uintGbrh20, {from: accounts[3]});
		const uinth2PLlsW = BigInt("544")
		const uintx8Lbw1K = BigInt("1534")
		const uintti0ki4 = BigInt("1749")
		const uintTs18mDm = BigInt("1293")
		const addressSs8y7p = accounts[4]
		const uintquZa47g = BigInt("1780")
		const addresszGGb00 = accounts[0]
		const uint256JMsH45s = await WolfStakingRewardsK129nyS.exit.call(uinth2PLlsW, {from: accounts[4]});
		const uint256VX90bfq = await WolfStakingRewardsK129nyS.withdrawRemainingBalance.call(uintti0ki4, uintx8Lbw1K, {from: accounts[3]});
		const addresszlv1drF = await WolfStakingRewardsK129nyS.updateReward.call(addressSs8y7p, uintTs18mDm, {from: accounts[3]});
		const uint8W9NvCyq = await WolfStakingRewardsK129nyS.decimals.call({from: accounts[1]});
		const uint256hb7loyU = await WolfStakingRewardsK129nyS.balanceOfPerPool.call(addresszGGb00, uintquZa47g, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcFsw6y = "z21jp8kkuxqKJwOpUWknA8OHRj87rIULdsvKXjshn4UDAVELm4TT7q"
		const stringwE8KjQg = "mUziSvxvvnpj54"
		const uintTohrgl = BigInt("144")
		const WolfStakingRewardsIcmdieh = await WolfStakingRewards.new(stringcFsw6y, stringwE8KjQg, uintTohrgl, {from: accounts[4]});
		const uintn06Zsbt = BigInt("1853")
		const uintMOHNbiN = BigInt("899")
		const uintIL9PrXp = BigInt("192")
		const uint256YiKiKm = await WolfStakingRewardsIcmdieh.getRewardForDuration.call(uintn06Zsbt, {from: accounts[2]});
		await WolfStakingRewardsIcmdieh.onlyOwner.call({from: accounts[1]});
		const string4hEn1K = await WolfStakingRewardsIcmdieh.symbol.call({from: accounts[4]});
		const uint256TKnSv6W = await WolfStakingRewardsIcmdieh.stake.call(uintIL9PrXp, uintMOHNbiN, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressfuCWnrF = accounts[2]
		const addressMU0aVPT = accounts[1]
		const addressFUCDCYK = accounts[4]
		const WolfStakingRewardsgkEMeie = await WolfStakingRewards.new(addressfuCWnrF, addressMU0aVPT, addressFUCDCYK, {from: accounts[3]});
		const uinthhAg6fp = BigInt("1270")
		const uintTdpvIFI = BigInt("0")
		const uinttaOXxlQ = BigInt("458")
		const addressNOAu9Xp = accounts[0]
		const uintJOe2zDT = BigInt("603")
		const uinttkflOq = BigInt("1825")
		const uint256Wp4ybI = await WolfStakingRewardsgkEMeie.withdraw.call(uintTdpvIFI, uinthhAg6fp, {from: accounts[1]});
		const uint256D4qRz97 = await WolfStakingRewardsgkEMeie.earned.call(addressNOAu9Xp, uinttaOXxlQ, {from: accounts[4]});
		const uint256arrayrmViWgk = await WolfStakingRewardsgkEMeie.updateNotifyRewardAmount.call(uintJOe2zDT, {from: accounts[5]});
		const uint256BG8rCGS = await WolfStakingRewardsgkEMeie.exit.call(uinttkflOq, {from: accounts[0]});

		await expect(WolfStakingRewardsgkEMeie.withdraw.call(uintTdpvIFI, uinthhAg6fp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringb9tTf1i = "Bo9GBWqvmKRQcMQy8trLzhxDUO9FkHCzNjc16ixwa6Bl"
		const stringrMuG245 = "IS8zdm47YNVPcLL7d"
		const uintIaD9JSc = BigInt("8")
		const WolfStakingRewardsKMdNyKG = await WolfStakingRewards.new(stringb9tTf1i, stringrMuG245, uintIaD9JSc, {from: accounts[3]});
		const uintY07B765 = BigInt("790")
		const uintX1ukDUU = BigInt("1088")
		const uintdDdbkaU = await WolfStakingRewardsKMdNyKG.getReward.call(uintY07B765, {from: accounts[4]});
		const stringj6lEDU6 = await WolfStakingRewardsKMdNyKG.symbol.call({from: accounts[2]});
		const uint256BGitb7 = await WolfStakingRewardsKMdNyKG.exit.call(uintX1ukDUU, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringdWu31qH = "C3iRCcYf8zlqgQDG5YlRbBJSbIy48oDwrz"
		const string5Y3TIE = "LrFSyGHIBhk5hlyoBVq4Ua3wVTbkr15GwFfV1HGAPtz5Svgy2Cim2US4pJzMRV7eCb97b7YjbAIns"
		const uintJegyNlr = BigInt("255")
		const WolfStakingRewardsy3VJPkn = await WolfStakingRewards.new(stringdWu31qH, string5Y3TIE, uintJegyNlr, {from: accounts[0]});
		const uinta7sTjLK = BigInt("1103")
		const uintxbxA3Fm = BigInt("676")
		const addressr5ZEoll = accounts[5]
		const uint256Sfp7ZsR = await WolfStakingRewardsy3VJPkn.rewardPerToken.call(uinta7sTjLK, {from: accounts[5]});
		await WolfStakingRewardsy3VJPkn.onlyRewardsDistribution.call({from: accounts[1]});
		const stringvV7wKB = await WolfStakingRewardsy3VJPkn.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Dq8ZkFt = await WolfStakingRewardsy3VJPkn.balanceOfPerPool.call(addressr5ZEoll, uintxbxA3Fm, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcfLvWSr = "DmDb"
		const stringrz6F7sV = "3H7AQQXtgUVXIqCWnUnimjw2fAOp1YwGE87C2gPxFk1NDfj90W"
		const uintkonNT4S = BigInt("73")
		const WolfStakingRewardshsVIFAr = await WolfStakingRewards.new(stringcfLvWSr, stringrz6F7sV, uintkonNT4S, {from: accounts[1]});
		const uintAAvERJ = BigInt("470")
		const uintjyCDSi = BigInt("440")
		const uintpofVCk = BigInt("1084")
		const uintRA0H5mt = BigInt("649")
		const uintJmfXPK = BigInt("1769")
		const uintV4jwa16 = BigInt("1398")
		const addressnKya2Nb = accounts[0]
		const uint256f6AXRi = await WolfStakingRewardshsVIFAr.withdrawRemainingBalance.call(uintjyCDSi, uintAAvERJ, {from: accounts[2]});
		const uint256T9NizS = await WolfStakingRewardshsVIFAr.lastTimeRewardApplicable.call(uintpofVCk, {from: accounts[0]});
		const uint256RnI7926 = await WolfStakingRewardshsVIFAr.withdraw.call(uintJmfXPK, uintRA0H5mt, {from: "0x0000000000000000000000000000000000000001"});
		const uint256qO4HVbe = await WolfStakingRewardshsVIFAr.earned.call(addressnKya2Nb, uintV4jwa16, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzGkezKi = "V"
		const stringnGXVMO = "aP3WGsLISqjOuyYmYvYstqLcA0gBNhFZszYBk"
		const uintIxlFHmB = BigInt("95")
		const WolfStakingRewardsrhge8IQ = await WolfStakingRewards.new(stringzGkezKi, stringnGXVMO, uintIxlFHmB, {from: accounts[3]});
		const uintZUvBCFt = BigInt("159")
		const uintu1TpL0A = BigInt("1170")
		const uintdlqIVVM = BigInt("124")
		const uintZojpZFG = BigInt("613")
		const uintI6PiC7p = BigInt("101")
		const uint256arrayBNE0GUF = await WolfStakingRewardsrhge8IQ.updateNotifyRewardAmount.call(uintZUvBCFt, {from: accounts[0]});
		const uint256wss4Xfx = await WolfStakingRewardsrhge8IQ.withdrawRemainingBalance.call(uintdlqIVVM, uintu1TpL0A, {from: accounts[1]});
		const uint256jtKS2Uu = await WolfStakingRewardsrhge8IQ.withdrawRemainingBalance.call(uintI6PiC7p, uintZojpZFG, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringgwhGL5O = "bfTixtC2fRNKP3"
		const string6Btgui = "HWRabgd2JsChhud"
		const uintLmvsn8Y = BigInt("88")
		const WolfStakingRewardsElHDJWu = await WolfStakingRewards.new(stringgwhGL5O, string6Btgui, uintLmvsn8Y, {from: accounts[3]});
		const uintmV3kz59 = BigInt("1799")
		const uintCh58Jza = BigInt("1105")
		const uintj4JDtmw = BigInt("1628")
		const addresstaF9grp = accounts[2]
		await WolfStakingRewardsElHDJWu.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256xHNKDhv = await WolfStakingRewardsElHDJWu.withdrawRemainingBalance.call(uintCh58Jza, uintmV3kz59, {from: accounts[4]});
		const uint256xriDEE = await WolfStakingRewardsElHDJWu.earned.call(addresstaF9grp, uintj4JDtmw, {from: accounts[0]});
	});
})