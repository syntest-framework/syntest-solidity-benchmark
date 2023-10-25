const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressz2Kc695 = "0x0000000000000000000000000000000000000001"
		const addressYBzWwx = accounts[1]
		const addressMsFEqMH = accounts[0]
		const BACMARSLPTOKENPoolI72Yvu = await BACMARSLPTOKENPool.new(addressz2Kc695, addressYBzWwx, addressMsFEqMH, {from: accounts[5]});
		const uintdqDqiMf = BigInt("1072")
		await BACMARSLPTOKENPoolI72Yvu.getReward.call({from: accounts[3]});
		const uint256n2dXSke = await BACMARSLPTOKENPoolI72Yvu.notifyRewardAmount.call(uintdqDqiMf, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolI72Yvu.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringw1S2YY = "ap156fcwVMA"
		const stringLlJnrPr = "OcMg1VymkjwwCioU56dfHimBMohMNMB0Gg98WBRoJYaqIjV7f9i3aQxslvMia"
		const uintcVgDUjv = BigInt("136")
		const BACMARSLPTOKENPoolYwawuli = await BACMARSLPTOKENPool.new(stringw1S2YY, stringLlJnrPr, uintcVgDUjv, {from: accounts[0]});
		const addresstYPKzvC = accounts[0]
		const addresswUEumoT = accounts[5]
		const uint256aFYAegc = await BACMARSLPTOKENPoolYwawuli.earned.call(addresstYPKzvC, {from: accounts[2]});
		const uint256s9F2zZ = await BACMARSLPTOKENPoolYwawuli.balanceOf.call(addresswUEumoT, {from: accounts[1]});
		await BACMARSLPTOKENPoolYwawuli.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressEBKaNAn = accounts[0]
		const addresswoSrXt4 = accounts[1]
		const addresszSdJQKO = accounts[0]
		const BACMARSLPTOKENPoolwWeY3G7 = await BACMARSLPTOKENPool.new(addressEBKaNAn, addresswoSrXt4, addresszSdJQKO, {from: "0x0000000000000000000000000000000000000001"});
		const addressO4QdSVz = accounts[2]
		const addressbHecFuJ = accounts[2]
		const uint256S2JhA7j = await BACMARSLPTOKENPoolwWeY3G7.totalSupply.call({from: accounts[2]});
		await BACMARSLPTOKENPoolwWeY3G7.exit.call({from: accounts[2]});
		const addressv07JnDX = await BACMARSLPTOKENPoolwWeY3G7.updateReward.call(addressO4QdSVz, {from: accounts[3]});
		const addressDLeyg8c = await BACMARSLPTOKENPoolwWeY3G7.updateReward.call(addressbHecFuJ, {from: accounts[3]});
		await BACMARSLPTOKENPoolwWeY3G7.getReward.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRSjsY3f = "JGsu6CtlY5E7EY8vA4sAH1WRLvIOI5khAhztGQ7R8FP"
		const stringU1KteEK = "Minb"
		const uintbwvUBji = BigInt("15")
		const BACMARSLPTOKENPoolpoS8Qnt = await BACMARSLPTOKENPool.new(stringRSjsY3f, stringU1KteEK, uintbwvUBji, {from: accounts[4]});
		const uintLJWEVwx = BigInt("865")
		const uintKDMCD74 = BigInt("1681")
		const stringp02KaKb = await BACMARSLPTOKENPoolpoS8Qnt.name.call({from: accounts[5]});
		const uint256LMkHYlr = await BACMARSLPTOKENPoolpoS8Qnt.withdraw.call(uintLJWEVwx, {from: "0x0000000000000000000000000000000000000001"});
		const uint256uoZ3FvT = await BACMARSLPTOKENPoolpoS8Qnt.notifyRewardAmount.call(uintKDMCD74, {from: "0x0000000000000000000000000000000000000001"});
		const stringfefE1Li = await BACMARSLPTOKENPoolpoS8Qnt.symbol.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuX8C4F = "vG1swOG7dlD"
		const stringAXzIp5a = "7hKSPsG6m7ad8C9vJbHKOBOvksXr6xjJhWl1Glamcvs59GkLgV0SQAcl3KwlRvMq7ZgVx3Q31RTnj"
		const uintTI6jmkl = BigInt("34")
		const BACMARSLPTOKENPoolgJjJPlb = await BACMARSLPTOKENPool.new(stringuX8C4F, stringAXzIp5a, uintTI6jmkl, {from: accounts[3]});
		const stringJPHjuSw = await BACMARSLPTOKENPoolgJjJPlb.symbol.call({from: accounts[2]});
		const uint256n16IzHN = await BACMARSLPTOKENPoolgJjJPlb.getRewardForDuration.call({from: accounts[3]});
		const uint8rYjJgZI = await BACMARSLPTOKENPoolgJjJPlb.decimals.call({from: accounts[4]});
		const uint8QWG325 = await BACMARSLPTOKENPoolgJjJPlb.decimals.call({from: accounts[4]});
		await BACMARSLPTOKENPoolgJjJPlb.exit.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCnn1CHf = "ulY2pBMJ0JXubBzXHH9C8HZlD"
		const stringfPHBUrv = "ByhrBrwd1Ik4UmFxDtu24oQu8FRJ8ffHi4Vtz2n4cUlJkfulhmy2PUiRP8SIbEPjmkmWLwHJQgHt4DsUAJO5fCvmdGdi"
		const uintJHqZBDx = BigInt("18")
		const BACMARSLPTOKENPoolqdnxD8B = await BACMARSLPTOKENPool.new(stringCnn1CHf, stringfPHBUrv, uintJHqZBDx, {from: accounts[4]});
		const uintyELvXaq = BigInt("787")
		const uintJDMuZBn = BigInt("122")
		const uint256BVSjBzP = await BACMARSLPTOKENPoolqdnxD8B.notifyRewardAmount.call(uintyELvXaq, {from: accounts[2]});
		const stringaA8wADr = await BACMARSLPTOKENPoolqdnxD8B.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256P4o8zL7 = await BACMARSLPTOKENPoolqdnxD8B.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPoolqdnxD8B.nonReentrant.call({from: accounts[5]});
		const uint256UAhlhyJ = await BACMARSLPTOKENPoolqdnxD8B.stake.call(uintJDMuZBn, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYpHaTa0 = "4vPPls0sviKBzEPSpbupFyJ"
		const stringKnms22b = "XLyYEjOxNOE8X22iVoOzW4NSU6l5mHDQbPlnqXsA2q4ApHxKVt5PnVfafvYAIfjj8OA2TsdIDrGIAN5RlTbyV5LKHCuz4DbfmIr"
		const uintI9jXpaI = BigInt("205")
		const BACMARSLPTOKENPoolPyQZXxE = await BACMARSLPTOKENPool.new(stringYpHaTa0, stringKnms22b, uintI9jXpaI, {from: accounts[4]});
		const addresslgWvJSX = accounts[4]
		await BACMARSLPTOKENPoolPyQZXxE.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const stringxCmyyTi = await BACMARSLPTOKENPoolPyQZXxE.name.call({from: accounts[1]});
		const uint8Uz3e4xs = await BACMARSLPTOKENPoolPyQZXxE.decimals.call({from: accounts[3]});
		const uint256eA53lxi = await BACMARSLPTOKENPoolPyQZXxE.earned.call(addresslgWvJSX, {from: accounts[0]});
		const uint8kh0hIg = await BACMARSLPTOKENPoolPyQZXxE.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLwz2ho = "S2I4FDSTioGp2dD14fNwzAvtodn5yzzdikHeAg2AJ3mAKXYcFZUDzbnegWyTUz5duFISvYWxLvwXda13OM9SVLK0ux9"
		const stringaOiYpNA = "wwANlIR1tepEDm2D87qsl4k1KGyUZTUAD4F2FQlk7zJRC6JWXlH7M5NYzgB9g4JlSxTDCP52R6BJTW0DZ7nSkGGvOf9"
		const uintGeeuY64 = BigInt("168")
		const BACMARSLPTOKENPoolFLgUhpv = await BACMARSLPTOKENPool.new(stringLwz2ho, stringaOiYpNA, uintGeeuY64, {from: accounts[4]});
		const uintIapaF9x = BigInt("458")
		const uint8M8iFyl2 = await BACMARSLPTOKENPoolFLgUhpv.decimals.call({from: accounts[5]});
		const uint256CcZ7Utj = await BACMARSLPTOKENPoolFLgUhpv.notifyRewardAmount.call(uintIapaF9x, {from: accounts[2]});
		await BACMARSLPTOKENPoolFLgUhpv.nonReentrant.call({from: accounts[4]});
		await BACMARSLPTOKENPoolFLgUhpv.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256I6eLcm3 = await BACMARSLPTOKENPoolFLgUhpv.rewardPerToken.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUi4yjj3 = "Il4z7hW5BSdUuW1vaLwpvYybVbV3rBU5BazXy4WgJSIWIYNTOJ36LRlJlclmc"
		const stringXXgk65k = "U4uPot6KB"
		const uintTBYqIyo = BigInt("226")
		const BACMARSLPTOKENPoolmoRoz0R = await BACMARSLPTOKENPool.new(stringUi4yjj3, stringXXgk65k, uintTBYqIyo, {from: "0x0000000000000000000000000000000000000001"});
		const uintOxP4DCz = BigInt("1656")
		await BACMARSLPTOKENPoolmoRoz0R.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const stringTurMZCX = await BACMARSLPTOKENPoolmoRoz0R.symbol.call({from: accounts[2]});
		const uint256zuadHpr = await BACMARSLPTOKENPoolmoRoz0R.notifyRewardAmount.call(uintOxP4DCz, {from: accounts[2]});
		const uint256mdmI9D = await BACMARSLPTOKENPoolmoRoz0R.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrOdGRo = "HR3AF2mPul6WWx6PnA3okyjilPvSO"
		const stringPa9fZo = "mYRjQy2CH5EUQS5qj4orUPXyYRHke4lH2lfFDAstE5mDCt1HkNeQ1SbXhCjghei"
		const uinttFnWhXC = BigInt("56")
		const BACMARSLPTOKENPoolZC2R5ar = await BACMARSLPTOKENPool.new(stringrOdGRo, stringPa9fZo, uinttFnWhXC, {from: accounts[5]});
		const uintlAUsR08 = BigInt("1948")
		const byteiqXx5Cl = "0x0e100212051d16090f0315110c16180f0f0a1414141404180e081e1e0f0a1d0a"
		const byteIbwT1f3 = "0x1e021a040617000a06140b0b0e0a0a18041a01080212071f1e0f111510080b12"
		const uintTmHu7eR = BigInt("190")
		const uintTZFBzXn = BigInt("53")
		const uintrmywB48 = BigInt("1955")
		await BACMARSLPTOKENPoolZC2R5ar.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256slnk67N = await BACMARSLPTOKENPoolZC2R5ar.notifyRewardAmount.call(uintlAUsR08, {from: accounts[3]});
		const uint256KGxO1RA = await BACMARSLPTOKENPoolZC2R5ar.stakeWithPermit.call(uintrmywB48, uintTZFBzXn, uintTmHu7eR, byteIbwT1f3, byteiqXx5Cl, {from: accounts[2]});
		const uint256RZF6WJ0 = await BACMARSLPTOKENPoolZC2R5ar.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint8cVNx6b = await BACMARSLPTOKENPoolZC2R5ar.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressQT8Q6O2 = accounts[2]
		const addressNe3CxD9 = "0x0000000000000000000000000000000000000001"
		const addressOBda6av = accounts[2]
		const BACMARSLPTOKENPoolH1LEm3c = await BACMARSLPTOKENPool.new(addressQT8Q6O2, addressNe3CxD9, addressOBda6av, {from: accounts[4]});
		const stringmmNdYhd = await BACMARSLPTOKENPoolH1LEm3c.name.call({from: accounts[1]});
		await BACMARSLPTOKENPoolH1LEm3c.exit.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolH1LEm3c.name.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressS0KEGve = "0x0000000000000000000000000000000000000001"
		const addressFvzmUfk = accounts[1]
		const addressnyQGiAz = accounts[0]
		const BACMARSLPTOKENPoolI72Yvu = await BACMARSLPTOKENPool.new(addressS0KEGve, addressFvzmUfk, addressnyQGiAz, {from: accounts[5]});
		const addressYaiD5tz = accounts[0]
		const uintgy9kmNN = BigInt("1718")
		const uint256DTrxwRo = await BACMARSLPTOKENPoolI72Yvu.earned.call(addressYaiD5tz, {from: accounts[2]});
		const uint256AvZADWT = await BACMARSLPTOKENPoolI72Yvu.withdraw.call(uintgy9kmNN, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolI72Yvu.getReward.call({from: accounts[3]});

		assert.equal(uint256DTrxwRo, BigInt("0"))
		await expect(BACMARSLPTOKENPoolI72Yvu.withdraw.call(uintgy9kmNN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressBxlSQA8 = "0x0000000000000000000000000000000000000001"
		const addressVmgpAZs = accounts[1]
		const addressT6Ks2j = accounts[0]
		const BACMARSLPTOKENPoolI72Yvu = await BACMARSLPTOKENPool.new(addressBxlSQA8, addressVmgpAZs, addressT6Ks2j, {from: accounts[5]});
		const byteLcvbA2P = "0x171010071a1c070f1e1006091f0f0b171e0f0918160c1b1b04030e130a0e0206"
		const byteJUTkWJ5 = "0x040c0d17160d061a0c201c0919141b020601060d1513141407120f181c1e1617"
		const uintGirExtw = BigInt("36")
		const uintRsQ7wRQ = BigInt("21")
		const uintBVXSjSD = BigInt("412")
		const uintmBu7ybN = BigInt("1100")
		const uint256doyWma = await BACMARSLPTOKENPoolI72Yvu.stakeWithPermit.call(uintBVXSjSD, uintRsQ7wRQ, uintGirExtw, byteJUTkWJ5, byteLcvbA2P, {from: accounts[1]});
		const uint256n2dXSke = await BACMARSLPTOKENPoolI72Yvu.notifyRewardAmount.call(uintmBu7ybN, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolI72Yvu.stakeWithPermit.call(uintBVXSjSD, uintRsQ7wRQ, uintGirExtw, byteJUTkWJ5, byteLcvbA2P, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqvzHhOg = "0xinw9OQSw2NvtlvxtuyI5L4vgatTipTHgAu"
		const stringY06vcQm = "hmAQcafB9oPrN19v1qBOpmilgWvkPrXai7GH914iHyNBl7eq6"
		const uintgHB1yk9 = BigInt("135")
		const BACMARSLPTOKENPoolxl5DYzw = await BACMARSLPTOKENPool.new(stringqvzHhOg, stringY06vcQm, uintgHB1yk9, {from: accounts[4]});
		const uintVcZsn3w = BigInt("696")
		const uint256IC1rFsl = await BACMARSLPTOKENPoolxl5DYzw.withdraw.call(uintVcZsn3w, {from: accounts[4]});
		const uint256dFeZAfQ = await BACMARSLPTOKENPoolxl5DYzw.getRewardForDuration.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const address4lEDxh = "0x0000000000000000000000000000000000000001"
		const addressvvxnMi7 = accounts[1]
		const addressqdmtw8n = accounts[0]
		const BACMARSLPTOKENPoolI72Yvu = await BACMARSLPTOKENPool.new(address4lEDxh, addressvvxnMi7, addressqdmtw8n, {from: accounts[5]});
		const byteBibiT1L = "0x171010071a1c070f1e1006091f0f0b171e0f0918160c1b1b04030e130a0e0208"
		const byteKns79K = "0x040c0d17160d061a0c201c0919141b020601060d1513141407120f181c1e1617"
		const uintkjGhCGw = BigInt("36")
		const uintTWYxpSA = BigInt("21")
		const uintImqJMTp = BigInt("412")
		const uintrUHxrIW = BigInt("1100")
		await BACMARSLPTOKENPoolI72Yvu.exit.call({from: accounts[0]});
		const uint256doyWma = await BACMARSLPTOKENPoolI72Yvu.stakeWithPermit.call(uintImqJMTp, uintTWYxpSA, uintkjGhCGw, byteKns79K, byteBibiT1L, {from: accounts[1]});
		const uint256n2dXSke = await BACMARSLPTOKENPoolI72Yvu.notifyRewardAmount.call(uintrUHxrIW, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolI72Yvu.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresswDE4Zs = "0x0000000000000000000000000000000000000001"
		const addressmqbnU8j = accounts[1]
		const addressQ0RjlJC = accounts[0]
		const BACMARSLPTOKENPoolI72Yvu = await BACMARSLPTOKENPool.new(addresswDE4Zs, addressmqbnU8j, addressQ0RjlJC, {from: accounts[5]});
		const addressNck1t3 = accounts[1]
		const uint256HEt0AKT = await BACMARSLPTOKENPoolI72Yvu.totalSupply.call({from: accounts[3]});
		const uint256DTrxwRo = await BACMARSLPTOKENPoolI72Yvu.earned.call(addressNck1t3, {from: accounts[2]});
		await BACMARSLPTOKENPoolI72Yvu.getReward.call({from: accounts[3]});

		assert.equal(uint256DTrxwRo, BigInt("0"))
		assert.equal(uint256HEt0AKT, BigInt("0"))
		await expect(BACMARSLPTOKENPoolI72Yvu.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresskZxrY0Z = "0x0000000000000000000000000000000000000001"
		const addressI3LyJ0w = accounts[1]
		const addressm3ud0vQ = accounts[0]
		const BACMARSLPTOKENPoolI72Yvu = await BACMARSLPTOKENPool.new(addresskZxrY0Z, addressI3LyJ0w, addressm3ud0vQ, {from: accounts[5]});
		const uint256RLlt96 = await BACMARSLPTOKENPoolI72Yvu.getRewardForDuration.call({from: accounts[1]});
		await BACMARSLPTOKENPoolI72Yvu.getReward.call({from: accounts[3]});

		assert.equal(uint256RLlt96, BigInt("0"))
		await expect(BACMARSLPTOKENPoolI72Yvu.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIG7fvGt = "dWSAlvTbs5xGVuDYdSEUR7SKhiD8DEkVK1c2"
		const stringxR4YgwH = "Wp2dLGtHg9hOtnqo0wTi9FiR"
		const uintt59AmKg = BigInt("230")
		const BACMARSLPTOKENPoolh2Gspkc = await BACMARSLPTOKENPool.new(stringIG7fvGt, stringxR4YgwH, uintt59AmKg, {from: accounts[1]});
		const addressw3li4WM = accounts[1]
		const uint256F7c8tWD = await BACMARSLPTOKENPoolh2Gspkc.rewardPerToken.call({from: accounts[0]});
		const uint256fRpRPha = await BACMARSLPTOKENPoolh2Gspkc.rewardPerToken.call({from: accounts[4]});
		const uint256pKpbzq5 = await BACMARSLPTOKENPoolh2Gspkc.earned.call(addressw3li4WM, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressKIV533T = "0x0000000000000000000000000000000000000001"
		const addresskW1gm6d = accounts[1]
		const addressB25llTR = accounts[0]
		const BACMARSLPTOKENPoolI72Yvu = await BACMARSLPTOKENPool.new(addressKIV533T, addresskW1gm6d, addressB25llTR, {from: accounts[5]});
		const uintWEZrKY1 = BigInt("930")
		const addressEQPMYIL = accounts[1]
		const addressrtWnrKO = "0x0000000000000000000000000000000000000001"
		const uint256nubolrM = await BACMARSLPTOKENPoolI72Yvu.stake.call(uintWEZrKY1, {from: accounts[2]});
		const uint256DTrxwRo = await BACMARSLPTOKENPoolI72Yvu.earned.call(addressEQPMYIL, {from: accounts[2]});
		const uint256Z8Ok6zX = await BACMARSLPTOKENPoolI72Yvu.balanceOf.call(addressrtWnrKO, {from: accounts[3]});
		await BACMARSLPTOKENPoolI72Yvu.getReward.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolI72Yvu.stake.call(uintWEZrKY1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCMrYPUu = "nMG0DCSuYcFGmo8ywzHuRk3J8bvq"
		const stringnArcdIN = "X"
		const uintWmgXaDT = BigInt("33")
		const BACMARSLPTOKENPoolm8d9vnZ = await BACMARSLPTOKENPool.new(stringCMrYPUu, stringnArcdIN, uintWmgXaDT, {from: accounts[3]});
		const uintJeTS5N = BigInt("996")
		const uintNVrxzQm = BigInt("941")
		const uint256VIfJ0Dx = await BACMARSLPTOKENPoolm8d9vnZ.stake.call(uintJeTS5N, {from: accounts[3]});
		const uint256S4Rv8u = await BACMARSLPTOKENPoolm8d9vnZ.stake.call(uintNVrxzQm, {from: accounts[2]});
		const uint2567gVFA2 = await BACMARSLPTOKENPoolm8d9vnZ.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtvQ4C46 = "AgzzOcoDbqa5lW9Jf7sgaVHyw4tRXSRM"
		const stringVeR0Jq = "9Hzt0zPq3Z2KhE7tXoQn9jIMJncWnWhkPMz6XYIlOl6kVAnmM8BiW8kTRgxDg6UdTQkMm7"
		const uintMMdm29 = BigInt("252")
		const BACMARSLPTOKENPoolU8fYsum = await BACMARSLPTOKENPool.new(stringtvQ4C46, stringVeR0Jq, uintMMdm29, {from: accounts[3]});
		const addresstW55Vw8 = accounts[2]
		const uint256Y1HwcqL = await BACMARSLPTOKENPoolU8fYsum.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolU8fYsum.getReward.call({from: accounts[1]});
		const uint256xtCcMZD = await BACMARSLPTOKENPoolU8fYsum.earned.call(addresstW55Vw8, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string546iHX = "PCAUlcG4mdsn7ukE7EpzCddNw8BNnB5c6dDSQfixEebPA3izdiemMiOzQNCzfbltaeaNgSs41JlMQfDXhtNSmF"
		const stringwG6t1iH = "lBcJWorD91Xr16Ie0eMQg9VWERNWwysb33SelHWu9W3r7SRiJQuhToCvOI1BXNNiPpM7kwhW367"
		const uintXhbosuF = BigInt("120")
		const BACMARSLPTOKENPoolms4MS1 = await BACMARSLPTOKENPool.new(string546iHX, stringwG6t1iH, uintXhbosuF, {from: accounts[0]});
		const uintb5mFZjz = BigInt("886")
		const uintq4uQSs3 = BigInt("66")
		const stringuF6mo5f = await BACMARSLPTOKENPoolms4MS1.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256WWgKttQ = await BACMARSLPTOKENPoolms4MS1.stake.call(uintb5mFZjz, {from: accounts[0]});
		const uint256V7sDRvu = await BACMARSLPTOKENPoolms4MS1.withdraw.call(uintq4uQSs3, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyRFSm3M = "fkMF5WjA"
		const stringVFvcclT = "ZqhCiaeaAwAaLxDvC1fFyE1Us5WUeh"
		const uintONs4bqh = BigInt("145")
		const BACMARSLPTOKENPoolnXyHlk = await BACMARSLPTOKENPool.new(stringyRFSm3M, stringVFvcclT, uintONs4bqh, {from: accounts[1]});
		const byteedW1s7D = "0x120d1f1d191c1a1d161b110a180312062007140016081920120c14140b161f19"
		const bytehEbRMb = "0x09081505130f01121314110e1e151e1e161a0306100816121f15030807061c1b"
		const uintAoeee2D = BigInt("21")
		const uintwqgQvIU = BigInt("1825")
		const uintAnPVu3u = BigInt("59")
		const uint256aVSddaP = await BACMARSLPTOKENPoolnXyHlk.stakeWithPermit.call(uintAnPVu3u, uintwqgQvIU, uintAoeee2D, bytehEbRMb, byteedW1s7D, {from: accounts[5]});
		await BACMARSLPTOKENPoolnXyHlk.exit.call({from: accounts[2]});
		const stringjtdZjrI = await BACMARSLPTOKENPoolnXyHlk.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfCgHwuc = "KVuky7I3uOW4A755jtjNahqO0TpnX6xxDPfgqKIMmI6ERaPf7fk9D7vKypNIw"
		const stringvwkZII5 = "Mw23koHQ3mk3LnM1lX2MuQS6mc9wJfDUcONYqUFTYG1IQxOODKs2sQ8YEjkTbnsOB338jyIuD5yGUzG"
		const uintf2qXqf8 = BigInt("166")
		const BACMARSLPTOKENPooldZ46WnZ = await BACMARSLPTOKENPool.new(stringfCgHwuc, stringvwkZII5, uintf2qXqf8, {from: accounts[0]});
		const addressfFIjvgh = accounts[2]
		const uint8s25zQKX = await BACMARSLPTOKENPooldZ46WnZ.decimals.call({from: accounts[4]});
		const addresshtDA8Iq = await BACMARSLPTOKENPooldZ46WnZ.updateReward.call(addressfFIjvgh, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressOAAsYIp = "0x0000000000000000000000000000000000000001"
		const addressHcAzQ6V = accounts[1]
		const addresssbpucpr = accounts[0]
		const BACMARSLPTOKENPoolI72Yvu = await BACMARSLPTOKENPool.new(addressOAAsYIp, addressHcAzQ6V, addresssbpucpr, {from: accounts[5]});
		const addressN1O51pV = accounts[1]
		const uint256pk1JKex = await BACMARSLPTOKENPoolI72Yvu.balanceOf.call(addressN1O51pV, {from: accounts[0]});
		await BACMARSLPTOKENPoolI72Yvu.nonReentrant.call({from: accounts[4]});
		await BACMARSLPTOKENPoolI72Yvu.getReward.call({from: accounts[3]});

		assert.equal(uint256pk1JKex, BigInt("0"))
		await expect(BACMARSLPTOKENPoolI72Yvu.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringj0GPj63 = "NAgG"
		const stringcbICqwH = "O8usNwALOn5KjYhxQ"
		const uintciOhUv = BigInt("143")
		const BACMARSLPTOKENPoolRK9LSZo = await BACMARSLPTOKENPool.new(stringj0GPj63, stringcbICqwH, uintciOhUv, {from: accounts[2]});
		await BACMARSLPTOKENPoolRK9LSZo.getReward.call({from: accounts[0]});
		const uint256bURvqtl = await BACMARSLPTOKENPoolRK9LSZo.totalSupply.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCh1srT3 = "LGIwYWIxxqNgRw6L5wcFMKb6LoBcFvnIMCm8snkHJskKVKqJ1N7HP"
		const stringaPvusRv = "iTlk4IS2fEhhY0jzhC7HKW1U1gm1Zxwbw4dgR1dPxeImpaQ67jy"
		const uintAcDsCTw = BigInt("130")
		const BACMARSLPTOKENPoolh1SfKpN = await BACMARSLPTOKENPool.new(stringCh1srT3, stringaPvusRv, uintAcDsCTw, {from: accounts[5]});
		const addressi0c2Hjc = accounts[3]
		const addressPJJsZw = accounts[3]
		await BACMARSLPTOKENPoolh1SfKpN.onlyRewardsDistribution.call({from: accounts[0]});
		await BACMARSLPTOKENPoolh1SfKpN.exit.call({from: accounts[0]});
		const uint256swcTDSD = await BACMARSLPTOKENPoolh1SfKpN.balanceOf.call(addressi0c2Hjc, {from: accounts[3]});
		const uint256UvZSvVO = await BACMARSLPTOKENPoolh1SfKpN.balanceOf.call(addressPJJsZw, {from: accounts[5]});
		const stringjzytbHh = await BACMARSLPTOKENPoolh1SfKpN.symbol.call({from: accounts[1]});
		await BACMARSLPTOKENPoolh1SfKpN.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyiVjtBp = "rHiFxjM7jInal6sfgF5u2JDm8tiU4cDjyWImmpPm2VqtjxLRzxdop3lE2gvzyWm7pfe7kREIJFdnsoimsp26iNQvoRmm"
		const stringkjzlO4Y = "BIfcgDoRFNzQrIj8a6CUEta"
		const uinteTnNFz6 = BigInt("4")
		const BACMARSLPTOKENPoolkK4FgRc = await BACMARSLPTOKENPool.new(stringyiVjtBp, stringkjzlO4Y, uinteTnNFz6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pHN68Mb = await BACMARSLPTOKENPoolkK4FgRc.totalSupply.call({from: accounts[2]});
		const uint256MEcS95k = await BACMARSLPTOKENPoolkK4FgRc.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256tn25MIX = await BACMARSLPTOKENPoolkK4FgRc.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringp6Kuhqq = "KVp5B0oeAP6LmYgpnOzGkcjUcKncfURui2qDGbzyx6zsHahRad"
		const stringSzMuarf = "YDCW40pqgmOlO8VHDsrErMTaCJDP83EiroL"
		const uintaybYfvD = BigInt("228")
		const BACMARSLPTOKENPoolMMtE0vN = await BACMARSLPTOKENPool.new(stringp6Kuhqq, stringSzMuarf, uintaybYfvD, {from: accounts[3]});
		const uintm7NvWf6 = BigInt("1311")
		await BACMARSLPTOKENPoolMMtE0vN.getReward.call({from: accounts[2]});
		const uint8GSwXNOH = await BACMARSLPTOKENPoolMMtE0vN.decimals.call({from: accounts[1]});
		const uint256O0FEWFR = await BACMARSLPTOKENPoolMMtE0vN.stake.call(uintm7NvWf6, {from: accounts[0]});
		await BACMARSLPTOKENPoolMMtE0vN.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRNkkBF5 = "vuVFsdGaUjKGo58A5oHQPr9s1bxOBTJ1XR3Oj9x88Yx5pSlRUA8Qddr7PaIhb2PdogjpJoYI0YnYRKJSKFNg"
		const stringWy15Mmr = "cIM9ak8dNEedGJqff0dkLdU1XReO1yQQVnfYl5X9m4K5MgjuWxiAvSyiXHlWZwhAFyrJh5JHH"
		const uintkY8JdNI = BigInt("249")
		const BACMARSLPTOKENPoolFimxAcM = await BACMARSLPTOKENPool.new(stringRNkkBF5, stringWy15Mmr, uintkY8JdNI, {from: accounts[3]});
		await BACMARSLPTOKENPoolFimxAcM.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256aUbVmX7 = await BACMARSLPTOKENPoolFimxAcM.getRewardForDuration.call({from: accounts[0]});
		await BACMARSLPTOKENPoolFimxAcM.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfPsbBES = "EgLlnGzk9L5zfe"
		const stringXruRvfI = "6tsvMHQ9f8Z5i258TJXaj7c9pskPSAylpYyJp18bx3VAHpYPMF6Tur39HgcRbhIkWxbTy2pkAEnsGS"
		const uintHCEnkmm = BigInt("122")
		const BACMARSLPTOKENPoolXbipl1w = await BACMARSLPTOKENPool.new(stringfPsbBES, stringXruRvfI, uintHCEnkmm, {from: accounts[1]});
		const uintW15o3HS = BigInt("1689")
		await BACMARSLPTOKENPoolXbipl1w.exit.call({from: accounts[4]});
		const uint256qHPSUtQ = await BACMARSLPTOKENPoolXbipl1w.stake.call(uintW15o3HS, {from: accounts[1]});
		await BACMARSLPTOKENPoolXbipl1w.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLptZnG9 = "AO71nwYqN"
		const stringajMvWa = "fUp7w2bHYgxFoB9pLufHnYeGEeNi7TAmmyqDOhRrSOigZd5"
		const uintwMVjqv = BigInt("223")
		const BACMARSLPTOKENPooldysiMJQ = await BACMARSLPTOKENPool.new(stringLptZnG9, stringajMvWa, uintwMVjqv, {from: accounts[2]});
		await BACMARSLPTOKENPooldysiMJQ.exit.call({from: accounts[2]});
		const uint25662Gdot = await BACMARSLPTOKENPooldysiMJQ.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256Ppr1ImS = await BACMARSLPTOKENPooldysiMJQ.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256AgccwVl = await BACMARSLPTOKENPooldysiMJQ.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256DGEsqUo = await BACMARSLPTOKENPooldysiMJQ.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string6KOFFI = "Ud3HWxV1xTTc3JvEZmpdhNVITAcDL2kl59H2Al2JXANHMxnAfjPM676bKlHDvACR7nFditscG33R"
		const stringC9tjun9 = "7hGnYCNwI4oFngjrjCDSHUIAbMwMczQCK4Vp5wMqHndzjAe"
		const uintbEIAohK = BigInt("141")
		const BACMARSLPTOKENPoolJJepLSl = await BACMARSLPTOKENPool.new(string6KOFFI, stringC9tjun9, uintbEIAohK, {from: accounts[1]});
		const addressZaKScQp = accounts[4]
		const byteCMakLh = "0x150d1e0d0c011f190c1808060c180c1c1d140e19140a16040408170304150311"
		const bytezNssDd6 = "0x10080d17070701151b1d0b0406150d13130d152008161f061507120f1d181807"
		const uintWuQ48Mb = BigInt("31")
		const uintcOt82JW = BigInt("1819")
		const uintqOH4GjK = BigInt("1290")
		const uint256vntICR = await BACMARSLPTOKENPoolJJepLSl.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint8w81BF71 = await BACMARSLPTOKENPoolJJepLSl.decimals.call({from: accounts[5]});
		const uint256kDHKjfG = await BACMARSLPTOKENPoolJJepLSl.earned.call(addressZaKScQp, {from: accounts[3]});
		const uint256NDDGkeK = await BACMARSLPTOKENPoolJJepLSl.getRewardForDuration.call({from: accounts[0]});
		const uint256PybGD1M = await BACMARSLPTOKENPoolJJepLSl.stakeWithPermit.call(uintqOH4GjK, uintcOt82JW, uintWuQ48Mb, bytezNssDd6, byteCMakLh, {from: accounts[2]});
		const uint256OukDHnR = await BACMARSLPTOKENPoolJJepLSl.rewardPerToken.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringaG6jwkJ = "hDpX7cVZf3KxRk5twb1ap0ZEpZSMHLYNH2WQVVS4fJSh"
		const stringR5aY6LM = "iDFQnQsJDPGwLYzA1Ty4jx7LQPYhkyZZbFRsgFtOqAosPTKgZwH4MRZcU98Pmov6YLFKAmE3pbNWmTMy5rhODrV3o"
		const uintRIdYvhu = BigInt("59")
		const BACMARSLPTOKENPoolwMHeXoH = await BACMARSLPTOKENPool.new(stringaG6jwkJ, stringR5aY6LM, uintRIdYvhu, {from: "0x0000000000000000000000000000000000000001"});
		const uint1xUZWA = BigInt("1028")
		const uint256Es6ypne = await BACMARSLPTOKENPoolwMHeXoH.rewardPerToken.call({from: accounts[3]});
		await BACMARSLPTOKENPoolwMHeXoH.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256T5l4jDh = await BACMARSLPTOKENPoolwMHeXoH.withdraw.call(uint1xUZWA, {from: accounts[4]});
		const uint256jXsQV7T = await BACMARSLPTOKENPoolwMHeXoH.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256dtIOY1i = await BACMARSLPTOKENPoolwMHeXoH.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnAiYLaz = "zg3auA2W"
		const stringgVLMMiH = "2M3c3mYJbsBiY3kcXsvdFny1yhuu5gmDgTnK1Sqez"
		const uintmatiaNk = BigInt("217")
		const BACMARSLPTOKENPoolmurpXHM = await BACMARSLPTOKENPool.new(stringnAiYLaz, stringgVLMMiH, uintmatiaNk, {from: accounts[2]});
		const uintgRXCdO = BigInt("1692")
		const byteTTiQ2Z = "0x081f091e11191e1e0f1501061b0b09181914021e14051a091f0d0c1f11020116"
		const byteugc6XC = "0x141719131a0c0a071f1d020916041a120111181c0b1c180211091e181d1a1a1a"
		const uintvopjFFP = BigInt("212")
		const uintCb42e6Q = BigInt("370")
		const uintatgot52 = BigInt("1803")
		const stringHgpGxf = await BACMARSLPTOKENPoolmurpXHM.name.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolmurpXHM.getReward.call({from: accounts[2]});
		const uint256cz81sEW = await BACMARSLPTOKENPoolmurpXHM.stake.call(uintgRXCdO, {from: accounts[1]});
		await BACMARSLPTOKENPoolmurpXHM.nonReentrant.call({from: accounts[0]});
		const uint256ibOAEby = await BACMARSLPTOKENPoolmurpXHM.stakeWithPermit.call(uintatgot52, uintCb42e6Q, uintvopjFFP, byteugc6XC, byteTTiQ2Z, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYaixgZ = "js5RRAokW5nAUD3lIZ8ciHn65cRw3lawxy9q0fC9AGSsXUuPfES3EmB6nAj8mtT7TlX"
		const stringm4T4eB = "ugM8B5asbmpC2fbQA2mil23H7KBrRTaUTVjKidEKYxQICn6VEof6OC1vTsmCoEN1PzVipktlAyyVuB7RshsXjmwb9VERy"
		const uintZlKBVtX = BigInt("52")
		const BACMARSLPTOKENPoolSq83VqI = await BACMARSLPTOKENPool.new(stringYaixgZ, stringm4T4eB, uintZlKBVtX, {from: accounts[3]});
		const uint256T3CTnL = await BACMARSLPTOKENPoolSq83VqI.getRewardForDuration.call({from: accounts[0]});
		await BACMARSLPTOKENPoolSq83VqI.onlyRewardsDistribution.call({from: accounts[4]});
		await BACMARSLPTOKENPoolSq83VqI.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtBGz64Q = "s129LdG3pPrwXHcDGu6NVI5GZZvdGUN3CbM9C11yDwXHEULEe8RrZMyenpr89eAKPRbIg2Xpq2oODtKtiiiL1"
		const stringVWP3rSI = "rlfwKaCV2yLmevClDDXljSeG7R2ofbqVBofu6uV3Q3Chx4a3"
		const uintITohQNH = BigInt("54")
		const BACMARSLPTOKENPoolJvXfcgF = await BACMARSLPTOKENPool.new(stringtBGz64Q, stringVWP3rSI, uintITohQNH, {from: accounts[1]});
		const uintQUPhRZB = BigInt("1783")
		const addressSyxd6bk = accounts[1]
		const bytexbj1OW = "0x1b141f071b1b1808170d1a1b161e0e0b0306060f150b19061811100b04041c09"
		const byteY0ss85R = "0x131f1f0f100e0c03170d0a1d080e1b110b09131b0c0e1a04080a201620011d14"
		const uintE5GH6dX = BigInt("96")
		const uintmQvlY3O = BigInt("1741")
		const uintF7DOLTk = BigInt("755")
		const uintn1YvNfj = BigInt("1804")
		const uint256vnpeEp = await BACMARSLPTOKENPoolJvXfcgF.getRewardForDuration.call({from: accounts[0]});
		const uint256twPsXB4 = await BACMARSLPTOKENPoolJvXfcgF.withdraw.call(uintQUPhRZB, {from: accounts[4]});
		const uint256HUW324l = await BACMARSLPTOKENPoolJvXfcgF.balanceOf.call(addressSyxd6bk, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wCFx9FZ = await BACMARSLPTOKENPoolJvXfcgF.stakeWithPermit.call(uintF7DOLTk, uintmQvlY3O, uintE5GH6dX, byteY0ss85R, bytexbj1OW, {from: accounts[5]});
		const uint256TsPIuc = await BACMARSLPTOKENPoolJvXfcgF.stake.call(uintn1YvNfj, {from: accounts[5]});
		await BACMARSLPTOKENPoolJvXfcgF.nonReentrant.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringxaIb3GK = "uG5Cw3jEcWK5XamfC5jspQqIh8wRtIjDYodk2DHyRJ3XTFILaoCfR7rILr0BDVptwboVw4"
		const stringxyRduLJ = "oPqEmUmzL52eJvDU0iEs6UDm4k6YVICHrMhnl6JNLB7jsuQu1y4qbKwyD1bPQp8HvjAXtBk4c7K4bY"
		const uintOO4LhTB = BigInt("221")
		const BACMARSLPTOKENPoolq0uzcO7 = await BACMARSLPTOKENPool.new(stringxaIb3GK, stringxyRduLJ, uintOO4LhTB, {from: accounts[4]});
		const addressT4DJhPT = accounts[0]
		await BACMARSLPTOKENPoolq0uzcO7.exit.call({from: accounts[0]});
		const uint256pZ5qAD6 = await BACMARSLPTOKENPoolq0uzcO7.totalSupply.call({from: accounts[3]});
		const uint256OJd8U4w = await BACMARSLPTOKENPoolq0uzcO7.balanceOf.call(addressT4DJhPT, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgtpEAAo = "s5WN"
		const stringzjPVoSj = "Dt69R"
		const uintEidrNjd = BigInt("152")
		const BACMARSLPTOKENPoolDEHqW9y = await BACMARSLPTOKENPool.new(stringgtpEAAo, stringzjPVoSj, uintEidrNjd, {from: accounts[0]});
		const uintHKIiX0Z = BigInt("116")
		const addresscSL2AJ7 = accounts[4]
		await BACMARSLPTOKENPoolDEHqW9y.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256iX1sHfj = await BACMARSLPTOKENPoolDEHqW9y.notifyRewardAmount.call(uintHKIiX0Z, {from: accounts[1]});
		const uint256A44U2Sn = await BACMARSLPTOKENPoolDEHqW9y.balanceOf.call(addresscSL2AJ7, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string3p39A8 = "eYC2KV95aDrOnqSrRusUiKD627"
		const stringkxGzZum = "aHWHAyocfmlEbnSkWrj0iUAfxh67aOI69zMOiqejB9EN"
		const uintBDyKuSS = BigInt("49")
		const BACMARSLPTOKENPoolgqSuVc7 = await BACMARSLPTOKENPool.new(string3p39A8, stringkxGzZum, uintBDyKuSS, {from: accounts[2]});
		const uintrthZYc4 = BigInt("835")
		const uintcRYwLf9 = BigInt("1626")
		const uint256YT8Aces = await BACMARSLPTOKENPoolgqSuVc7.notifyRewardAmount.call(uintrthZYc4, {from: accounts[0]});
		const uint256AOfWM4N = await BACMARSLPTOKENPoolgqSuVc7.stake.call(uintcRYwLf9, {from: accounts[0]});
		const uint256zMEM1c = await BACMARSLPTOKENPoolgqSuVc7.rewardPerToken.call({from: accounts[4]});
		await BACMARSLPTOKENPoolgqSuVc7.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQMOTdZ1 = "pYss27JgNG5r5yqTS367Vr134hICmdxdflwsiLIddJ"
		const stringWOimwHj = "ldPmRgclrxwd0lOln"
		const uintsppMujo = BigInt("141")
		const BACMARSLPTOKENPooljcJlkz1 = await BACMARSLPTOKENPool.new(stringQMOTdZ1, stringWOimwHj, uintsppMujo, {from: accounts[0]});
		const addressme4RncV = "0x0000000000000000000000000000000000000001"
		const uint69azpi = BigInt("149")
		const byteVZ6wj4g = "0x1c161d1a1213191e141b10131b19031d011509070d16121216010d1e0510100c"
		const byteH5VSVu = "0x1e13011a020a1615010508061a060d000b121a18180f1d0107040a031e0d110b"
		const uintYJ0IG1z = BigInt("45")
		const uintmoNaYY6 = BigInt("1527")
		const uintU0vFPAF = BigInt("1856")
		const addressbNwugcU = await BACMARSLPTOKENPooljcJlkz1.updateReward.call(addressme4RncV, {from: accounts[2]});
		await BACMARSLPTOKENPooljcJlkz1.exit.call({from: accounts[3]});
		const uint256ZetMzc0 = await BACMARSLPTOKENPooljcJlkz1.withdraw.call(uint69azpi, {from: accounts[2]});
		const uint256bMDV0u4 = await BACMARSLPTOKENPooljcJlkz1.stakeWithPermit.call(uintU0vFPAF, uintmoNaYY6, uintYJ0IG1z, byteH5VSVu, byteVZ6wj4g, {from: accounts[0]});
		const uint256vTtZ0aI = await BACMARSLPTOKENPooljcJlkz1.totalSupply.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTMpK8YJ = "m7YONW834volG2RUvHeAnOOEIg6SvloXWszJd4RphKMNRkg5PjtfZRQg7lQ6qMVXNrsTiUTkntf9etYgzX6UYjslhoGmdVbnX"
		const stringrfStqRV = "uCMcvp8Ym"
		const uintfy5HUo = BigInt("64")
		const BACMARSLPTOKENPoolj27oTka = await BACMARSLPTOKENPool.new(stringTMpK8YJ, stringrfStqRV, uintfy5HUo, {from: "0x0000000000000000000000000000000000000001"});
		const addresspEWbjP = accounts[0]
		await BACMARSLPTOKENPoolj27oTka.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256G3r02YF = await BACMARSLPTOKENPoolj27oTka.earned.call(addresspEWbjP, {from: accounts[3]});
		const stringXuCFkOI = await BACMARSLPTOKENPoolj27oTka.symbol.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string2XS1qm = "NSeZbpK9NhD9qfP06mqM4P8N7oApWLoh9Jougf3xnvnTTQ1WRSY22DwFmLjMos4zRgxyt2JBfIaQozkaHgFzELDZ2"
		const stringSc6U62F = "VqX1WMIlXtmouui2eXtXfO78AuuCyxBp3sTVfqhJcDTYmVPNSrV7qEAvDk46Nc92b8yn1WPiXoddOyrfqzzYndoAtQ2JgA"
		const uintTeemG4g = BigInt("172")
		const BACMARSLPTOKENPoolhs9jLFn = await BACMARSLPTOKENPool.new(string2XS1qm, stringSc6U62F, uintTeemG4g, {from: accounts[0]});
		const bytezgy2gt1 = "0x071c121c04020105111e1f1d1c060c1d0a001104080b110e1912091d0f03201a"
		const byteDK6Uv2 = "0x0f111f18061914180404170a06101516010412180f1e0c07180e10001d0b1b07"
		const uintUv0SvXI = BigInt("205")
		const uintIIF2mrr = BigInt("1951")
		const uintkwMa6A = BigInt("411")
		const addressryzITZh = accounts[0]
		const uintmaGUnCr = BigInt("924")
		const uint8R65CI0 = await BACMARSLPTOKENPoolhs9jLFn.decimals.call({from: accounts[2]});
		const uint256qyHDWJP = await BACMARSLPTOKENPoolhs9jLFn.stakeWithPermit.call(uintkwMa6A, uintIIF2mrr, uintUv0SvXI, byteDK6Uv2, bytezgy2gt1, {from: accounts[2]});
		const uint256xC3OMbX = await BACMARSLPTOKENPoolhs9jLFn.getRewardForDuration.call({from: accounts[2]});
		const uint256tV219SH = await BACMARSLPTOKENPoolhs9jLFn.balanceOf.call(addressryzITZh, {from: accounts[0]});
		const uint256zHpVL8p = await BACMARSLPTOKENPoolhs9jLFn.withdraw.call(uintmaGUnCr, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringH4aHNRe = "j7U1as37SZlqZn1uoabrpLWzlpxh"
		const stringBxixmh = "HOnsynVHozVOJqfkhusaPDh3BuxFcwvybIo9W"
		const uintjwFxlx = BigInt("47")
		const BACMARSLPTOKENPooljp9Gr9u = await BACMARSLPTOKENPool.new(stringH4aHNRe, stringBxixmh, uintjwFxlx, {from: accounts[2]});
		await BACMARSLPTOKENPooljp9Gr9u.nonReentrant.call({from: accounts[4]});
		const stringAhmwccK = await BACMARSLPTOKENPooljp9Gr9u.symbol.call({from: accounts[5]});
		await BACMARSLPTOKENPooljp9Gr9u.getReward.call({from: accounts[3]});
		const uint256BVaQU6 = await BACMARSLPTOKENPooljp9Gr9u.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkrIIgjN = "JX4QsMoHYQqNuVnsHhGTz3jAVzizbO4ygK6t94aoFocbtAemukRDRXFqqyGwgHLwWxAFhzOwCT8hi3VUu"
		const stringjM04HV5 = "px157BA6BpE4wm8ItpL2DRLfqIsOSfKPWKszV1uoVs5xa6yzTHT1PB7hU9hDXr2h18gdW3HTVB3okNxlEMBosoVCbySISdR"
		const uintuEkCx2C = BigInt("250")
		const BACMARSLPTOKENPoolAjl5Xk = await BACMARSLPTOKENPool.new(stringkrIIgjN, stringjM04HV5, uintuEkCx2C, {from: "0x0000000000000000000000000000000000000001"});
		const uintkfpmpPB = BigInt("870")
		const uintXJp9fx = BigInt("1984")
		const uint256KMzOcrw = await BACMARSLPTOKENPoolAjl5Xk.withdraw.call(uintkfpmpPB, {from: accounts[1]});
		await BACMARSLPTOKENPoolAjl5Xk.nonReentrant.call({from: accounts[0]});
		const uint256dkDymMX = await BACMARSLPTOKENPoolAjl5Xk.notifyRewardAmount.call(uintXJp9fx, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUpvp7FW = "QdSKUraDYq8epr3aHAsD9FOuGEkcYCkMR"
		const stringJF23HmJ = "pi44UClGe7yV0dBIvAhUcMGwQh8"
		const uintseK06nh = BigInt("28")
		const BACMARSLPTOKENPoolcJOANYd = await BACMARSLPTOKENPool.new(stringUpvp7FW, stringJF23HmJ, uintseK06nh, {from: accounts[3]});
		const uintPfemhz5 = BigInt("1158")
		const uintUl7XZac = BigInt("1179")
		await BACMARSLPTOKENPoolcJOANYd.nonReentrant.call({from: accounts[0]});
		const uint256cQWOD0q = await BACMARSLPTOKENPoolcJOANYd.stake.call(uintPfemhz5, {from: accounts[3]});
		const uint256O2nCpUK = await BACMARSLPTOKENPoolcJOANYd.getRewardForDuration.call({from: accounts[5]});
		const uint2563csSH1 = await BACMARSLPTOKENPoolcJOANYd.stake.call(uintUl7XZac, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWroIDM = "dMOzao3EgM874PhTKOWLyPCXO56r9QRxtK61FubYZp1uZjexl2JSC2CTdtljO0h24gBXz6koB6WtsoUeGloBrMnMnv83"
		const stringCDKC1Bu = "V4jmsEQiJE6S940TXHdpEUXWMGVzwn9s9BKeFf"
		const uintPibrmRN = BigInt("100")
		const BACMARSLPTOKENPoolvQf9dQP = await BACMARSLPTOKENPool.new(stringWroIDM, stringCDKC1Bu, uintPibrmRN, {from: accounts[1]});
		await BACMARSLPTOKENPoolvQf9dQP.exit.call({from: accounts[3]});
		await BACMARSLPTOKENPoolvQf9dQP.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIHAlkrt = "k4GGEgDCdfV2jL66OpKccPD3jIGBy9N4F1WmyrQYQP3l9Iqj4gPKWtSki7NYmOA2QopuBjTHrbbeTPG3F4hk"
		const stringMRzdU57 = "mnm5RyuoNOT"
		const uintbM5dhP = BigInt("222")
		const BACMARSLPTOKENPoolCTtPR6G = await BACMARSLPTOKENPool.new(stringIHAlkrt, stringMRzdU57, uintbM5dhP, {from: accounts[4]});
		const addressXvX4h2D = accounts[2]
		const stringHuaVABe = await BACMARSLPTOKENPoolCTtPR6G.symbol.call({from: accounts[2]});
		const uint256thx4iHM = await BACMARSLPTOKENPoolCTtPR6G.totalSupply.call({from: accounts[5]});
		await BACMARSLPTOKENPoolCTtPR6G.nonReentrant.call({from: accounts[3]});
		await BACMARSLPTOKENPoolCTtPR6G.nonReentrant.call({from: accounts[0]});
		const uint256GPb7xLr = await BACMARSLPTOKENPoolCTtPR6G.balanceOf.call(addressXvX4h2D, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiKdJPkQ = "br2XG6AJC2SyHtCH81ry4BxsmuezrpixJJwpseb7v1e1QoH"
		const stringuVJH2mk = "Ob77aQr5EkBdRMNp4al9R21mmMWE9V1cmVOl1JcUHctAvn4gycMUhsthV8zC3Ch9kjkiHB"
		const uintpmbA3qO = BigInt("124")
		const BACMARSLPTOKENPoolz3pSr0u = await BACMARSLPTOKENPool.new(stringiKdJPkQ, stringuVJH2mk, uintpmbA3qO, {from: accounts[5]});
		const addressOEMpypF = accounts[4]
		const uint54KVW5 = BigInt("7")
		const uint256K2ud08t = await BACMARSLPTOKENPoolz3pSr0u.totalSupply.call({from: accounts[0]});
		const addressHcLvZ5t = await BACMARSLPTOKENPoolz3pSr0u.updateReward.call(addressOEMpypF, {from: accounts[2]});
		const uint8eJg2XHW = await BACMARSLPTOKENPoolz3pSr0u.decimals.call({from: accounts[1]});
		const stringKZFiehu = await BACMARSLPTOKENPoolz3pSr0u.symbol.call({from: accounts[1]});
		const uint256S9aIx5c = await BACMARSLPTOKENPoolz3pSr0u.notifyRewardAmount.call(uint54KVW5, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringpg5d4KB = "GYrXJK8lAlrUtxsU3VX2"
		const stringkuxXHV3 = "jjFqmL6ATNI9cXqlM5fZat5tHHe5tGXx1LhS"
		const uintP6PjqdE = BigInt("60")
		const BACMARSLPTOKENPoolNVkVWU = await BACMARSLPTOKENPool.new(stringpg5d4KB, stringkuxXHV3, uintP6PjqdE, {from: accounts[0]});
		const uintUBa7k5t = BigInt("18")
		const uint256sxIBJ6U = await BACMARSLPTOKENPoolNVkVWU.rewardPerToken.call({from: accounts[4]});
		const stringlGMiBUk = await BACMARSLPTOKENPoolNVkVWU.symbol.call({from: accounts[1]});
		const uint256z4snrkx = await BACMARSLPTOKENPoolNVkVWU.stake.call(uintUBa7k5t, {from: accounts[0]});
		await BACMARSLPTOKENPoolNVkVWU.nonReentrant.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringcjlf1iA = "nMfD57mwYBuiymdnIneNMKMqG6tWhO1GTUd5Ukou"
		const stringditAVG0 = "rCjdPgiTf7ZgS76FBZWvUrbx3OyzH6YwXhyF7VrtE0iINEGanaroavj3RtMYwmBdUXvzlIzKteVASxlhlt947yUmt"
		const uintoX9VghV = BigInt("77")
		const BACMARSLPTOKENPoolZwDAyg9 = await BACMARSLPTOKENPool.new(stringcjlf1iA, stringditAVG0, uintoX9VghV, {from: accounts[3]});
		const addressYJTzAEW = accounts[1]
		await BACMARSLPTOKENPoolZwDAyg9.onlyRewardsDistribution.call({from: accounts[0]});
		const stringcayaQeo = await BACMARSLPTOKENPoolZwDAyg9.name.call({from: accounts[2]});
		const uint256LyVlXdC = await BACMARSLPTOKENPoolZwDAyg9.earned.call(addressYJTzAEW, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwau6gJJ = "Wsu6XVAqQQgRMH3KLxek7TmHvwmbJgaxXT"
		const stringOcDQWE = "osz7kiQrgjnrsauHVU9VspsiPpwCwyfxec5mvW4krfluazGWi9wGqFdN"
		const uintgUL08nk = BigInt("223")
		const BACMARSLPTOKENPoolvVntcJ = await BACMARSLPTOKENPool.new(stringwau6gJJ, stringOcDQWE, uintgUL08nk, {from: accounts[2]});
		const addressQ1CmJbS = accounts[0]
		const uint256SZOP8aG = await BACMARSLPTOKENPoolvVntcJ.earned.call(addressQ1CmJbS, {from: accounts[0]});
		const uint8x7mrZuW = await BACMARSLPTOKENPoolvVntcJ.decimals.call({from: accounts[1]});
		const uint256IVsW9lH = await BACMARSLPTOKENPoolvVntcJ.rewardPerToken.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBUjrmne = "zMqcRfks3iLBjmDqF9bK63z"
		const stringogB9oMr = "CCrejDWoQ93X1n4fGLXgZlvtNicAOqpQF23E9fqDU8ubzdfZnH3uTFIeai3UZNWFLnuoVp8D6ebOLVs8HI2pc8uklKSaCAuJ1y"
		const uintNAQFJ9D = BigInt("42")
		const BACMARSLPTOKENPoolLs2MfgM = await BACMARSLPTOKENPool.new(stringBUjrmne, stringogB9oMr, uintNAQFJ9D, {from: accounts[0]});
		const byteJwItkl = "0x121c1a0a03001f0b060c1f040e10191219180617100e070112101a1413071910"
		const bytearBVk7P = "0x0b01191c06020a1104061e1f06161113140816061a1e020104031c1c1212201b"
		const uintmwwgarY = BigInt("195")
		const uintL39wbms = BigInt("1701")
		const uinttddza4 = BigInt("1994")
		const byteZkEDNfM = "0x162007040f00081c140c0712181f181c0a17150514191c0c0e1b0a101a181819"
		const byteEcpmgZv = "0x151f1410160a0d031a20060319070d1e151d0b011715100709150e140c071518"
		const uintscpRhn = BigInt("196")
		const uintsBousJf = BigInt("1817")
		const uintxuj7wE0 = BigInt("649")
		await BACMARSLPTOKENPoolLs2MfgM.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256zqlDLnu = await BACMARSLPTOKENPoolLs2MfgM.stakeWithPermit.call(uinttddza4, uintL39wbms, uintmwwgarY, bytearBVk7P, byteJwItkl, {from: accounts[1]});
		const uint256dalpfQX = await BACMARSLPTOKENPoolLs2MfgM.rewardPerToken.call({from: accounts[3]});
		const stringlKox5jm = await BACMARSLPTOKENPoolLs2MfgM.symbol.call({from: accounts[2]});
		const uint256E8SfBNp = await BACMARSLPTOKENPoolLs2MfgM.stakeWithPermit.call(uintxuj7wE0, uintsBousJf, uintscpRhn, byteEcpmgZv, byteZkEDNfM, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsEY5J7j = "ELzY6PFlUXKNy4qPEkI9OrXq7gUaaGMN7kU1nd8DL3qIaMEnItBF45C"
		const stringgRzIiIV = "mv4Nil8FEaV96DAXtJ9A8olc8EQT5VXDz3fcdRZchnx0egsacY4gtCx4iqfokzVHaDXFj2KYzuMrptYrsQ1GafkWacwkNvQW"
		const uintYaRbzcI = BigInt("39")
		const BACMARSLPTOKENPool6eoFhA = await BACMARSLPTOKENPool.new(stringsEY5J7j, stringgRzIiIV, uintYaRbzcI, {from: accounts[3]});
		const addressz6odlOn = accounts[3]
		const byteXHM9OjC = "0x0b131401110b1b1014190519172012010d011f060a1b191e1e16151200111108"
		const byteW857ec3 = "0x1c1c0a111d17011119081a04070c082016191f111c070018041815070d120c19"
		const uintpruc4BE = BigInt("10")
		const uintjCZtwDV = BigInt("961")
		const uintv2fObxF = BigInt("1941")
		const uint256wwK45Kt = await BACMARSLPTOKENPool6eoFhA.earned.call(addressz6odlOn, {from: accounts[0]});
		const uint8qjs0gJn = await BACMARSLPTOKENPool6eoFhA.decimals.call({from: accounts[1]});
		const uint256FnP6ivp = await BACMARSLPTOKENPool6eoFhA.rewardPerToken.call({from: accounts[1]});
		await BACMARSLPTOKENPool6eoFhA.exit.call({from: accounts[5]});
		const uint256LjFlKzR = await BACMARSLPTOKENPool6eoFhA.stakeWithPermit.call(uintv2fObxF, uintjCZtwDV, uintpruc4BE, byteW857ec3, byteXHM9OjC, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsGEeO8r = "1MGTIwMFA1bUiQf79bJ"
		const stringJvJ8e0e = "AKFJ12yxtbnYKRSaRiXFmAyGhThH2E19q3hviMXmbYBXFLAUlPxcMu1MmFajIkp9"
		const uintl6CQ7iY = BigInt("24")
		const BACMARSLPTOKENPoolgXmXSnx = await BACMARSLPTOKENPool.new(stringsGEeO8r, stringJvJ8e0e, uintl6CQ7iY, {from: accounts[2]});
		const uintmSqKxRt = BigInt("1494")
		const byteBUwCS0p = "0x0d0304140b090a0b0f090b1313201a1f041507070f15120f131b10111f1b1a04"
		const bytecxOBNV9 = "0x120d1d0a13141f08111718030d140f05001605060501200a04091900071f040c"
		const uintanszLVJ = BigInt("242")
		const uintz2JqvBw = BigInt("1315")
		const uint1PcU2f = BigInt("1311")
		const uintgsmRbeu = BigInt("1648")
		const uint256H4PrqZ = await BACMARSLPTOKENPoolgXmXSnx.notifyRewardAmount.call(uintmSqKxRt, {from: accounts[2]});
		await BACMARSLPTOKENPoolgXmXSnx.nonReentrant.call({from: accounts[2]});
		const uint256vkq3tz2 = await BACMARSLPTOKENPoolgXmXSnx.getRewardForDuration.call({from: accounts[3]});
		const uint256iibwpKi = await BACMARSLPTOKENPoolgXmXSnx.stakeWithPermit.call(uint1PcU2f, uintz2JqvBw, uintanszLVJ, bytecxOBNV9, byteBUwCS0p, {from: accounts[2]});
		const uint256z4elMF = await BACMARSLPTOKENPoolgXmXSnx.stake.call(uintgsmRbeu, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressAV4f3j = accounts[5]
		const addressJ0moHHe = accounts[1]
		const addressXvOm8fE = accounts[4]
		const BACMARSLPTOKENPoolw7GmYOQ = await BACMARSLPTOKENPool.new(addressAV4f3j, addressJ0moHHe, addressXvOm8fE, {from: accounts[3]});
		const uintQl8Q0Ru = BigInt("299")
		const addressaLOVuZw = accounts[1]
		const uint256SOnZAK = await BACMARSLPTOKENPoolw7GmYOQ.getRewardForDuration.call({from: accounts[4]});
		const uint256CaKog5g = await BACMARSLPTOKENPoolw7GmYOQ.lastTimeRewardApplicable.call({from: accounts[0]});
		await BACMARSLPTOKENPoolw7GmYOQ.getReward.call({from: accounts[5]});
		const uint256ZAeakUh = await BACMARSLPTOKENPoolw7GmYOQ.notifyRewardAmount.call(uintQl8Q0Ru, {from: accounts[5]});
		const uint256iydmWj = await BACMARSLPTOKENPoolw7GmYOQ.rewardPerToken.call({from: accounts[4]});
		const uint256zUuZaQq = await BACMARSLPTOKENPoolw7GmYOQ.balanceOf.call(addressaLOVuZw, {from: accounts[2]});

		assert.equal(uint256CaKog5g, BigInt("0"))
		assert.equal(uint256SOnZAK, BigInt("0"))
		await expect(BACMARSLPTOKENPoolw7GmYOQ.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringab7xDN = "QxrEaey2jkDMMlxTff9PP3OafP70RBo6k9HCoay6ddsNpUnjJogIzK4vJe6Izy"
		const stringLN8JDIN = "pmHJb1qEerlPLBBTveIMVgz342ahBD2uocmQSA1tkt7z06SXTDAe1H8RnpkI7"
		const uintkHBBAUD = BigInt("2")
		const BACMARSLPTOKENPoolVeO7OO = await BACMARSLPTOKENPool.new(stringab7xDN, stringLN8JDIN, uintkHBBAUD, {from: accounts[1]});
		const uintYEvHrQW = BigInt("562")
		const uintGuIGF74 = BigInt("445")
		const uintwE9fLmr = BigInt("1009")
		const uint256fhZoKGQ = await BACMARSLPTOKENPoolVeO7OO.stake.call(uintYEvHrQW, {from: "0x0000000000000000000000000000000000000001"});
		const stringwe9Qc6K = await BACMARSLPTOKENPoolVeO7OO.name.call({from: accounts[0]});
		const uint256dDVApas = await BACMARSLPTOKENPoolVeO7OO.withdraw.call(uintGuIGF74, {from: accounts[0]});
		await BACMARSLPTOKENPoolVeO7OO.getReward.call({from: accounts[0]});
		const uint256A2HgGsQ = await BACMARSLPTOKENPoolVeO7OO.notifyRewardAmount.call(uintwE9fLmr, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrT0pCP = "w9nVq45w1DjLxln7p"
		const stringd5bWmVp = "DZPWqK2lOO4p2VRcpI4Yy84hccTixcREcyYUbAZIQAv644JjKGKenTi1c2VTsO0EI48lbsJfjrrfNb"
		const uintr5TOYOV = BigInt("135")
		const BACMARSLPTOKENPoolb0WoSov = await BACMARSLPTOKENPool.new(stringrT0pCP, stringd5bWmVp, uintr5TOYOV, {from: "0x0000000000000000000000000000000000000001"});
		const uintSXp5lJs = BigInt("285")
		const uint8658BX0 = await BACMARSLPTOKENPoolb0WoSov.decimals.call({from: accounts[4]});
		await BACMARSLPTOKENPoolb0WoSov.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256aqPVOh5 = await BACMARSLPTOKENPoolb0WoSov.rewardPerToken.call({from: accounts[1]});
		const uint8SR3it4 = await BACMARSLPTOKENPoolb0WoSov.decimals.call({from: accounts[5]});
		const uint256FhKywH = await BACMARSLPTOKENPoolb0WoSov.withdraw.call(uintSXp5lJs, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqv34iQl = "GTFW4vXb2T4heHPYZyP4kaGDsbgLeg2zeG3mzmL94vQaCwiJPt21pk5W"
		const stringQIKMLWt = "HyQnvAWQtp2CgnYMiUl7kwcj4cMFDWzkBYHuY4Qmpyzrl2h1a3fQ"
		const uintdqBVgHz = BigInt("165")
		const BACMARSLPTOKENPooltz1EN4F = await BACMARSLPTOKENPool.new(stringqv34iQl, stringQIKMLWt, uintdqBVgHz, {from: accounts[5]});
		const bytelCT0hie = "0x0d1a1c190f08091a200819050e140d16050e0a1c161d0111100d040816080214"
		const byteVeagrjc = "0x031e030a1a1b120a1713061a1f0e0c111c0a1d09200b180a190d1f011607171b"
		const uintxruevC4 = BigInt("159")
		const uintTyUILkn = BigInt("1105")
		const uintXX0B6qi = BigInt("377")
		const addressFsKbL8I = accounts[5]
		const uintGGUc0l = BigInt("773")
		const uint256Lgyh1DB = await BACMARSLPTOKENPooltz1EN4F.stakeWithPermit.call(uintXX0B6qi, uintTyUILkn, uintxruevC4, byteVeagrjc, bytelCT0hie, {from: accounts[1]});
		const uint256KhyTyte = await BACMARSLPTOKENPooltz1EN4F.earned.call(addressFsKbL8I, {from: accounts[1]});
		await BACMARSLPTOKENPooltz1EN4F.getReward.call({from: accounts[3]});
		const uint256F9EFy8m = await BACMARSLPTOKENPooltz1EN4F.stake.call(uintGGUc0l, {from: accounts[1]});
		const uint8K2PDSZ2 = await BACMARSLPTOKENPooltz1EN4F.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDaocIst = "lB0Bj2JGfmVrXw6wizkd3mt6QeiEN9m5us9eECz"
		const stringMo3sQ1s = "sq1eZUSgM7EA3zbmlMR4UuOnTL5a7xVyNEiBjQIqlJpAMbqLV56185t968OnOmi63v"
		const uintRLXd7nI = BigInt("151")
		const BACMARSLPTOKENPoolaHFKyuK = await BACMARSLPTOKENPool.new(stringDaocIst, stringMo3sQ1s, uintRLXd7nI, {from: accounts[4]});
		const addressBwvj9uS = accounts[2]
		await BACMARSLPTOKENPoolaHFKyuK.getReward.call({from: accounts[3]});
		const uint256dgRQSH7 = await BACMARSLPTOKENPoolaHFKyuK.totalSupply.call({from: accounts[2]});
		const addresshj9ITtE = await BACMARSLPTOKENPoolaHFKyuK.updateReward.call(addressBwvj9uS, {from: accounts[5]});
		const uint256mNYGeU = await BACMARSLPTOKENPoolaHFKyuK.totalSupply.call({from: accounts[4]});
		const uint256o82xh9 = await BACMARSLPTOKENPoolaHFKyuK.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringleTgjvz = "Mvreyx9RBpzd2OWGXzrZvLSLBV2PiAA8bCAO"
		const stringVJ0DmyD = "sQQ1XzK7rEfGsqjehMMtYb3cX5aQ2THhSAQtYQOuYS2"
		const uintmaUmDh = BigInt("248")
		const BACMARSLPTOKENPoolo1mCCfA = await BACMARSLPTOKENPool.new(stringleTgjvz, stringVJ0DmyD, uintmaUmDh, {from: accounts[3]});
		const byteKtkDW1 = "0x1d161a080b180a1a1c1c1d0206010c1e1a200e2007200505051c1a140d07171f"
		const byteiVgQz6 = "0x16181e0116101a030c0611141c14071716171e0a1f12021306161c1815040213"
		const uintaEsqOqV = BigInt("204")
		const uintkMPLGlL = BigInt("383")
		const uinteQs2Zeo = BigInt("1719")
		const uintegymKtq = BigInt("555")
		const addresse34BVw1 = accounts[4]
		const uint256gXIGQDp = await BACMARSLPTOKENPoolo1mCCfA.stakeWithPermit.call(uinteQs2Zeo, uintkMPLGlL, uintaEsqOqV, byteiVgQz6, byteKtkDW1, {from: accounts[4]});
		await BACMARSLPTOKENPoolo1mCCfA.getReward.call({from: accounts[5]});
		const uint256ctyHkjB = await BACMARSLPTOKENPoolo1mCCfA.withdraw.call(uintegymKtq, {from: accounts[2]});
		const addressoA9Pn9 = await BACMARSLPTOKENPoolo1mCCfA.updateReward.call(addresse34BVw1, {from: accounts[1]});
		const uint8jZiOXWv = await BACMARSLPTOKENPoolo1mCCfA.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string0yY7cs = "3dyOrAVVw4Rlt"
		const stringe2YxyoY = "THq5ru6k7Tn9GYbYDAJTe8OEjLVqWsBQRHsmENRnzUmWpIDn7fejqWEnGORprNEnjeGE5uTh5g11MBOlXzAAxfx"
		const uintMFoCRCj = BigInt("221")
		const BACMARSLPTOKENPoolcxgJWBW = await BACMARSLPTOKENPool.new(string0yY7cs, stringe2YxyoY, uintMFoCRCj, {from: accounts[3]});
		const addressCLMXEuu = accounts[0]
		const uintPKq68th = BigInt("125")
		await BACMARSLPTOKENPoolcxgJWBW.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256pv9uf5A = await BACMARSLPTOKENPoolcxgJWBW.earned.call(addressCLMXEuu, {from: accounts[0]});
		const uint256o0SE6V = await BACMARSLPTOKENPoolcxgJWBW.stake.call(uintPKq68th, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhMIlMtm = "sfWqGSfH2YGhK4QBSbIvSIMD8AVGpv3LquSqof4XRpFbxfQQCiVM5FXkFyWl3y1mzYtAAMzhU"
		const stringSATJGRY = "rl3a16nS4vFmPyoiCJ404djaIqYzJdInoJsuEbDdaUY7HNo06AHqL2JV7u9mhFNegXLjDT"
		const uintBmkchT = BigInt("230")
		const BACMARSLPTOKENPooluUPAvcU = await BACMARSLPTOKENPool.new(stringhMIlMtm, stringSATJGRY, uintBmkchT, {from: "0x0000000000000000000000000000000000000001"});
		const uintxzHgkD = BigInt("200")
		const uintkgVBDk = BigInt("1168")
		const byteJwKm9u = "0x1705061a061d0f110f05030011150d0a1a1a041d090f171e051512100c150f1c"
		const byteSeETm2m = "0x031b1d02030606180a1a081b010a1613100e050b130b191d0d171f100504100e"
		const uintOy0vfHV = BigInt("30")
		const uintwb7AVkz = BigInt("1183")
		const uintf8Xqwi9 = BigInt("1354")
		const uint8jpqs0aC = await BACMARSLPTOKENPooluUPAvcU.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256TnLtSo8 = await BACMARSLPTOKENPooluUPAvcU.stake.call(uintxzHgkD, {from: accounts[2]});
		const uint256yZIzuV3 = await BACMARSLPTOKENPooluUPAvcU.withdraw.call(uintkgVBDk, {from: accounts[3]});
		const uint256lKHkFzh = await BACMARSLPTOKENPooluUPAvcU.stakeWithPermit.call(uintf8Xqwi9, uintwb7AVkz, uintOy0vfHV, byteSeETm2m, byteJwKm9u, {from: accounts[3]});
		const uint256tnbjP8g = await BACMARSLPTOKENPooluUPAvcU.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWbILxPA = "qh7BNt1ETZmbbD8XGtyS6mcho7JFYMgu8GERrIgAQMWpqZ8fpcKVIxOGwjISfqcGx9qpB1"
		const stringQOLqERY = "L"
		const uintDmPHoVe = BigInt("82")
		const BACMARSLPTOKENPoolSPgLJKf = await BACMARSLPTOKENPool.new(stringWbILxPA, stringQOLqERY, uintDmPHoVe, {from: accounts[0]});
		const uintEconVBM = BigInt("1551")
		const uint256r8riBFq = await BACMARSLPTOKENPoolSPgLJKf.notifyRewardAmount.call(uintEconVBM, {from: accounts[0]});
		await BACMARSLPTOKENPoolSPgLJKf.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKr9saD = "e0P4MgwSvKCpsjkRpTc1qKGlJFCnULuWSQos6zOl9P8VUWLcvlGjcBOHXL3SQyI8i"
		const stringX8W31gR = "bcgDBzkngWMdDrEImL48vgdvbSMxFXy2bQ6AyNK4egRw8Uuod6W9V8567fCT61KJ"
		const uintD5PYUNd = BigInt("201")
		const BACMARSLPTOKENPoolZdhm3ts = await BACMARSLPTOKENPool.new(stringKr9saD, stringX8W31gR, uintD5PYUNd, {from: accounts[5]});
		const addressEO1rtn0 = accounts[3]
		await BACMARSLPTOKENPoolZdhm3ts.onlyRewardsDistribution.call({from: accounts[4]});
		const uint8eOfrmxV = await BACMARSLPTOKENPoolZdhm3ts.decimals.call({from: accounts[2]});
		const addressGT6WICs = await BACMARSLPTOKENPoolZdhm3ts.updateReward.call(addressEO1rtn0, {from: accounts[0]});
		await BACMARSLPTOKENPoolZdhm3ts.exit.call({from: accounts[2]});
		const stringxIQIdfe = await BACMARSLPTOKENPoolZdhm3ts.name.call({from: accounts[1]});
	});
})