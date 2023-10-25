const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressyG8Ai0X = accounts[4]
		const addressaVjZIOY = accounts[0]
		const addresss1CoCFO = accounts[5]
		const BACMARSLPTOKENPoolY1VP8dF = await BACMARSLPTOKENPool.new(addressyG8Ai0X, addressaVjZIOY, addresss1CoCFO, {from: accounts[3]});
		const byteGn1FuGy = "0x09061d14021d0301030e1402171b0418150e150c111e1e121a0c0f020d112017"
		const bytevdMXrYF = "0x171f131916100a0f1a1d0419130f0c1b0a1f0e1814170a130e20201316070101"
		const uintfgLAdWj = BigInt("23")
		const uintoLfmoRT = BigInt("329")
		const uintjBusL7F = BigInt("1084")
//		await BACMARSLPTOKENPoolY1VP8dF.exit.call({from: accounts[0]});
//		await BACMARSLPTOKENPoolY1VP8dF.nonReentrant.call({from: accounts[2]});
//		await BACMARSLPTOKENPoolY1VP8dF.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256Fc4L5HA = await BACMARSLPTOKENPoolY1VP8dF.stakeWithPermit.call(uintjBusL7F, uintoLfmoRT, uintfgLAdWj, bytevdMXrYF, byteGn1FuGy, {from: accounts[5]});

		await expect(BACMARSLPTOKENPoolY1VP8dF.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressmhN6JdC = "0x0000000000000000000000000000000000000001"
		const addressFAbf35 = accounts[4]
		const addressjyAcpzj = accounts[2]
		const BACMARSLPTOKENPoolfyUDa7v = await BACMARSLPTOKENPool.new(addressmhN6JdC, addressFAbf35, addressjyAcpzj, {from: accounts[5]});
		const addressYpdXfiR = accounts[1]
		const uint256po5KPzn = await BACMARSLPTOKENPoolfyUDa7v.getRewardForDuration.call({from: accounts[3]});
		const uint256dsipJY0 = await BACMARSLPTOKENPoolfyUDa7v.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint2562alBc5 = await BACMARSLPTOKENPoolfyUDa7v.rewardPerToken.call({from: accounts[5]});
		const uint256a1H3KnU = await BACMARSLPTOKENPoolfyUDa7v.earned.call(addressYpdXfiR, {from: accounts[2]});

		assert.equal(uint2562alBc5, BigInt("0"))
		assert.equal(uint256a1H3KnU, BigInt("0"))
		assert.equal(uint256dsipJY0, BigInt("0"))
		assert.equal(uint256po5KPzn, BigInt("0"))
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIuYL8Pu = "fMLuqDrlHEfeRIczAD6ZHbOiivyqe3EL5DUiphmjbKyA8mZJtVYUzeTNYpkF9V"
		const stringyVQO5RQ = "ynmx2we5ZfrHwcYuRDHNXmD1ODzx46L7zAwad97IiYBr7TNnw7i32jIWYQjXfxQc1RsC69RIhqfnja7g8X35W"
		const uintYBLwEcw = BigInt("182")
		const BACMARSLPTOKENPoolPOdNNq3 = await BACMARSLPTOKENPool.new(stringIuYL8Pu, stringyVQO5RQ, uintYBLwEcw, {from: accounts[4]});
		const addressF9NezNN = accounts[3]
		const addressIWroK7r = await BACMARSLPTOKENPoolPOdNNq3.updateReward.call(addressF9NezNN, {from: accounts[5]});
		const uint256wYB1gu0 = await BACMARSLPTOKENPoolPOdNNq3.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256lZi6L2 = await BACMARSLPTOKENPoolPOdNNq3.getRewardForDuration.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressdIUnVeJ = accounts[2]
		const addressczgVq6 = "0x0000000000000000000000000000000000000001"
		const addressNC9Uecn = accounts[1]
		const BACMARSLPTOKENPool7mohrR = await BACMARSLPTOKENPool.new(addressdIUnVeJ, addressczgVq6, addressNC9Uecn, {from: accounts[4]});
		const uintRNf4XlE = BigInt("412")
		const uint256Xxmvnpf = await BACMARSLPTOKENPool7mohrR.rewardPerToken.call({from: accounts[2]});
//		const string4mBIMR = await BACMARSLPTOKENPool7mohrR.name.call({from: accounts[5]});
//		const uint256Qi3fNiL = await BACMARSLPTOKENPool7mohrR.withdraw.call(uintRNf4XlE, {from: accounts[2]});
//		const uint256FcyCSXN = await BACMARSLPTOKENPool7mohrR.totalSupply.call({from: accounts[5]});

		assert.equal(uint256Xxmvnpf, BigInt("0"))
		await expect(BACMARSLPTOKENPool7mohrR.name.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrmnYzxu = "hd4AcjWpBhq9R6KtMrmcZHGWY8DlE5xCNVtjhFw7ZxyWtu2eSonsDAxXF19"
		const stringBVZqKG = "pk4g9Rdz9KiGEwWj"
		const uintkFaDqmG = BigInt("224")
		const BACMARSLPTOKENPoolXeDXPRd = await BACMARSLPTOKENPool.new(stringrmnYzxu, stringBVZqKG, uintkFaDqmG, {from: accounts[0]});
		const byteEbZLj6M = "0x100702100b1f00040d001c150d18050f141d1e0e1102190b0e0c1c191c0b1c13"
		const byteqE28FEV = "0x13041a08090e071a0d0c0c031f0b051c020c1f070910181804170b020e1f1914"
		const uintgmAj39z = BigInt("33")
		const uintAp4ZxxL = BigInt("1280")
		const uintPE4Lw9f = BigInt("1553")
		const uint256rTfSBud = await BACMARSLPTOKENPoolXeDXPRd.rewardPerToken.call({from: accounts[1]});
		const uint8EkG9aZ = await BACMARSLPTOKENPoolXeDXPRd.decimals.call({from: accounts[1]});
		const uint256yC1DRVF = await BACMARSLPTOKENPoolXeDXPRd.stakeWithPermit.call(uintPE4Lw9f, uintAp4ZxxL, uintgmAj39z, byteqE28FEV, byteEbZLj6M, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringxSc0xD = "cbfAsOeLpz3NSWRbfEScIKPjzx4gQ4hJLvH8u9Mc7nxjocwtJNGyGe2vEtuNz7gx6MRFqWzdyTgQ"
		const stringzutJGq = "QpJl2Ncdu4DtVTyFr7JzQF6kN6MZihFc8GAArNXWXtfWlbkaJApa3WzyZTG8wfnHJyMxMAtQx1oYMyGJqdiKA"
		const uintuyH35LE = BigInt("159")
		const BACMARSLPTOKENPoolxKVYnMY = await BACMARSLPTOKENPool.new(stringxSc0xD, stringzutJGq, uintuyH35LE, {from: accounts[1]});
		const uintfC67XMd = BigInt("582")
		const uintebbyoQo = BigInt("414")
		const stringJtfvy2v = await BACMARSLPTOKENPoolxKVYnMY.symbol.call({from: accounts[0]});
		const uint256rhqhM5O = await BACMARSLPTOKENPoolxKVYnMY.stake.call(uintfC67XMd, {from: accounts[1]});
		const uint256V9CFW09 = await BACMARSLPTOKENPoolxKVYnMY.stake.call(uintebbyoQo, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressZGQcsgH = "0x0000000000000000000000000000000000000001"
		const addressd7JMUQl = accounts[3]
		const addressh2pr34A = accounts[3]
		const BACMARSLPTOKENPoolBHYkZrJ = await BACMARSLPTOKENPool.new(addressZGQcsgH, addressd7JMUQl, addressh2pr34A, {from: accounts[2]});
		const byteXX6uu6I = "0x0c09010f0e021808050c18071b13081e060b0a050c0e0b171417170014120c00"
		const bytecZs664U = "0x0c07170b0b0d020411010b130b1720061d19130d08181405020e1318021f010a"
		const uintjBkFMoC = BigInt("143")
		const uintxUN0VQT = BigInt("811")
		const uintM7GEHA2 = BigInt("1300")
//		const uint256dqbOUG = await BACMARSLPTOKENPoolBHYkZrJ.stakeWithPermit.call(uintM7GEHA2, uintxUN0VQT, uintjBkFMoC, bytecZs664U, byteXX6uu6I, {from: accounts[3]});
//		await BACMARSLPTOKENPoolBHYkZrJ.onlyRewardsDistribution.call({from: accounts[0]});
//		await BACMARSLPTOKENPoolBHYkZrJ.onlyRewardsDistribution.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolBHYkZrJ.stakeWithPermit.call(uintM7GEHA2, uintxUN0VQT, uintjBkFMoC, bytecZs664U, byteXX6uu6I, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressXO68dWe = accounts[1]
		const addresssmOomKu = accounts[1]
		const addressnmCr4i = accounts[0]
		const BACMARSLPTOKENPoolTU85u3z = await BACMARSLPTOKENPool.new(addressXO68dWe, addresssmOomKu, addressnmCr4i, {from: accounts[0]});
		const addressEXHsOmW = accounts[3]
		const uintjsYSpwl = BigInt("1243")
		const uint256IDCRW6 = await BACMARSLPTOKENPoolTU85u3z.balanceOf.call(addressEXHsOmW, {from: accounts[0]});
//		const uint256tYauwbM = await BACMARSLPTOKENPoolTU85u3z.withdraw.call(uintjsYSpwl, {from: accounts[5]});
//		await BACMARSLPTOKENPoolTU85u3z.getReward.call({from: accounts[4]});

		assert.equal(uint256IDCRW6, BigInt("0"))
		await expect(BACMARSLPTOKENPoolTU85u3z.withdraw.call(uintjsYSpwl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressrfhnh8t = accounts[1]
		const addressV9AVDR1 = accounts[1]
		const addressZW2lgZX = accounts[0]
		const BACMARSLPTOKENPoolTU85u3z = await BACMARSLPTOKENPool.new(addressrfhnh8t, addressV9AVDR1, addressZW2lgZX, {from: accounts[0]});
		const addressVtL9BHM = accounts[3]
		const uintHnB2TdG = BigInt("326")
		const addressiC8wHkX = accounts[4]
		const uintwoQZZUg = BigInt("1202")
		const uint256IDCRW6 = await BACMARSLPTOKENPoolTU85u3z.balanceOf.call(addressVtL9BHM, {from: accounts[0]});
//		const uint256MvKwqI = await BACMARSLPTOKENPoolTU85u3z.notifyRewardAmount.call(uintHnB2TdG, {from: accounts[5]});
//		const uint256bBMBDk = await BACMARSLPTOKENPoolTU85u3z.earned.call(addressiC8wHkX, {from: accounts[1]});
//		const uint256tYauwbM = await BACMARSLPTOKENPoolTU85u3z.withdraw.call(uintwoQZZUg, {from: accounts[5]});
//		await BACMARSLPTOKENPoolTU85u3z.getReward.call({from: accounts[4]});

		assert.equal(uint256IDCRW6, BigInt("0"))
		await expect(BACMARSLPTOKENPoolTU85u3z.notifyRewardAmount.call(uintHnB2TdG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvv40MJB = "jQdg0fnQ8cCvEzrBR314vEXw2dB2VwdOHpubbPIhzLquCQqVO3zVC52lxcTMKTlqHfXW4gWDDL2CANwgVJYPj1Dzz7TE1zWg5"
		const stringkEZnFN = "ENkwDWVVD6ftwF2Rubl61b"
		const uintxMsxcLN = BigInt("225")
		const BACMARSLPTOKENPoolESFeM4y = await BACMARSLPTOKENPool.new(stringvv40MJB, stringkEZnFN, uintxMsxcLN, {from: accounts[3]});
		const uint9e1loH = BigInt("938")
		const addressvDW9i2I = accounts[2]
		const uint256r0oRhSv = await BACMARSLPTOKENPoolESFeM4y.totalSupply.call({from: accounts[3]});
		const uint256a63fKfe = await BACMARSLPTOKENPoolESFeM4y.stake.call(uint9e1loH, {from: "0x0000000000000000000000000000000000000001"});
		const addressdY4sIhu = await BACMARSLPTOKENPoolESFeM4y.updateReward.call(addressvDW9i2I, {from: accounts[0]});
		const uint256IvceO4W = await BACMARSLPTOKENPoolESFeM4y.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressufRAA3C = accounts[1]
		const addressP2KY0T0 = accounts[1]
		const addressgoNI6cC = accounts[0]
		const BACMARSLPTOKENPoolTU85u3z = await BACMARSLPTOKENPool.new(addressufRAA3C, addressP2KY0T0, addressgoNI6cC, {from: accounts[0]});
		const addresslI1bgHP = accounts[4]
		const uint256IDCRW6 = await BACMARSLPTOKENPoolTU85u3z.balanceOf.call(addresslI1bgHP, {from: accounts[0]});
//		await BACMARSLPTOKENPoolTU85u3z.getReward.call({from: accounts[4]});

		assert.equal(uint256IDCRW6, BigInt("0"))
		await expect(BACMARSLPTOKENPoolTU85u3z.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressmN7plYU = accounts[0]
		const addressqYMHzHq = "0x0000000000000000000000000000000000000001"
		const addressSHhCEI = accounts[2]
		const BACMARSLPTOKENPoolwKvOY4U = await BACMARSLPTOKENPool.new(addressmN7plYU, addressqYMHzHq, addressSHhCEI, {from: accounts[4]});
//		await BACMARSLPTOKENPoolwKvOY4U.getReward.call({from: accounts[0]});
//		const uint256mqmINAO = await BACMARSLPTOKENPoolwKvOY4U.totalSupply.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolwKvOY4U.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringycxNIOi = "dLawrJcYCAiOuuxj2JAc"
		const stringPQJp7h = "dN3PiYmqCI394"
		const uintfHOFdkJ = BigInt("29")
		const BACMARSLPTOKENPoolUUgzpB7 = await BACMARSLPTOKENPool.new(stringycxNIOi, stringPQJp7h, uintfHOFdkJ, {from: "0x0000000000000000000000000000000000000001"});
		const uintFDbuvq9 = BigInt("1786")
		const uint256bCE3BT = await BACMARSLPTOKENPoolUUgzpB7.totalSupply.call({from: accounts[4]});
		const uint256i6oK5aK = await BACMARSLPTOKENPoolUUgzpB7.withdraw.call(uintFDbuvq9, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressKcBI7SL = accounts[0]
		const addresssy08PDY = "0x0000000000000000000000000000000000000001"
		const addressSf4Z1ck = accounts[2]
		const BACMARSLPTOKENPoolwKvOY4U = await BACMARSLPTOKENPool.new(addressKcBI7SL, addresssy08PDY, addressSf4Z1ck, {from: accounts[4]});
		const uintO6bJ3z5 = BigInt("316")
		const addressocFHyVs = accounts[0]
//		await BACMARSLPTOKENPoolwKvOY4U.getReward.call({from: accounts[0]});
//		const uint256ZzeZwmP = await BACMARSLPTOKENPoolwKvOY4U.stake.call(uintO6bJ3z5, {from: accounts[4]});
//		const uint256kovLri9 = await BACMARSLPTOKENPoolwKvOY4U.balanceOf.call(addressocFHyVs, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256mqmINAO = await BACMARSLPTOKENPoolwKvOY4U.totalSupply.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolwKvOY4U.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPXMC6e = "vEM8uOGL9iYs8xSbcg2wpsRnq9npTYJxSxnAlmrbeDMOPXLKbliRILSgr"
		const stringNB5OFme = "2z4wwWSXQRKrssTMlWjp9LuFqDG6mpJjgsKfQhzDp9rXcCdctcTs6HIK6XgaX"
		const uintozKao41 = BigInt("194")
		const BACMARSLPTOKENPoolxwXdz7W = await BACMARSLPTOKENPool.new(stringPXMC6e, stringNB5OFme, uintozKao41, {from: accounts[1]});
		const addressTQB3ATM = accounts[4]
		const uint256aJBjG4j = await BACMARSLPTOKENPoolxwXdz7W.balanceOf.call(addressTQB3ATM, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gPFmu4g = await BACMARSLPTOKENPoolxwXdz7W.totalSupply.call({from: accounts[0]});
		await BACMARSLPTOKENPoolxwXdz7W.exit.call({from: accounts[0]});
		await BACMARSLPTOKENPoolxwXdz7W.getReward.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringI4zsVu = "hLBAr7ZwNnPGEyvvGM67qLlBRNMi5MJB7mloHaJvwb6qxt6qrmkR7khvA4MwHDSy"
		const stringwCBlm7c = "dXfwtRz6SJGXsHZ9tI1nHmCt6HWmHGo5R3Ej2P1GFzwTm5bFXpsyOQu6waRDHccuVCd5681y"
		const uintKDZwHhB = BigInt("12")
		const BACMARSLPTOKENPoolxI6Mmb = await BACMARSLPTOKENPool.new(stringI4zsVu, stringwCBlm7c, uintKDZwHhB, {from: accounts[1]});
		const addressm5yG2R = accounts[0]
		const addressiUfMkMh = accounts[4]
		const uint256CY8KefN = await BACMARSLPTOKENPoolxI6Mmb.totalSupply.call({from: accounts[1]});
		const address8tZas5 = await BACMARSLPTOKENPoolxI6Mmb.updateReward.call(addressm5yG2R, {from: accounts[3]});
		const uint256aIBqvIv = await BACMARSLPTOKENPoolxI6Mmb.earned.call(addressiUfMkMh, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlCyNnxP = "ad32JNUqve"
		const stringwwkZeV = "1IgABvpzPGKNrMevjc1H1gyyHtydka3do5QlYgWdYiYdf24"
		const uintxTFjdXt = BigInt("48")
		const BACMARSLPTOKENPoolKyUGeZN = await BACMARSLPTOKENPool.new(stringlCyNnxP, stringwwkZeV, uintxTFjdXt, {from: accounts[5]});
		const uintDuQkTx5 = BigInt("36")
		const bytedlShnQx = "0x0707131e04141f0915050218091a1a1609081c18010a1915151f160d02021c1b"
		const byteYBa8vG5 = "0x1f180d01091d080a1705000b1b09021a040f0d1904150d0f011e0b1e150c050c"
		const uintp5cywpC = BigInt("207")
		const uintxZzw58k = BigInt("1399")
		const uintGuqT3KJ = BigInt("1643")
		await BACMARSLPTOKENPoolKyUGeZN.nonReentrant.call({from: accounts[2]});
		const uint256C2atstS = await BACMARSLPTOKENPoolKyUGeZN.notifyRewardAmount.call(uintDuQkTx5, {from: "0x0000000000000000000000000000000000000001"});
		const uint256zpVjOC2 = await BACMARSLPTOKENPoolKyUGeZN.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256zamQzsz = await BACMARSLPTOKENPoolKyUGeZN.stakeWithPermit.call(uintGuqT3KJ, uintxZzw58k, uintp5cywpC, byteYBa8vG5, bytedlShnQx, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWjn2yN = "Rw1HggVqSc5uMkn37l"
		const stringr9Bvuw = "LXgDoIX9pip2Ny3pOIsptvBtZ58muDL41NRm3TLZXkN7USbQ1F"
		const uintiddSsdh = BigInt("86")
		const BACMARSLPTOKENPoolyrXjy7W = await BACMARSLPTOKENPool.new(stringWjn2yN, stringr9Bvuw, uintiddSsdh, {from: accounts[0]});
		const addresshMbCdqa = accounts[5]
		const uint256kWNeOyk = await BACMARSLPTOKENPoolyrXjy7W.balanceOf.call(addresshMbCdqa, {from: accounts[2]});
		await BACMARSLPTOKENPoolyrXjy7W.onlyRewardsDistribution.call({from: accounts[5]});
		await BACMARSLPTOKENPoolyrXjy7W.getReward.call({from: accounts[2]});
		const uint256EKn6w1i = await BACMARSLPTOKENPoolyrXjy7W.rewardPerToken.call({from: accounts[2]});
		const stringVOfz11c = await BACMARSLPTOKENPoolyrXjy7W.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressTdaL4XN = accounts[4]
		const addressF0dybjJ = accounts[4]
		const addressI7siEwG = accounts[4]
		const BACMARSLPTOKENPoolTE7uUJt = await BACMARSLPTOKENPool.new(addressTdaL4XN, addressF0dybjJ, addressI7siEwG, {from: accounts[0]});
		const uinthZIKF0I = BigInt("751")
		const addressqF0ULCp = accounts[2]
//		const uint256hh7P9mZ = await BACMARSLPTOKENPoolTE7uUJt.notifyRewardAmount.call(uinthZIKF0I, {from: accounts[4]});
//		const uint8LbfbSRK = await BACMARSLPTOKENPoolTE7uUJt.decimals.call({from: accounts[0]});
//		const stringDOj6g7S = await BACMARSLPTOKENPoolTE7uUJt.symbol.call({from: accounts[5]});
//		const addressH72J2OT = await BACMARSLPTOKENPoolTE7uUJt.updateReward.call(addressqF0ULCp, {from: accounts[1]});
//		await BACMARSLPTOKENPoolTE7uUJt.getReward.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolTE7uUJt.notifyRewardAmount.call(uinthZIKF0I, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringF7x6jb = "zMOYiAJoXx2LdhhMIA6TLkTSd1DVyKbxFhcBNiOS73a07Wjrz5oBEKDL9fFIcDnD8RRz5GQektkWQhNO"
		const stringzV6PTeH = "6fzz9GtoAu4gp9IWRyUii1JvGPWxy4gWuBDiBf3clGL3yRYRVP0SHspoXwoplQlgjKanPkfoUQuQlmyNBzUcxkn"
		const uintU0AVGet = BigInt("77")
		const BACMARSLPTOKENPoolgrbL8RW = await BACMARSLPTOKENPool.new(stringF7x6jb, stringzV6PTeH, uintU0AVGet, {from: accounts[2]});
		const uint256bDd0cWa = await BACMARSLPTOKENPoolgrbL8RW.rewardPerToken.call({from: accounts[1]});
		const uint256CUMG5C = await BACMARSLPTOKENPoolgrbL8RW.totalSupply.call({from: accounts[1]});
		await BACMARSLPTOKENPoolgrbL8RW.nonReentrant.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhhDnzX6 = "bsamdHDgLVYgm4XYg"
		const stringZaCRLYl = "V2Qxk8wiJFtjx7x6MX2iXWnzA5zCpX361YRnQVhSXYvYE5UDpPuoKp2EuIHMaAuX7wwMjOFFc9IT8Z9aUjl3VpJEy7L4X"
		const uintrcxTfEx = BigInt("5")
		const BACMARSLPTOKENPoolLQQXvt2 = await BACMARSLPTOKENPool.new(stringhhDnzX6, stringZaCRLYl, uintrcxTfEx, {from: accounts[5]});
		const uintlFTpfLL = BigInt("1443")
		const byteg8Hh3n1 = "0x1603010e1f2013131f0a0b18091d191c1e17090c1a02010c18011c1d1f160f09"
		const byteu9zD4Hi = "0x0d020a0a12051109141b1b010e071a0c0c0a1a110908041a0c1c12160f101f1a"
		const uintpFO5d5s = BigInt("229")
		const uintmCvOWIv = BigInt("496")
		const uintoVSwfJX = BigInt("96")
		const uintZ8Pdec = BigInt("1817")
		const uint256cZ8bhv = await BACMARSLPTOKENPoolLQQXvt2.notifyRewardAmount.call(uintlFTpfLL, {from: accounts[1]});
		const uint256fFGIuIx = await BACMARSLPTOKENPoolLQQXvt2.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256VGfqRW = await BACMARSLPTOKENPoolLQQXvt2.stakeWithPermit.call(uintoVSwfJX, uintmCvOWIv, uintpFO5d5s, byteu9zD4Hi, byteg8Hh3n1, {from: accounts[2]});
		const uint256Mm4Dwk = await BACMARSLPTOKENPoolLQQXvt2.totalSupply.call({from: accounts[3]});
		await BACMARSLPTOKENPoolLQQXvt2.nonReentrant.call({from: accounts[3]});
		const uint256Au9Qb64 = await BACMARSLPTOKENPoolLQQXvt2.withdraw.call(uintZ8Pdec, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringT9o4x6t = "QZTOXYeNn6c6r8i3T0vPoENPQLAsbvnSVVolqjxpSqAHnwQW"
		const stringHaQ1hWk = "uIri9ql5Mc6hKa6SZ9q33nzakDntRhhNcWzicPd4jA7ReR9j2FLLnWIhR8mIaAfla9yvNUQ8fEjbIO2DMPAmJI4seH"
		const uinthsMQ4tu = BigInt("170")
		const BACMARSLPTOKENPoolUAP3LX = await BACMARSLPTOKENPool.new(stringT9o4x6t, stringHaQ1hWk, uinthsMQ4tu, {from: accounts[2]});
		const addressTgQ0Dgr = accounts[1]
		const uint8rfoOrfl = await BACMARSLPTOKENPoolUAP3LX.decimals.call({from: accounts[4]});
		const uint256r87TPXY = await BACMARSLPTOKENPoolUAP3LX.earned.call(addressTgQ0Dgr, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBdavBRh = "bpfXlo9NkEh4aXHOG9CJJs3m903M6IljFogNPbTxnvSjh9fA1wuK9ksEEzN"
		const stringvhkt41J = "c1v1lXdFkAGDKtGU54aKn1BXVPTMErF1dBEN2vQuHKODLSIkfKP2pvGBAahju37yfdFn10bok0lpNvzYK49rYR9YBzuSBma"
		const uintc3XBME = BigInt("239")
		const BACMARSLPTOKENPoolggI3U2t = await BACMARSLPTOKENPool.new(stringBdavBRh, stringvhkt41J, uintc3XBME, {from: accounts[5]});
		const uintOexVFW = BigInt("1932")
		const uint256H4erAEf = await BACMARSLPTOKENPoolggI3U2t.getRewardForDuration.call({from: accounts[4]});
		const uint256v8MNyTZ = await BACMARSLPTOKENPoolggI3U2t.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256y55irS9 = await BACMARSLPTOKENPoolggI3U2t.stake.call(uintOexVFW, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringzSJwPEh = "JlmrfEX2n9k4Qg8fdkaQgFT5zqTDQiul3eW4YLS2tIVWMg5cyUtinMtUXL1pNvIYgkxEXnibayvxx"
		const stringO1VBk3y = "kEqXEEJzd7674ru1SF2zF78mAjU8jN4tirVQvenSOiaohtmuqmVOxlxRi1YuyKtYXPDjQR6tuthSFXjxNfy3xdYgNx5IHsganB"
		const uintArTk6AM = BigInt("179")
		const BACMARSLPTOKENPoollcl1CnB = await BACMARSLPTOKENPool.new(stringzSJwPEh, stringO1VBk3y, uintArTk6AM, {from: accounts[1]});
		const addresshWOTFd = accounts[4]
		const addressilHpHnQ = accounts[5]
		const uint256RHprfBh = await BACMARSLPTOKENPoollcl1CnB.earned.call(addresshWOTFd, {from: accounts[3]});
		const uint256gshHOtu = await BACMARSLPTOKENPoollcl1CnB.rewardPerToken.call({from: accounts[1]});
		const uint256KaLPaGH = await BACMARSLPTOKENPoollcl1CnB.earned.call(addressilHpHnQ, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEAaTHif = "bNlUnVl67bhLlAALrXkmOpKnCjNrODDVq4EM2LmArzrW78dj8y7qQtt8LlYhh02fP1n5yoTuxEJ5kBbzRepVwybj4Lc"
		const stringBdTT3kn = "rW7HdxYkpde81a053Dr6Av5O5DhcUdz987zQ0dwZLbaHDm1sP3QNS8rhV7rk9wYUbIAN5uvjWAAbtzFPh4G4YNrFhB"
		const uintr5uV7rE = BigInt("34")
		const BACMARSLPTOKENPoolJgwgzKO = await BACMARSLPTOKENPool.new(stringEAaTHif, stringBdTT3kn, uintr5uV7rE, {from: "0x0000000000000000000000000000000000000001"});
		const address8kBUlo = accounts[0]
		const uint256E9ufl2C = await BACMARSLPTOKENPoolJgwgzKO.balanceOf.call(address8kBUlo, {from: accounts[4]});
		await BACMARSLPTOKENPoolJgwgzKO.exit.call({from: accounts[0]});
		const stringvGVPtqA = await BACMARSLPTOKENPoolJgwgzKO.symbol.call({from: accounts[0]});
		const uint256cgAVgOC = await BACMARSLPTOKENPoolJgwgzKO.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringASZs6Dm = "U8BX3MDCpon5fKv3zai9PeU9llGf1x8QhVtTDzXUCDnlAiqO8mHQ"
		const stringo8qcNQI = "ylVwBOaBc5zQry1Fsy6tSOHrqVQa8q"
		const uintxENXzBH = BigInt("244")
		const BACMARSLPTOKENPoolzYNo2AD = await BACMARSLPTOKENPool.new(stringASZs6Dm, stringo8qcNQI, uintxENXzBH, {from: accounts[2]});
		const addressAr74QDN = accounts[1]
		const uintvH5JY7Z = BigInt("953")
		const uint256dRWHhtm = await BACMARSLPTOKENPoolzYNo2AD.rewardPerToken.call({from: accounts[2]});
		const uint256xW9DOuZ = await BACMARSLPTOKENPoolzYNo2AD.getRewardForDuration.call({from: accounts[0]});
		const uint256mHTiGF = await BACMARSLPTOKENPoolzYNo2AD.totalSupply.call({from: accounts[1]});
		const uint256c8o1fZ = await BACMARSLPTOKENPoolzYNo2AD.balanceOf.call(addressAr74QDN, {from: accounts[5]});
		const uint256q1F8pfF = await BACMARSLPTOKENPoolzYNo2AD.stake.call(uintvH5JY7Z, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringB5UTqKk = "RFIYj7IDJLGiz26EBxRySsbeb0d2N4fiptHgBxcn6SJQYqB9Y"
		const stringNDzfJSk = "FOetTZD0AXxMCDHVc6DpC2L05tHEzCIFRpnuSAJQuo"
		const uintIAUP5P9 = BigInt("116")
		const BACMARSLPTOKENPoolldF78fM = await BACMARSLPTOKENPool.new(stringB5UTqKk, stringNDzfJSk, uintIAUP5P9, {from: "0x0000000000000000000000000000000000000001"});
		const byteeqYizdH = "0x00042000121714051f1c1b1a0e040b1101140a00160d11040208030b1a031f0f"
		const bytelwOfz1k = "0x08011504150b0d061814131e1f000e09010c1b1f051e150d1c140c0c0e0d0a06"
		const uintxOMdIRF = BigInt("238")
		const uintjVXj0f1 = BigInt("1670")
		const uintpX8Pxw3 = BigInt("1909")
		const uintFoFBheb = BigInt("1133")
		const uint256qfSbjtU = await BACMARSLPTOKENPoolldF78fM.stakeWithPermit.call(uintpX8Pxw3, uintjVXj0f1, uintxOMdIRF, bytelwOfz1k, byteeqYizdH, {from: accounts[1]});
		await BACMARSLPTOKENPoolldF78fM.nonReentrant.call({from: accounts[3]});
		const stringbFxa4RZ = await BACMARSLPTOKENPoolldF78fM.name.call({from: accounts[2]});
		const uint256Ib7DtRd = await BACMARSLPTOKENPoolldF78fM.stake.call(uintFoFBheb, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolldF78fM.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringg4yhe6d = "yyyew3jsYUfFeN3JnAFbbBMNMFzXZzuKip1s6L6aaBpNJ1KO84SiOwQ9koVBLzyD6YgnSCJQA"
		const stringSMMc3Mr = "P5Nr0SoMFdrgnOjlyiVDMVyBbz9gJuMbw24f6cY1YeRarwuAfUM6bjxdPDxxR79lBedRCiPJd9zyI7af2HligrwV9jv1B"
		const uintxW1GKE6 = BigInt("17")
		const BACMARSLPTOKENPoolWCNfO63 = await BACMARSLPTOKENPool.new(stringg4yhe6d, stringSMMc3Mr, uintxW1GKE6, {from: accounts[2]});
		const uintkBFWEKm = BigInt("1459")
		const uint256Xn1DG9R = await BACMARSLPTOKENPoolWCNfO63.stake.call(uintkBFWEKm, {from: accounts[0]});
		await BACMARSLPTOKENPoolWCNfO63.nonReentrant.call({from: accounts[1]});
		const uint256UHpp5ky = await BACMARSLPTOKENPoolWCNfO63.getRewardForDuration.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnfaO0Us = "87bizTaxg5UXpAxNehJTAfiTdwtblf8g2J9lwO4yR53hXhOcErdGE1gk9LPmvNQfZS6KQEyvO5"
		const stringduPgCg2 = "lFLrH"
		const uintTiikuNJ = BigInt("21")
		const BACMARSLPTOKENPoolc2sBcw = await BACMARSLPTOKENPool.new(stringnfaO0Us, stringduPgCg2, uintTiikuNJ, {from: accounts[4]});
		const addressQcaJN9G = accounts[1]
		const byteNLPVtA1 = "0x1804171c0a0b020f170d03170a0d18091f091f0f07121208020c0114140d0308"
		const byterUQp6Rh = "0x13090a2018101e0e1910040318020b180c0e0d13030c09090d05121c100f0a07"
		const uintoXrcwHx = BigInt("181")
		const uinti9W2xEI = BigInt("1953")
		const uintZMPEpTR = BigInt("1009")
		await BACMARSLPTOKENPoolc2sBcw.getReward.call({from: accounts[1]});
		const uint256G19TTpc = await BACMARSLPTOKENPoolc2sBcw.earned.call(addressQcaJN9G, {from: accounts[0]});
		await BACMARSLPTOKENPoolc2sBcw.getReward.call({from: accounts[4]});
		const uint8Rf2zmhy = await BACMARSLPTOKENPoolc2sBcw.decimals.call({from: accounts[1]});
		const uint256W9oocf = await BACMARSLPTOKENPoolc2sBcw.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256zpvrwcv = await BACMARSLPTOKENPoolc2sBcw.stakeWithPermit.call(uintZMPEpTR, uinti9W2xEI, uintoXrcwHx, byterUQp6Rh, byteNLPVtA1, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressbuc75WG = accounts[3]
		const addressDivDQz = accounts[4]
		const addressBpD9D5U = accounts[5]
		const BACMARSLPTOKENPooljOjHiM2 = await BACMARSLPTOKENPool.new(addressbuc75WG, addressDivDQz, addressBpD9D5U, {from: "0x0000000000000000000000000000000000000001"});
		const byteGpYbdoV = "0x0d161c051f0609130b0114050510180907181518081e0b001315130c1e07001c"
		const byteutw5nR = "0x0311020708150c1c10160e060412201803161f0c161a0c090b050616160e0f18"
		const uintTJOnC4 = BigInt("142")
		const uintuvsMGi3 = BigInt("1369")
		const uintSddMugt = BigInt("992")
		const addresspuUOVLl = accounts[4]
		await BACMARSLPTOKENPooljOjHiM2.getReward.call({from: accounts[2]});
		const uint256yG1Kkk = await BACMARSLPTOKENPooljOjHiM2.stakeWithPermit.call(uintSddMugt, uintuvsMGi3, uintTJOnC4, byteutw5nR, byteGpYbdoV, {from: accounts[1]});
		const uint2561oV72b = await BACMARSLPTOKENPooljOjHiM2.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256iiaX4X = await BACMARSLPTOKENPooljOjHiM2.earned.call(addresspuUOVLl, {from: accounts[2]});
		await BACMARSLPTOKENPooljOjHiM2.nonReentrant.call({from: accounts[0]});
		await BACMARSLPTOKENPooljOjHiM2.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnTVfPwS = "8bgxWlLDV4DWoVOVzncPkijPodIITY25A0geHuc3HuI"
		const stringR7aKJyz = "eHVkBNQlmx6OyW4ObpYJF5IFNp4uYAj"
		const uintwyXYe1h = BigInt("43")
		const BACMARSLPTOKENPoolSxg50TT = await BACMARSLPTOKENPool.new(stringnTVfPwS, stringR7aKJyz, uintwyXYe1h, {from: accounts[4]});
		const uintxxpHK4a = BigInt("1603")
		const uint256sbqKaGT = await BACMARSLPTOKENPoolSxg50TT.lastTimeRewardApplicable.call({from: accounts[4]});
		const stringJUYTmP7 = await BACMARSLPTOKENPoolSxg50TT.name.call({from: accounts[0]});
		const uint256wxuVZ8Q = await BACMARSLPTOKENPoolSxg50TT.notifyRewardAmount.call(uintxxpHK4a, {from: accounts[0]});
		await BACMARSLPTOKENPoolSxg50TT.nonReentrant.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringx69eTdc = "rlIe4dDQ1AQKlnyD64jnEz4PeUrW"
		const stringLJRNJYr = "y2Jrs"
		const uintSElowc2 = BigInt("67")
		const BACMARSLPTOKENPoolzz43DkF = await BACMARSLPTOKENPool.new(stringx69eTdc, stringLJRNJYr, uintSElowc2, {from: accounts[1]});
		await BACMARSLPTOKENPoolzz43DkF.exit.call({from: accounts[2]});
		await BACMARSLPTOKENPoolzz43DkF.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringroCrBmP = "1JU4VfmIaSkHCEOjSCctW4RPkEIqbx7Jqkf7VbIn9cSamU8DvvBlbA5EgikQsGhVB6cjUm5Y9J7DrN1il7ULXT8X9wgmbNT33"
		const stringzKA7fsW = "tnWtWYKCKwcKRbmS1L"
		const uint2vDr3q = BigInt("40")
		const BACMARSLPTOKENPoolhJLjG9S = await BACMARSLPTOKENPool.new(stringroCrBmP, stringzKA7fsW, uint2vDr3q, {from: accounts[3]});
		const addressUOsEe1j = accounts[1]
		const addressyksjLPg = await BACMARSLPTOKENPoolhJLjG9S.updateReward.call(addressUOsEe1j, {from: accounts[3]});
		await BACMARSLPTOKENPoolhJLjG9S.exit.call({from: accounts[4]});
		const uint256VEIgMTA = await BACMARSLPTOKENPoolhJLjG9S.totalSupply.call({from: accounts[1]});
		await BACMARSLPTOKENPoolhJLjG9S.nonReentrant.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringd5mSKQb = "dhxRAdaerRVR2NwBEvpcTxj23F2p0xhFATYn9dKCH4h8rBHW1bzYy9kohv4PivyIlRXJ8MjTEahLDVWFKsZEjdwa7LOvsDYhL"
		const stringuCI8MYy = "57g2qoGpMWd9WzB5dCeDFJ5AVGvmUoD1yQFFOu6wLDarYxJcJvLkV9FJQ1zoBbqABkqlWIzOIZDVERZVGbwT"
		const uintKrFFL7R = BigInt("56")
		const BACMARSLPTOKENPoolMkdsmvs = await BACMARSLPTOKENPool.new(stringd5mSKQb, stringuCI8MYy, uintKrFFL7R, {from: accounts[0]});
		const uint8pg7Mnu = await BACMARSLPTOKENPoolMkdsmvs.decimals.call({from: accounts[3]});
		const uint256t8BNUU9 = await BACMARSLPTOKENPoolMkdsmvs.rewardPerToken.call({from: accounts[2]});
		const uint256PAtul91 = await BACMARSLPTOKENPoolMkdsmvs.lastTimeRewardApplicable.call({from: accounts[0]});
		await BACMARSLPTOKENPoolMkdsmvs.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyIy3iGP = "AZIUqxqrnnRuxaaairocmy1yQnTJ"
		const stringOKbxpWc = "m9X6YVlqjv4ZdKnQxppXCalu81eJ8NMHKvBlF5o"
		const uintemoaosl = BigInt("144")
		const BACMARSLPTOKENPoolVr7gdrc = await BACMARSLPTOKENPool.new(stringyIy3iGP, stringOKbxpWc, uintemoaosl, {from: accounts[3]});
		const uints1WLr8Y = BigInt("672")
		const uint256EDP9xAL = await BACMARSLPTOKENPoolVr7gdrc.rewardPerToken.call({from: accounts[5]});
		const uint256xfXG5kx = await BACMARSLPTOKENPoolVr7gdrc.getRewardForDuration.call({from: accounts[4]});
		await BACMARSLPTOKENPoolVr7gdrc.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256HUD7RO = await BACMARSLPTOKENPoolVr7gdrc.stake.call(uints1WLr8Y, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCfrMMUw = "WnslarsIGx27SNVv2spnSTs6wfUsn71ooDBmG9kHGu19XI349gs5TjfCVG8us5fi98QRMlbzZWuS73jmrqBsDYuiJE"
		const stringUBAUvJN = "3dMbqshyNAOWKjaJqrTTAwb"
		const uintP4U5sFQ = BigInt("176")
		const BACMARSLPTOKENPoolKfKlJKJ = await BACMARSLPTOKENPool.new(stringCfrMMUw, stringUBAUvJN, uintP4U5sFQ, {from: accounts[4]});
		const byteqhSM3L6 = "0x0c03180b08140c131a1e06190808160a1c1005050c151408121c200c101a0a0f"
		const byteIP9bTK = "0x120e150c091e17171c060f0c1f15071b0b1003050414160f0c0116201d190220"
		const uintUtDfaDX = BigInt("115")
		const uinta9Fe7JV = BigInt("290")
		const uintfsCsyRK = BigInt("221")
		const uint77tTvD = BigInt("298")
		const uint256KiRzgag = await BACMARSLPTOKENPoolKfKlJKJ.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256UlccoWw = await BACMARSLPTOKENPoolKfKlJKJ.stakeWithPermit.call(uintfsCsyRK, uinta9Fe7JV, uintUtDfaDX, byteIP9bTK, byteqhSM3L6, {from: accounts[0]});
		const uint256BAN3viC = await BACMARSLPTOKENPoolKfKlJKJ.withdraw.call(uint77tTvD, {from: accounts[1]});
		const stringPjsQQxO = await BACMARSLPTOKENPoolKfKlJKJ.name.call({from: accounts[2]});
		await BACMARSLPTOKENPoolKfKlJKJ.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmhJQ0ze = "L2WqPMzTjjR1lxWG1eFedfHHkFu3PkuxN1ndydWC2GIXIIkCm36whoEs3E"
		const stringyMyWXqR = "RGVjZ8GtBD8YHFfmLx1P"
		const uintIGqpcD4 = BigInt("174")
		const BACMARSLPTOKENPools8jVEMw = await BACMARSLPTOKENPool.new(stringmhJQ0ze, stringyMyWXqR, uintIGqpcD4, {from: accounts[3]});
		const uintUnFQAV3 = BigInt("1960")
		const uint256DD16Rn = await BACMARSLPTOKENPools8jVEMw.stake.call(uintUnFQAV3, {from: accounts[2]});
		const strings5VVK3f = await BACMARSLPTOKENPools8jVEMw.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMKGnw5a = "fQfDnEMV"
		const stringPTUniIW = "CCzMjMH4DDGATfEWr8A9DYRrogcJbZaN0W"
		const uintXQsB5uu = BigInt("221")
		const BACMARSLPTOKENPoolTriyGjr = await BACMARSLPTOKENPool.new(stringMKGnw5a, stringPTUniIW, uintXQsB5uu, {from: accounts[3]});
		const addressomCdD04 = accounts[0]
		const addressKlxIV3t = accounts[4]
		const uintkcZMIqo = BigInt("1595")
		const uint256HlFJSRl = await BACMARSLPTOKENPoolTriyGjr.balanceOf.call(addressomCdD04, {from: accounts[1]});
		await BACMARSLPTOKENPoolTriyGjr.nonReentrant.call({from: accounts[1]});
		const uint256SloPyNX = await BACMARSLPTOKENPoolTriyGjr.balanceOf.call(addressKlxIV3t, {from: "0x0000000000000000000000000000000000000001"});
		const uint256DaGr1d0 = await BACMARSLPTOKENPoolTriyGjr.withdraw.call(uintkcZMIqo, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJnqfHD3 = "R"
		const stringvx3bq9 = "xRwiw"
		const uintRC0nIIz = BigInt("116")
		const BACMARSLPTOKENPoolVimMiXC = await BACMARSLPTOKENPool.new(stringJnqfHD3, stringvx3bq9, uintRC0nIIz, {from: accounts[1]});
		const uintdW0GyqW = BigInt("2005")
		const uint256eXJqmZe = await BACMARSLPTOKENPoolVimMiXC.withdraw.call(uintdW0GyqW, {from: accounts[0]});
		await BACMARSLPTOKENPoolVimMiXC.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256mNnkkmn = await BACMARSLPTOKENPoolVimMiXC.getRewardForDuration.call({from: accounts[0]});
		const uint256EZsvKQ8 = await BACMARSLPTOKENPoolVimMiXC.totalSupply.call({from: accounts[1]});
		await BACMARSLPTOKENPoolVimMiXC.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHINMNn = "8iqP6yTHZtNAC8Ze91Ph5igz7YdXDnAlIyhp9XcMTWTigO"
		const stringiDscc7P = "tfNd36ow0e8KnyZDAUzKPTP1rPZ1Vzfnv1kUl2b5dpdojI9"
		const uintuqenPO = BigInt("17")
		const BACMARSLPTOKENPoolrViF6Dk = await BACMARSLPTOKENPool.new(stringHINMNn, stringiDscc7P, uintuqenPO, {from: accounts[0]});
		const uintLk5siJ1 = BigInt("763")
		await BACMARSLPTOKENPoolrViF6Dk.getReward.call({from: accounts[1]});
		const uint256ikF1PB = await BACMARSLPTOKENPoolrViF6Dk.stake.call(uintLk5siJ1, {from: accounts[5]});
		const stringwau9ILL = await BACMARSLPTOKENPoolrViF6Dk.symbol.call({from: accounts[0]});
		await BACMARSLPTOKENPoolrViF6Dk.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringaALkBX = "aVNfbWdSOkOtSQjEgxM7HxH6U7I"
		const stringhKuU3EV = "VHDUo827CvYpRAEdrcLCX2etVhB3W3oh1zz8fPFKrpwkQouaYbV"
		const uintVY4aVtH = BigInt("12")
		const BACMARSLPTOKENPoolnzgBAwQ = await BACMARSLPTOKENPool.new(stringaALkBX, stringhKuU3EV, uintVY4aVtH, {from: accounts[2]});
		const byteDBtJ5w2 = "0x1d0e1f1f1e0211130e1f111b1d1f100d081c0c14060f1d2015051e1d1b1b140d"
		const byteyekv197 = "0x10170815091c1c0f1e191e0e1d18061c02101c1b180f030a0d1b1f1c09010f05"
		const uintLVDsXm4 = BigInt("199")
		const uintjuEPgQV = BigInt("1812")
		const uintHiiAQ8 = BigInt("174")
		const uint256tlSfqXb = await BACMARSLPTOKENPoolnzgBAwQ.totalSupply.call({from: accounts[0]});
		const uint256Gnnc1x = await BACMARSLPTOKENPoolnzgBAwQ.stakeWithPermit.call(uintHiiAQ8, uintjuEPgQV, uintLVDsXm4, byteyekv197, byteDBtJ5w2, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvd7b7PX = "guTUW"
		const stringxU6iBXr = "pJdUW7Tx2ocJPlFd1mQiM3FeNS24byIaHETzwuOqM8yVUASDq40UsQm4i"
		const uintULzXMPZ = BigInt("140")
		const BACMARSLPTOKENPoolaGsLE2x = await BACMARSLPTOKENPool.new(stringvd7b7PX, stringxU6iBXr, uintULzXMPZ, {from: accounts[3]});
		await BACMARSLPTOKENPoolaGsLE2x.nonReentrant.call({from: accounts[1]});
		await BACMARSLPTOKENPoolaGsLE2x.exit.call({from: accounts[1]});
		const uint256Dbp6TYA = await BACMARSLPTOKENPoolaGsLE2x.totalSupply.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZ1SELrU = "hBpApqd8erbv0eIVc"
		const stringVGcxS8s = "njwy60WTjeiyWXywFxoRd87f3tNey5MdOcyqEjBLVHFVhGI4eIE52eVsmSxAfTeAKExzJs"
		const uintjCrR5g = BigInt("76")
		const BACMARSLPTOKENPoolKDR3jyl = await BACMARSLPTOKENPool.new(stringZ1SELrU, stringVGcxS8s, uintjCrR5g, {from: accounts[0]});
		const uint256EZntjTe = await BACMARSLPTOKENPoolKDR3jyl.totalSupply.call({from: accounts[1]});
		const uint8HWJnr93 = await BACMARSLPTOKENPoolKDR3jyl.decimals.call({from: accounts[1]});
		const stringzolZE0A = await BACMARSLPTOKENPoolKDR3jyl.name.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJLDq278 = "tVLHuWdMBd3Y7pYaSei4HHHNnUZCYijdI0tJkGowHjmRybO6UAXEk4zlR9MLWawyrHCxExI6HbicJkQu"
		const stringHtceiHi = "iKyGJNoa3mjgIzmkdGk4VaLQ3wKQIwKMpvfXxSqbRED13znIvoPMkdaWTEFGAjAMa0NPvK4f60kgCV11nb3R8bqG"
		const uintUc3aAPh = BigInt("170")
		const BACMARSLPTOKENPoolFWUQmm = await BACMARSLPTOKENPool.new(stringJLDq278, stringHtceiHi, uintUc3aAPh, {from: accounts[3]});
		const addressZgPnVXi = accounts[4]
		const byteBrpkHMM = "0x1e1d1c0506081503011b20061f15141f0212201e131d110507011b0608091c0a"
		const byteoLLtJcB = "0x05051f0f030b021809041102100501120c170914051c1e1a1215031006071c16"
		const uintHD5NG0W = BigInt("113")
		const uintNdLiGvf = BigInt("1288")
		const uintUfb5kJV = BigInt("694")
		const addressCUkcgX = accounts[2]
		const uint256M2JHgNF = await BACMARSLPTOKENPoolFWUQmm.balanceOf.call(addressZgPnVXi, {from: accounts[1]});
		const stringbiL7i8t = await BACMARSLPTOKENPoolFWUQmm.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256cA9q2BH = await BACMARSLPTOKENPoolFWUQmm.stakeWithPermit.call(uintUfb5kJV, uintNdLiGvf, uintHD5NG0W, byteoLLtJcB, byteBrpkHMM, {from: accounts[5]});
		const uint256d20NdKz = await BACMARSLPTOKENPoolFWUQmm.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addressmYXQRdp = await BACMARSLPTOKENPoolFWUQmm.updateReward.call(addressCUkcgX, {from: accounts[2]});
		const stringI6ITzMC = await BACMARSLPTOKENPoolFWUQmm.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string0skPPf = "fxedClaYHAsQbUk9Sb3qoMOYiyM8JMAprMYBdm53iAD2GY"
		const stringzLI1sb4 = "5WTnJWeaCt4bSpLjz5O5FMGlOiXPkc6PKSzPDRe2uRylpnx5"
		const uintetda4k = BigInt("182")
		const BACMARSLPTOKENPoolpGCv0em = await BACMARSLPTOKENPool.new(string0skPPf, stringzLI1sb4, uintetda4k, {from: accounts[1]});
		const uinteyiWCGO = BigInt("1102")
		const uint256cnLhkH5 = await BACMARSLPTOKENPoolpGCv0em.notifyRewardAmount.call(uinteyiWCGO, {from: accounts[2]});
		const uint256yOXwSj = await BACMARSLPTOKENPoolpGCv0em.rewardPerToken.call({from: accounts[1]});
		const uint256tqrZMPl = await BACMARSLPTOKENPoolpGCv0em.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqDpVwH5 = "zKmUNNejh3bMIT5f9RLm9htqW5HIj21CYh3WOcQQDacPD7yRb8"
		const stringgyA2YX = "1YtO28dOz3SXIflNxetWV3k4tlSf6cfCQJ1yxofvXjGxQS4mX7mOjclCfsoqqqyGar"
		const uintN8iXh5y = BigInt("185")
		const BACMARSLPTOKENPoolopHv2Jp = await BACMARSLPTOKENPool.new(stringqDpVwH5, stringgyA2YX, uintN8iXh5y, {from: accounts[1]});
		const uintbC3fyA1 = BigInt("1556")
		const byteYemtzTe = "0x1c0e1a1214141418181c030115030b02160505050e011c000e1e1509170d1600"
		const byteYUvhV5 = "0x00010f021e0b050f10181319020f090e1814091f1d151d1d1d0c170a051b180a"
		const uintQLvjiGh = BigInt("3")
		const uinte9Ak73b = BigInt("1638")
		const uintEIAJ30L = BigInt("683")
		const uint2563CJRz3 = await BACMARSLPTOKENPoolopHv2Jp.stake.call(uintbC3fyA1, {from: accounts[3]});
		const uint256WllZOyv = await BACMARSLPTOKENPoolopHv2Jp.getRewardForDuration.call({from: accounts[2]});
		const uint256RHZSJO = await BACMARSLPTOKENPoolopHv2Jp.stakeWithPermit.call(uintEIAJ30L, uinte9Ak73b, uintQLvjiGh, byteYUvhV5, byteYemtzTe, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrkBx0gJ = "PffoVoz5SUvoQ63dY9dO38xuj7SAfd6rpLpX3ofkPw9eOb"
		const stringXZqW8pd = "Ffwy1DCAuD6Mui7AkYIJBCTBUDx9uRovgRI4vWbY14cMCkxqoS2kHfmNa"
		const uintrO3idDy = BigInt("4")
		const BACMARSLPTOKENPoolIiReyNj = await BACMARSLPTOKENPool.new(stringrkBx0gJ, stringXZqW8pd, uintrO3idDy, {from: accounts[1]});
		const uintRFaNEJn = BigInt("1235")
		const uintDArKh3f = BigInt("863")
		await BACMARSLPTOKENPoolIiReyNj.nonReentrant.call({from: accounts[4]});
		const uint256AMMZKeo = await BACMARSLPTOKENPoolIiReyNj.withdraw.call(uintRFaNEJn, {from: accounts[2]});
		const uint256RIcTCep = await BACMARSLPTOKENPoolIiReyNj.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolIiReyNj.getReward.call({from: accounts[2]});
		const uint256oviYO0X = await BACMARSLPTOKENPoolIiReyNj.notifyRewardAmount.call(uintDArKh3f, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFfIqRo = "E4UVqyqxavbf51qp8v8VTMehYO7wKbRB5xlK1C4oeTKHchWJN8REVibO3IeYPGHdN8xrRUjcPKTXyq9dIilXltuHvMJI"
		const stringM1gtVSM = "yJ6fEEI29RmHdu90D45t"
		const uintEmVxfho = BigInt("16")
		const BACMARSLPTOKENPoolSJxCBkB = await BACMARSLPTOKENPool.new(stringFfIqRo, stringM1gtVSM, uintEmVxfho, {from: accounts[2]});
		const byteTqstCt = "0x150e011e16071a1011180207060f0e120d020915041110021720051e14191a10"
		const bytejBWYgQf = "0x0d0f1e071d0417140a20030320051e08140a070f1614151d1b01041f1e141e14"
		const uintXk7EvtI = BigInt("31")
		const uintLGVsWV5 = BigInt("668")
		const uintfRPHXRB = BigInt("422")
		const addressR5gFj7q = accounts[2]
		const uinte1L06e = BigInt("663")
		const uint256WOxYXy = await BACMARSLPTOKENPoolSJxCBkB.stakeWithPermit.call(uintfRPHXRB, uintLGVsWV5, uintXk7EvtI, bytejBWYgQf, byteTqstCt, {from: accounts[1]});
		const uint256KPJ8xI9 = await BACMARSLPTOKENPoolSJxCBkB.earned.call(addressR5gFj7q, {from: accounts[2]});
		await BACMARSLPTOKENPoolSJxCBkB.nonReentrant.call({from: accounts[1]});
		const uint256TZvlSYx = await BACMARSLPTOKENPoolSJxCBkB.withdraw.call(uinte1L06e, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringU2SeXo9 = "MJ5Ein1rQKERWREkdbrwpVRwklNlLzFI"
		const stringrtuVE2g = "plPQt706SteRveagMvzicDk8gpoLsoEkk6MuDy5CoyBFuJe9ifK9P2ShormDQKPm6aBwMQE4YsGRSyaMjhCCjQ3pc9"
		const uinteTTlroC = BigInt("200")
		const BACMARSLPTOKENPooljWDWtW1 = await BACMARSLPTOKENPool.new(stringU2SeXo9, stringrtuVE2g, uinteTTlroC, {from: "0x0000000000000000000000000000000000000001"});
		const uintf8lsaOa = BigInt("1384")
		const addressr78UuQN = accounts[0]
		const uint256tk9RFa1 = await BACMARSLPTOKENPooljWDWtW1.stake.call(uintf8lsaOa, {from: accounts[4]});
		const addressAu3C3GZ = await BACMARSLPTOKENPooljWDWtW1.updateReward.call(addressr78UuQN, {from: accounts[4]});
		await BACMARSLPTOKENPooljWDWtW1.nonReentrant.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvlJCzMG = "1xncgIpr7LdueYowjE0hS1oecpxSc5XecCjibSyWhos9ovtUn35qTeRnR4QBoRXnD7IYRmoYL"
		const stringkSVfJXY = "q5Pr71IFImidxn3DBSCRbEgfjqjsisjLMIi1l"
		const uintc2SsR53 = BigInt("164")
		const BACMARSLPTOKENPoolgu1WVXj = await BACMARSLPTOKENPool.new(stringvlJCzMG, stringkSVfJXY, uintc2SsR53, {from: accounts[1]});
		const addressKUDjSvk = accounts[4]
		const addressPyaVGL = "0x0000000000000000000000000000000000000001"
		const uint8IEaM0rK = await BACMARSLPTOKENPoolgu1WVXj.decimals.call({from: accounts[4]});
		const addresswtMn4O7 = await BACMARSLPTOKENPoolgu1WVXj.updateReward.call(addressKUDjSvk, {from: accounts[0]});
		const uint256DojAk93 = await BACMARSLPTOKENPoolgu1WVXj.getRewardForDuration.call({from: accounts[5]});
		await BACMARSLPTOKENPoolgu1WVXj.exit.call({from: accounts[1]});
		await BACMARSLPTOKENPoolgu1WVXj.exit.call({from: accounts[3]});
		const uint256bFIHpMT = await BACMARSLPTOKENPoolgu1WVXj.earned.call(addressPyaVGL, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnxv4Yns = "b8NqWSEhUIbuO15771wPFm2ozaTmunT2fWMTHv2tHDf"
		const stringjOY8Pac = "6DpLJChaTTijmC6lmCBTUDo2TvocoUjV9VKTBUy9qojUwOkr1phrX2hPJ"
		const uintKN35BMM = BigInt("154")
		const BACMARSLPTOKENPoolLGbYuSj = await BACMARSLPTOKENPool.new(stringnxv4Yns, stringjOY8Pac, uintKN35BMM, {from: accounts[0]});
		const uinthjdaTRV = BigInt("483")
		const uintLW5MbzB = BigInt("355")
		const uint256Rvh5G0x = await BACMARSLPTOKENPoolLGbYuSj.withdraw.call(uinthjdaTRV, {from: accounts[1]});
		const uint256OvhaxWf = await BACMARSLPTOKENPoolLGbYuSj.stake.call(uintLW5MbzB, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQx3iWjb = "iRw2EwGrLqLMlqAPzBHkbQ4F5dRsXKmeGiDY4p6raKiXwiTUN2UHXymE99efN1gheJ71Gcz6pfVNfMHR1FjFB80Yv5"
		const stringkMQ0YG = "MiRJ5sFKnoGN3i7pAvpU1AKBW7b25S"
		const uintByp6MTs = BigInt("26")
		const BACMARSLPTOKENPoolLwwwdhH = await BACMARSLPTOKENPool.new(stringQx3iWjb, stringkMQ0YG, uintByp6MTs, {from: accounts[4]});
		const uintaPIzmpy = BigInt("1717")
		const byteHlgfZvE = "0x001818200c0d100c030616041b1006021a10101a0220171c110617171a070c16"
		const byteGFOWqqU = "0x05101d1e1f16091503051f121c0e041206111b1d0011160205011e1f01071707"
		const uintpV8ECX = BigInt("5")
		const uintvxW8f7e = BigInt("1756")
		const uint1nd4EL = BigInt("915")
		const uint8WDZ4zZD = await BACMARSLPTOKENPoolLwwwdhH.decimals.call({from: accounts[0]});
		const uint256nPQQdq2 = await BACMARSLPTOKENPoolLwwwdhH.stake.call(uintaPIzmpy, {from: accounts[3]});
		const uint256ogFXeY = await BACMARSLPTOKENPoolLwwwdhH.stakeWithPermit.call(uint1nd4EL, uintvxW8f7e, uintpV8ECX, byteGFOWqqU, byteHlgfZvE, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringdXkNTqw = "A9WI5DMWbIe263MCMefNfg2FkbqJZo6mbo4suqorYA7WYS4gOs1dbbwIMtub4dasGO6ULjnzdiQosvPKhMc4qb3aMDb5A1n"
		const stringsSBJVRk = "3Kja7UfnbAATyQnxLnHbbvYWOJ1bv80QjuG28seiPF6arsgDEtGGLlxi"
		const uintiCguv3l = BigInt("62")
		const BACMARSLPTOKENPoolk6EZwIc = await BACMARSLPTOKENPool.new(stringdXkNTqw, stringsSBJVRk, uintiCguv3l, {from: accounts[5]});
		const uintuVZZ8dv = BigInt("1518")
		const uintRX9X37m = BigInt("655")
		const addressPLiDt4x = accounts[1]
		const uint256tRsgm6 = await BACMARSLPTOKENPoolk6EZwIc.stake.call(uintuVZZ8dv, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolk6EZwIc.nonReentrant.call({from: accounts[3]});
		const uint256rYftIQ = await BACMARSLPTOKENPoolk6EZwIc.withdraw.call(uintRX9X37m, {from: accounts[4]});
		const uint256cBuh71h = await BACMARSLPTOKENPoolk6EZwIc.earned.call(addressPLiDt4x, {from: accounts[4]});
		const stringZa6QDx = await BACMARSLPTOKENPoolk6EZwIc.symbol.call({from: accounts[4]});
	});
})