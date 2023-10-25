const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressAqpsjvv = "0x0000000000000000000000000000000000000001"
		const addressxK99d25 = accounts[0]
		const addressAX9DAzc = accounts[5]
		const BACMARSLPTOKENPoolWi0wjnV = await BACMARSLPTOKENPool.new(addressAqpsjvv, addressxK99d25, addressAX9DAzc, {from: "0x0000000000000000000000000000000000000001"});
		const byteg9yXHpd = "0x0f070217171c1e1e08081d060d0a0d1c1b0e161a160d131a110a060a080e1c10"
		const byteTlrbUDT = "0x1f05101a0d17010c0800060c111200050b17031c201a1618041c0a19181f0f0f"
		const uintpkUISWS = BigInt("229")
		const uintJCZmmpO = BigInt("1963")
		const uintKHKAwZ5 = BigInt("1665")
		const uintn6kaC7 = BigInt("738")
		const address9HuMrI = accounts[0]
		const addressTGsM5K3 = accounts[4]
		const uint256eQJMwGL = await BACMARSLPTOKENPoolWi0wjnV.stakeWithPermit.call(uintKHKAwZ5, uintJCZmmpO, uintpkUISWS, byteTlrbUDT, byteg9yXHpd, {from: accounts[1]});
		const uint256d1Ktd5A = await BACMARSLPTOKENPoolWi0wjnV.stake.call(uintn6kaC7, {from: accounts[2]});
		const uint256sZDOh7G = await BACMARSLPTOKENPoolWi0wjnV.earned.call(address9HuMrI, {from: accounts[4]});
		const uint256WKOnpH5 = await BACMARSLPTOKENPoolWi0wjnV.balanceOf.call(addressTGsM5K3, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressLsgZy2p = accounts[0]
		const addressv7lRdhp = accounts[0]
		const addressufavxi = accounts[2]
		const BACMARSLPTOKENPoolbZKhYhw = await BACMARSLPTOKENPool.new(addressLsgZy2p, addressv7lRdhp, addressufavxi, {from: accounts[4]});
		const uintL3Z3GW9 = BigInt("1224")
		const addressTQtkWsf = accounts[1]
		const uintbhJMbok = BigInt("201")
		const uint256uf8eHNc = await BACMARSLPTOKENPoolbZKhYhw.notifyRewardAmount.call(uintL3Z3GW9, {from: accounts[4]});
		const uint256kU5q1tX = await BACMARSLPTOKENPoolbZKhYhw.balanceOf.call(addressTQtkWsf, {from: accounts[4]});
		const uint256PZnn38F = await BACMARSLPTOKENPoolbZKhYhw.notifyRewardAmount.call(uintbhJMbok, {from: accounts[2]});

		await expect(BACMARSLPTOKENPoolbZKhYhw.notifyRewardAmount.call(uintL3Z3GW9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringaZyfsER = "DBLx4abCKqdIfXPrl9f2P6Dk1WKV9Kil7EmtUuo5ihW4jD1TcjYVY1gM7WkKE6nNIZbeFdaRoycpc6tOH"
		const stringVxE6wBc = "f1ewRfTonbEh7RjNQMK75tJEz2KVH3PtGInM1M3LGW1sCzFlTEixNIq3Tz2dQWd2uF1aX6ws3jikxoiYztoqBVnKW4RMxJu"
		const uintqrpXvEr = BigInt("167")
		const BACMARSLPTOKENPoolSsKfaW6 = await BACMARSLPTOKENPool.new(stringaZyfsER, stringVxE6wBc, uintqrpXvEr, {from: accounts[4]});
		const uintbfuLXpn = BigInt("1388")
		const uintC7ALeD = BigInt("1060")
		const bytemXYYChj = "0x1a011b070b20101f1d170c05190209081912071e0e041a190508100b05180f09"
		const byteHOM3mcX = "0x131d0705010707001312190a07090b0f06161313140103140f0505121e201f1c"
		const uintcuoCTEV = BigInt("218")
		const uintjSwH0d = BigInt("79")
		const uintFlJWlGG = BigInt("70")
		const addressp0DsyEC = accounts[3]
		const uintQzTyRe = BigInt("21")
		const uint256SO8GW8l = await BACMARSLPTOKENPoolSsKfaW6.notifyRewardAmount.call(uintbfuLXpn, {from: accounts[4]});
		const uint256Ba6d13G = await BACMARSLPTOKENPoolSsKfaW6.notifyRewardAmount.call(uintC7ALeD, {from: accounts[4]});
		const uint2562tf1QT = await BACMARSLPTOKENPoolSsKfaW6.stakeWithPermit.call(uintFlJWlGG, uintjSwH0d, uintcuoCTEV, byteHOM3mcX, bytemXYYChj, {from: accounts[1]});
		const addressXbutu5 = await BACMARSLPTOKENPoolSsKfaW6.updateReward.call(addressp0DsyEC, {from: accounts[4]});
		const uint256TEvlhfE = await BACMARSLPTOKENPoolSsKfaW6.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256ZkZ9NiX = await BACMARSLPTOKENPoolSsKfaW6.withdraw.call(uintQzTyRe, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressoMPptv = "0x0000000000000000000000000000000000000001"
		const addressvjqfXgL = accounts[3]
		const addressTxmRsFE = accounts[1]
		const BACMARSLPTOKENPool01yS9I = await BACMARSLPTOKENPool.new(addressoMPptv, addressvjqfXgL, addressTxmRsFE, {from: accounts[1]});
		const addressdv8ZsS8 = accounts[3]
		const addressid8xR6z = accounts[3]
		await BACMARSLPTOKENPool01yS9I.onlyRewardsDistribution.call({from: accounts[0]});
		await BACMARSLPTOKENPool01yS9I.exit.call({from: accounts[3]});
		const uint256rjU7pbU = await BACMARSLPTOKENPool01yS9I.getRewardForDuration.call({from: accounts[0]});
		const uint256RszKOHM = await BACMARSLPTOKENPool01yS9I.earned.call(addressdv8ZsS8, {from: accounts[4]});
		const uint256YrJrnfn = await BACMARSLPTOKENPool01yS9I.earned.call(addressid8xR6z, {from: accounts[1]});

		await expect(BACMARSLPTOKENPool01yS9I.onlyRewardsDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringN9TlItN = "0gqFRgJPXJPThOjG9KbbfzBTw16kYBiFcyxFr9ATwU1"
		const stringcIl9L7Z = "rjShp3xte1Xh9w2rjhtvWHNz1t6F59d6C5lhJAyENU"
		const uintJQnbcP = BigInt("160")
		const BACMARSLPTOKENPooleCnPlAy = await BACMARSLPTOKENPool.new(stringN9TlItN, stringcIl9L7Z, uintJQnbcP, {from: accounts[2]});
		const uintP8xUoP = BigInt("1259")
		await BACMARSLPTOKENPooleCnPlAy.exit.call({from: accounts[0]});
		const uint256yRL1X9G = await BACMARSLPTOKENPooleCnPlAy.rewardPerToken.call({from: accounts[0]});
		const uint256EgFmsJH = await BACMARSLPTOKENPooleCnPlAy.notifyRewardAmount.call(uintP8xUoP, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressSlpTNCq = accounts[3]
		const addresshtTgVld = accounts[4]
		const addressDenSODB = accounts[2]
		const BACMARSLPTOKENPoolPLmlHA7 = await BACMARSLPTOKENPool.new(addressSlpTNCq, addresshtTgVld, addressDenSODB, {from: accounts[1]});
		const uint256kh74JXI = await BACMARSLPTOKENPoolPLmlHA7.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolPLmlHA7.nonReentrant.call({from: accounts[2]});
		const stringZVxlBiY = await BACMARSLPTOKENPoolPLmlHA7.symbol.call({from: accounts[0]});
		await BACMARSLPTOKENPoolPLmlHA7.nonReentrant.call({from: accounts[2]});

		assert.equal(uint256kh74JXI, BigInt("0"))
		await expect(BACMARSLPTOKENPoolPLmlHA7.nonReentrant.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressUvgt86i = accounts[2]
		const addresspn0Vl5 = accounts[1]
		const addressCcLlaFI = accounts[0]
		const BACMARSLPTOKENPoolgsXDGD8 = await BACMARSLPTOKENPool.new(addressUvgt86i, addresspn0Vl5, addressCcLlaFI, {from: accounts[4]});
		const uintkthqJcO = BigInt("385")
		const uint256rbJDnu5 = await BACMARSLPTOKENPoolgsXDGD8.rewardPerToken.call({from: accounts[0]});
		const uint256b4op1lu = await BACMARSLPTOKENPoolgsXDGD8.rewardPerToken.call({from: accounts[1]});
		const uint256HlVRZep = await BACMARSLPTOKENPoolgsXDGD8.stake.call(uintkthqJcO, {from: accounts[0]});
		await BACMARSLPTOKENPoolgsXDGD8.exit.call({from: accounts[4]});

		assert.equal(uint256b4op1lu, BigInt("0"))
		assert.equal(uint256rbJDnu5, BigInt("0"))
		await expect(BACMARSLPTOKENPoolgsXDGD8.stake.call(uintkthqJcO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressiD0b3ZP = accounts[2]
		const addressWvB7D3C = accounts[1]
		const addressiMp9i1d = accounts[0]
		const BACMARSLPTOKENPoolgsXDGD8 = await BACMARSLPTOKENPool.new(addressiD0b3ZP, addressWvB7D3C, addressiMp9i1d, {from: accounts[4]});
		const uint256rbJDnu5 = await BACMARSLPTOKENPoolgsXDGD8.rewardPerToken.call({from: accounts[0]});
		const uint256b4op1lu = await BACMARSLPTOKENPoolgsXDGD8.rewardPerToken.call({from: accounts[1]});
		await BACMARSLPTOKENPoolgsXDGD8.exit.call({from: accounts[4]});

		assert.equal(uint256b4op1lu, BigInt("0"))
		assert.equal(uint256rbJDnu5, BigInt("0"))
		await expect(BACMARSLPTOKENPoolgsXDGD8.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringAZsrjW = "KeeWeKP5GsrGx7Bxw5QoYw0v3NXDLhx7nR9Gg1ZkIkAiBm51iRE8HyI"
		const stringnq95Qn = "AeH95CU6STPSqBFcY4LkfWX9is7yMJ4oLMervh2mMAWUf3utkNUEaiJNsgq9vR7j"
		const uintuLWPoSG = BigInt("236")
		const BACMARSLPTOKENPoolWiBghuJ = await BACMARSLPTOKENPool.new(stringAZsrjW, stringnq95Qn, uintuLWPoSG, {from: accounts[0]});
		const addressVDuB8qA = accounts[2]
		const uint8asAW63v = await BACMARSLPTOKENPoolWiBghuJ.decimals.call({from: accounts[5]});
		const uint256zxke0U5 = await BACMARSLPTOKENPoolWiBghuJ.earned.call(addressVDuB8qA, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGnQ85Mg = "jNu5YneOCPlt5ODezOxH7svmftrL40vKjTQ"
		const stringgjVVpDO = "XOjcYphvm6WONX7wQASwCol9VvM0EjHskPtFH2sDcjLSgIwvAmJsDpfbGB7QUE1j2j6XY53g333vF1nr4Cw"
		const uintBjpXWmZ = BigInt("53")
		const BACMARSLPTOKENPooldN7qRfb = await BACMARSLPTOKENPool.new(stringGnQ85Mg, stringgjVVpDO, uintBjpXWmZ, {from: accounts[4]});
		const uint256Vom0L1k = await BACMARSLPTOKENPooldN7qRfb.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const stringYaW6T3 = await BACMARSLPTOKENPooldN7qRfb.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const address62NtEs = accounts[1]
		const addressddCh83 = "0x0000000000000000000000000000000000000001"
		const addressnoMxfq0 = accounts[0]
		const BACMARSLPTOKENPoolruN5Gy0 = await BACMARSLPTOKENPool.new(address62NtEs, addressddCh83, addressnoMxfq0, {from: accounts[3]});
		const addressvoxJda = "0x0000000000000000000000000000000000000001"
		const uint256FYVWF4O = await BACMARSLPTOKENPoolruN5Gy0.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolruN5Gy0.nonReentrant.call({from: accounts[5]});
		const uint256id9YoV = await BACMARSLPTOKENPoolruN5Gy0.balanceOf.call(addressvoxJda, {from: accounts[5]});
		const string3JXNPD = await BACMARSLPTOKENPoolruN5Gy0.symbol.call({from: accounts[5]});

		assert.equal(uint256FYVWF4O, BigInt("0"))
		await expect(BACMARSLPTOKENPoolruN5Gy0.nonReentrant.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresspYSpHDq = accounts[2]
		const addressyJq1PxS = accounts[1]
		const addressryYn2Nu = accounts[0]
		const BACMARSLPTOKENPoolgsXDGD8 = await BACMARSLPTOKENPool.new(addresspYSpHDq, addressyJq1PxS, addressryYn2Nu, {from: accounts[4]});
		const byteMBTGaTW = "0x19131e0e02171907160615171b111a011a1c18200213061212020c1d100d0d14"
		const bytexUnW0Ja = "0x070212150c1b16091b08081f1c1d110d0617130a1512000e180a0b080917061e"
		const uintMeOCrV5 = BigInt("157")
		const uintiMIXNiw = BigInt("1452")
		const uintn43HClH = BigInt("185")
		const uint256rbJDnu5 = await BACMARSLPTOKENPoolgsXDGD8.rewardPerToken.call({from: accounts[0]});
		const uint256b4op1lu = await BACMARSLPTOKENPoolgsXDGD8.rewardPerToken.call({from: accounts[1]});
		const uint256vXwuHKA = await BACMARSLPTOKENPoolgsXDGD8.stakeWithPermit.call(uintn43HClH, uintiMIXNiw, uintMeOCrV5, bytexUnW0Ja, byteMBTGaTW, {from: accounts[0]});
		await BACMARSLPTOKENPoolgsXDGD8.exit.call({from: accounts[4]});

		assert.equal(uint256b4op1lu, BigInt("0"))
		assert.equal(uint256rbJDnu5, BigInt("0"))
		await expect(BACMARSLPTOKENPoolgsXDGD8.stakeWithPermit.call(uintn43HClH, uintiMIXNiw, uintMeOCrV5, bytexUnW0Ja, byteMBTGaTW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressPnziafT = accounts[1]
		const addressDBAwrP0 = "0x0000000000000000000000000000000000000001"
		const addressyZwNh5Q = accounts[0]
		const BACMARSLPTOKENPoolruN5Gy0 = await BACMARSLPTOKENPool.new(addressPnziafT, addressDBAwrP0, addressyZwNh5Q, {from: accounts[3]});
		const uintCj7phVs = BigInt("2010")
		const uint256nDAqhGu = await BACMARSLPTOKENPoolruN5Gy0.getRewardForDuration.call({from: accounts[4]});
		const uint256Dr1N0I8 = await BACMARSLPTOKENPoolruN5Gy0.stake.call(uintCj7phVs, {from: accounts[5]});
		const string3JXNPD = await BACMARSLPTOKENPoolruN5Gy0.symbol.call({from: accounts[5]});

		assert.equal(uint256nDAqhGu, BigInt("0"))
		await expect(BACMARSLPTOKENPoolruN5Gy0.stake.call(uintCj7phVs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSHCvISY = "5faD6FLXrzBFzWLFOIifcpz0D1OgZDhrJFjD4oI5k8v4wKPjiERNlcjPGt7pKq5PAsZ8IL5jyRggLvBx10y6EyzQRyTjLp9u"
		const stringMRTDFzI = "wMREwBNwqhrFSpe4VVKW97XfrSoDQ7wQ0wrLTq2ePkBMM3Jjlgg8wBcKQLXP6M4PQwXI3Lsv7QjaqK8OolmkUJ"
		const uintYO6MfAT = BigInt("51")
		const BACMARSLPTOKENPoolOhA5BdR = await BACMARSLPTOKENPool.new(stringSHCvISY, stringMRTDFzI, uintYO6MfAT, {from: accounts[0]});
		const byteZF2qbOO = "0x0f1a0c0b1c1c16121906121f1b201407011019110b1e12030b0c19151e0f150a"
		const bytextb2HcB = "0x01061a05171c1c0217161807050e060c1f151e120a0c04161804121a071b0e0d"
		const uintpWVQs6 = BigInt("12")
		const uintBCBE1yt = BigInt("1272")
		const uintmmAwv8n = BigInt("137")
		const byteJZvrp68 = "0x1a0f170812130605100b180b051b0313060e0300030d1601181f17140c1a1306"
		const bytexOUOwmc = "0x0602041f180f0c071908131f09160e1a1a0c080816101d19060a0a1e1e0c191a"
		const uintnz2SecA = BigInt("16")
		const uintClaALff = BigInt("214")
		const uintrYVokJ3 = BigInt("1394")
		const uint256tmKut2e = await BACMARSLPTOKENPoolOhA5BdR.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256BfyRBC = await BACMARSLPTOKENPoolOhA5BdR.stakeWithPermit.call(uintmmAwv8n, uintBCBE1yt, uintpWVQs6, bytextb2HcB, byteZF2qbOO, {from: accounts[1]});
		const uint256MCLM8N = await BACMARSLPTOKENPoolOhA5BdR.stakeWithPermit.call(uintrYVokJ3, uintClaALff, uintnz2SecA, bytexOUOwmc, byteJZvrp68, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressGkrnMJs = accounts[2]
		const addressagvOOZX = accounts[1]
		const addressXRrnrQU = accounts[0]
		const BACMARSLPTOKENPoolgsXDGD8 = await BACMARSLPTOKENPool.new(addressGkrnMJs, addressagvOOZX, addressXRrnrQU, {from: accounts[4]});
		const uintBElZGO = BigInt("1730")
		const uintJhTgFEl = BigInt("357")
		const uint256KpfKC0g = await BACMARSLPTOKENPoolgsXDGD8.withdraw.call(uintBElZGO, {from: accounts[5]});
		const stringxg0D8JW = await BACMARSLPTOKENPoolgsXDGD8.symbol.call({from: accounts[3]});
		const uint256b4op1lu = await BACMARSLPTOKENPoolgsXDGD8.rewardPerToken.call({from: accounts[1]});
		const uint256HlVRZep = await BACMARSLPTOKENPoolgsXDGD8.stake.call(uintJhTgFEl, {from: accounts[0]});
		await BACMARSLPTOKENPoolgsXDGD8.exit.call({from: accounts[4]});
		await BACMARSLPTOKENPoolgsXDGD8.nonReentrant.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolgsXDGD8.withdraw.call(uintBElZGO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressP55aV20 = accounts[2]
		const addresssp7JFtH = accounts[1]
		const addressIU352GR = accounts[0]
		const BACMARSLPTOKENPoolgsXDGD8 = await BACMARSLPTOKENPool.new(addressP55aV20, addresssp7JFtH, addressIU352GR, {from: accounts[4]});
		const addressEDmn3Cx = accounts[5]
		const uint256WN8j0rY = await BACMARSLPTOKENPoolgsXDGD8.balanceOf.call(addressEDmn3Cx, {from: accounts[1]});
		await BACMARSLPTOKENPoolgsXDGD8.exit.call({from: accounts[4]});

		assert.equal(uint256WN8j0rY, BigInt("0"))
		await expect(BACMARSLPTOKENPoolgsXDGD8.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjJvBn6I = "byU7ebvp9IlrVSRs5sV9ge1ADwellYtdKIrLWvw1N55yY8UMmEsn2F2gqMa7gSHqHTwsIb8LSY7HNqInGsg"
		const stringTbQZeJN = "NItC46RbFwhYNUYkCOMxQykuJA5TNoIdOhckPEYRzmPtxFCdlfIx0B42kU"
		const uintwol2rAS = BigInt("169")
		const BACMARSLPTOKENPoolyPwQ6jH = await BACMARSLPTOKENPool.new(stringjJvBn6I, stringTbQZeJN, uintwol2rAS, {from: accounts[0]});
		const uint256K8M2OiQ = await BACMARSLPTOKENPoolyPwQ6jH.getRewardForDuration.call({from: accounts[4]});
		const uint256E8wqspj = await BACMARSLPTOKENPoolyPwQ6jH.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressthysWdV = accounts[2]
		const addressKeRlAvJ = accounts[1]
		const addressN9i0ojD = accounts[0]
		const BACMARSLPTOKENPoolgsXDGD8 = await BACMARSLPTOKENPool.new(addressthysWdV, addressKeRlAvJ, addressN9i0ojD, {from: accounts[4]});
		const bytee5i4Fw = "0x19131e0e02171907160615171b111a011a1c18200213061212020c1d100d0d14"
		const bytewREyz2h = "0x070212150c1b16091b08081f1c1d110d0617130a1512000e180a0b080917061e"
		const uintaLQzQum = BigInt("157")
		const uints5ZVdp1 = BigInt("1452")
		const uintaboyK3C = BigInt("185")
		const uint256rbJDnu5 = await BACMARSLPTOKENPoolgsXDGD8.rewardPerToken.call({from: accounts[0]});
		const uint256yumVgMz = await BACMARSLPTOKENPoolgsXDGD8.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256U4LcHFq = await BACMARSLPTOKENPoolgsXDGD8.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256b4op1lu = await BACMARSLPTOKENPoolgsXDGD8.rewardPerToken.call({from: accounts[1]});
		await BACMARSLPTOKENPoolgsXDGD8.getReward.call({from: accounts[3]});
		const uint256vXwuHKA = await BACMARSLPTOKENPoolgsXDGD8.stakeWithPermit.call(uintaboyK3C, uints5ZVdp1, uintaLQzQum, bytewREyz2h, bytee5i4Fw, {from: accounts[0]});
		await BACMARSLPTOKENPoolgsXDGD8.exit.call({from: accounts[4]});

		assert.equal(uint256U4LcHFq, BigInt("0"))
		assert.equal(uint256b4op1lu, BigInt("0"))
		assert.equal(uint256rbJDnu5, BigInt("0"))
		assert.equal(uint256yumVgMz, BigInt("0"))
		await expect(BACMARSLPTOKENPoolgsXDGD8.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressihFluIl = accounts[2]
		const addresswq6BmiW = accounts[1]
		const addressOoaY0N3 = accounts[0]
		const BACMARSLPTOKENPoolgsXDGD8 = await BACMARSLPTOKENPool.new(addressihFluIl, addresswq6BmiW, addressOoaY0N3, {from: accounts[4]});
		const uintqTmYQWR = BigInt("375")
		const byteUlg8dAH = "0x19131e0e02171907160615171b111a011a1c18200213061212020c1d100d0d14"
		const bytezw0CZzO = "0x070212150c1b16091b08081f1c1d110d0617130a1512000e180a0b080917061e"
		const uintw3xJqff = BigInt("157")
		const uintY93kgoV = BigInt("1452")
		const uinti7C1GE = BigInt("185")
		const uint256rbJDnu5 = await BACMARSLPTOKENPoolgsXDGD8.rewardPerToken.call({from: accounts[0]});
		const uint256b4op1lu = await BACMARSLPTOKENPoolgsXDGD8.rewardPerToken.call({from: accounts[1]});
		const uint256HlVRZep = await BACMARSLPTOKENPoolgsXDGD8.stake.call(uintqTmYQWR, {from: accounts[0]});
		const uint256vXwuHKA = await BACMARSLPTOKENPoolgsXDGD8.stakeWithPermit.call(uinti7C1GE, uintY93kgoV, uintw3xJqff, bytezw0CZzO, byteUlg8dAH, {from: accounts[0]});
		await BACMARSLPTOKENPoolgsXDGD8.exit.call({from: accounts[4]});

		assert.equal(uint256b4op1lu, BigInt("0"))
		assert.equal(uint256rbJDnu5, BigInt("0"))
		await expect(BACMARSLPTOKENPoolgsXDGD8.stake.call(uintqTmYQWR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringxycPjIU = "KGs145u3PL1C8uSWfiN6LWph5ohYxVPDX7dLMVHEeg5fOJ0bFcGxe1oVX36375IgIp"
		const stringpbYoAJt = "oGTdH5nmy4I7TczoX45D7S7I2lGoBUQNC2bE3a9e67lMvLhx"
		const uintY7FejNl = BigInt("73")
		const BACMARSLPTOKENPooljR9tIci = await BACMARSLPTOKENPool.new(stringxycPjIU, stringpbYoAJt, uintY7FejNl, {from: accounts[3]});
		const byteAvMdEjZ = "0x0703101512101413091a0e130b1d1b1d171f1a071b0a05010d05011b1506010e"
		const byteBYZEVqR = "0x1e0305191b161603200e1c15030f00091a0120061e0d030616190d1b0112180e"
		const uintV1xQOD9 = BigInt("152")
		const uintq1X9hk = BigInt("1620")
		const uintP2GTTat = BigInt("57")
		const uint256tTllsLN = await BACMARSLPTOKENPooljR9tIci.stakeWithPermit.call(uintP2GTTat, uintq1X9hk, uintV1xQOD9, byteBYZEVqR, byteAvMdEjZ, {from: accounts[2]});
		await BACMARSLPTOKENPooljR9tIci.nonReentrant.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresstyLMaD = accounts[2]
		const addressSJKiqLp = accounts[1]
		const addresshSDX6JI = accounts[0]
		const BACMARSLPTOKENPoolgsXDGD8 = await BACMARSLPTOKENPool.new(addresstyLMaD, addressSJKiqLp, addresshSDX6JI, {from: accounts[4]});
		const uint256b4op1lu = await BACMARSLPTOKENPoolgsXDGD8.rewardPerToken.call({from: accounts[1]});
		const uint256f24tGYI = await BACMARSLPTOKENPoolgsXDGD8.getRewardForDuration.call({from: accounts[0]});
		await BACMARSLPTOKENPoolgsXDGD8.exit.call({from: accounts[4]});
		const uint256InVXS6g = await BACMARSLPTOKENPoolgsXDGD8.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256b4op1lu, BigInt("0"))
		assert.equal(uint256f24tGYI, BigInt("0"))
		await expect(BACMARSLPTOKENPoolgsXDGD8.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrPJHBXy = "WLvqzChzLbkDSh4NHg2enAjCFm3aYBiooxVqUsK"
		const stringlGvZYe = "1ojEkNlIhwdvdS4iy3i9j5Y8XJ4niAdw0F54hMXA1lCE"
		const uintbCW384U = BigInt("142")
		const BACMARSLPTOKENPoolcIhzyWS = await BACMARSLPTOKENPool.new(stringrPJHBXy, stringlGvZYe, uintbCW384U, {from: accounts[0]});
		const byteu8vuxB6 = "0x160a011b06161c0e041f021a171c181e1a152015181e1809111c0f1d10090b0b"
		const byteAmNrW1i = "0x0d001f0c040f0a0a171707090e0800020e0f19140416020b0c16030f18191004"
		const uintGwju8Od = BigInt("42")
		const uintxC2CJUc = BigInt("760")
		const uintC8QF3lV = BigInt("655")
		const uintAp9WpOz = BigInt("921")
		const uintHkOXDdi = BigInt("218")
		await BACMARSLPTOKENPoolcIhzyWS.exit.call({from: accounts[1]});
		const uint8oE3z60G = await BACMARSLPTOKENPoolcIhzyWS.decimals.call({from: accounts[1]});
		const uint256vDaFnJb = await BACMARSLPTOKENPoolcIhzyWS.stakeWithPermit.call(uintC8QF3lV, uintxC2CJUc, uintGwju8Od, byteAmNrW1i, byteu8vuxB6, {from: accounts[3]});
		const uint256BjBfHLD = await BACMARSLPTOKENPoolcIhzyWS.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256ydXbLjE = await BACMARSLPTOKENPoolcIhzyWS.notifyRewardAmount.call(uintAp9WpOz, {from: accounts[1]});
		const uint256YoYElXh = await BACMARSLPTOKENPoolcIhzyWS.notifyRewardAmount.call(uintHkOXDdi, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressnu4thts = accounts[2]
		const addresshfBZJia = accounts[1]
		const addressgedxZ9e = accounts[0]
		const BACMARSLPTOKENPoolgsXDGD8 = await BACMARSLPTOKENPool.new(addressnu4thts, addresshfBZJia, addressgedxZ9e, {from: accounts[4]});
		const uinthe9Y4yf = BigInt("534")
		const uint256rOr5uKZ = await BACMARSLPTOKENPoolgsXDGD8.withdraw.call(uinthe9Y4yf, {from: accounts[3]});
		const uint8I4PCGaE = await BACMARSLPTOKENPoolgsXDGD8.decimals.call({from: accounts[1]});
		await BACMARSLPTOKENPoolgsXDGD8.exit.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolgsXDGD8.withdraw.call(uinthe9Y4yf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string3NOXBD = "anzCiQo5vikw5nUKydPGbl"
		const stringMdATKz6 = "WrtPFiiw72x"
		const uintAtgnMyo = BigInt("40")
		const BACMARSLPTOKENPooloouzOh8 = await BACMARSLPTOKENPool.new(string3NOXBD, stringMdATKz6, uintAtgnMyo, {from: accounts[4]});
		const uinteYqruzP = BigInt("437")
		const uint256ERKb0en = await BACMARSLPTOKENPooloouzOh8.withdraw.call(uinteYqruzP, {from: accounts[1]});
		const uint256M0mzox = await BACMARSLPTOKENPooloouzOh8.getRewardForDuration.call({from: accounts[5]});
		const uint8hHzysy = await BACMARSLPTOKENPooloouzOh8.decimals.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQ0fIw9X = "o3bGFkVWm3hocTPdDxQ"
		const stringiZTuY6z = "3ZNeJwre5zRWkQUcknDwFoVmlmjt9LEjOrCuLn7d09ha2KfxryDke83neMcWJLnJ7DF9Bh7qhzDdqgY8lzAJxDR"
		const uintptUJKMa = BigInt("46")
		const BACMARSLPTOKENPooloLxDXnl = await BACMARSLPTOKENPool.new(stringQ0fIw9X, stringiZTuY6z, uintptUJKMa, {from: accounts[5]});
		const uintw4EWTIf = BigInt("676")
		const uintbK6LHRM = BigInt("2003")
		const uint8Y1jj13 = await BACMARSLPTOKENPooloLxDXnl.decimals.call({from: accounts[4]});
		const uint256RBXkC25 = await BACMARSLPTOKENPooloLxDXnl.notifyRewardAmount.call(uintw4EWTIf, {from: accounts[3]});
		const uint256wril9V8 = await BACMARSLPTOKENPooloLxDXnl.notifyRewardAmount.call(uintbK6LHRM, {from: accounts[0]});
		const uint256WhkAMAf = await BACMARSLPTOKENPooloLxDXnl.totalSupply.call({from: accounts[4]});
		const stringyWyZSuc = await BACMARSLPTOKENPooloLxDXnl.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnLH0DWt = "wvSpRZXaIxfDNzmoKL7lTdjOEIBvOPkYM5uG7Rbo8JpfuYoi28tbd36iH6"
		const stringZZX6NgS = "2OBsGajhOE46bWneJKMKP6QSkE5xHRJtC3clQDqMLlgWuOh8770MNr"
		const uintA8y10OP = BigInt("195")
		const BACMARSLPTOKENPoolhop4W05 = await BACMARSLPTOKENPool.new(stringnLH0DWt, stringZZX6NgS, uintA8y10OP, {from: accounts[0]});
		const uintHcwRnmZ = BigInt("1895")
		const bytebbLAxcO = "0x1b160b0c041c0c0f0801170c171b070e131b19010b08160c00051a00010c1e16"
		const byteLJeKs0m = "0x060c1e0d021116041b1a171b0c0c0309160c1807051117071117141f04060c03"
		const uintZiAFiii = BigInt("57")
		const uintShxvMlS = BigInt("436")
		const uintaFFfkQG = BigInt("1716")
		const addressOCgI7J3 = accounts[1]
		const uint256CFVi5gT = await BACMARSLPTOKENPoolhop4W05.notifyRewardAmount.call(uintHcwRnmZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256MeW0qpF = await BACMARSLPTOKENPoolhop4W05.stakeWithPermit.call(uintaFFfkQG, uintShxvMlS, uintZiAFiii, byteLJeKs0m, bytebbLAxcO, {from: accounts[1]});
		const uint256OvtefYX = await BACMARSLPTOKENPoolhop4W05.getRewardForDuration.call({from: accounts[4]});
		const uint256GwtEeCZ = await BACMARSLPTOKENPoolhop4W05.balanceOf.call(addressOCgI7J3, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolhop4W05.exit.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLtxD7eJ = "NJ3JgUvcsJMHiMW4GQH9HG7K5jxmkzUx76KDa"
		const stringZ10cL8K = "3I"
		const uintcwyeu3I = BigInt("195")
		const BACMARSLPTOKENPoolXTHljdh = await BACMARSLPTOKENPool.new(stringLtxD7eJ, stringZ10cL8K, uintcwyeu3I, {from: accounts[1]});
		const addressaPzvxFa = accounts[3]
		const uint256e6zQXOJ = await BACMARSLPTOKENPoolXTHljdh.getRewardForDuration.call({from: accounts[1]});
		const uint256wZDNFBL = await BACMARSLPTOKENPoolXTHljdh.earned.call(addressaPzvxFa, {from: accounts[3]});
		const uint2564Du0l3 = await BACMARSLPTOKENPoolXTHljdh.getRewardForDuration.call({from: accounts[2]});
		const stringWE3vEji = await BACMARSLPTOKENPoolXTHljdh.symbol.call({from: accounts[2]});
		const uint8Fbk5wC4 = await BACMARSLPTOKENPoolXTHljdh.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOfa9J8H = "3sDLmkYkieGab0KuORaMnbjrVljVeCEkY3CIWCUflrJ5PmTt8vXpFXRUJhaJ2dXcDB2eiobzTJIo4aNk9y"
		const stringcnWgWdP = "d7qNyWTGxzhcQUK9LOVCjJc5DlfIC3CN8vVHr6AFcNufxkvg"
		const uint7tlFUg = BigInt("220")
		const BACMARSLPTOKENPoolzYEfZN = await BACMARSLPTOKENPool.new(stringOfa9J8H, stringcnWgWdP, uint7tlFUg, {from: accounts[1]});
		const uintgCs6iib = BigInt("600")
		const stringA9zm5KI = await BACMARSLPTOKENPoolzYEfZN.symbol.call({from: accounts[4]});
		await BACMARSLPTOKENPoolzYEfZN.exit.call({from: accounts[5]});
		const uint256HgEmHlL = await BACMARSLPTOKENPoolzYEfZN.withdraw.call(uintgCs6iib, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressSgafi2R = accounts[2]
		const addressPlbfMRB = accounts[1]
		const addresswNhfWS9 = accounts[0]
		const BACMARSLPTOKENPoolgsXDGD8 = await BACMARSLPTOKENPool.new(addressSgafi2R, addressPlbfMRB, addresswNhfWS9, {from: accounts[4]});
		const uintGSgeIZH = BigInt("387")
		const uint256RPKYo1P = await BACMARSLPTOKENPoolgsXDGD8.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolgsXDGD8.getReward.call({from: accounts[0]});
		const uint256O5a2Zqn = await BACMARSLPTOKENPoolgsXDGD8.notifyRewardAmount.call(uintGSgeIZH, {from: accounts[2]});
		const uint8XIQmwye = await BACMARSLPTOKENPoolgsXDGD8.decimals.call({from: accounts[4]});
		const uint256cPc4CCi = await BACMARSLPTOKENPoolgsXDGD8.getRewardForDuration.call({from: accounts[5]});
		const uint256b4op1lu = await BACMARSLPTOKENPoolgsXDGD8.rewardPerToken.call({from: accounts[1]});

		assert.equal(uint256RPKYo1P, BigInt("0"))
		await expect(BACMARSLPTOKENPoolgsXDGD8.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOC81l75 = "3mSO93fwPNvijOgFUTjs3oFR2hAbqNo2emSlqyQCbqwf5TX66SH"
		const stringyajiSSO = "SqjUox"
		const uintSuhJJRA = BigInt("115")
		const BACMARSLPTOKENPooleA6gqk = await BACMARSLPTOKENPool.new(stringOC81l75, stringyajiSSO, uintSuhJJRA, {from: accounts[1]});
		const uintoZ2qBcy = BigInt("1582")
		const addressN625WNE = accounts[0]
		const uint256HTqV9R = await BACMARSLPTOKENPooleA6gqk.withdraw.call(uintoZ2qBcy, {from: accounts[2]});
		await BACMARSLPTOKENPooleA6gqk.nonReentrant.call({from: accounts[4]});
		const uint256CUG9RzN = await BACMARSLPTOKENPooleA6gqk.balanceOf.call(addressN625WNE, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringD4eMk9d = "T"
		const stringe27W08j = "LgQ"
		const uintXZS0mF7 = BigInt("33")
		const BACMARSLPTOKENPoolfh8a1xp = await BACMARSLPTOKENPool.new(stringD4eMk9d, stringe27W08j, uintXZS0mF7, {from: accounts[2]});
		const addressucczAIq = "0x0000000000000000000000000000000000000001"
		const uint256eLMcTpt = await BACMARSLPTOKENPoolfh8a1xp.earned.call(addressucczAIq, {from: accounts[3]});
		await BACMARSLPTOKENPoolfh8a1xp.getReward.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkRimOM7 = "0s4mDvJ3yF1YcvcjIdjS3z4lKntzucLTLO1RL1XxZH0DbSGbavUh809Rl"
		const stringLaPNL9y = "yGicJCuieEi3N1FGURIb4KwlnNzaFeSSwUcnR1VOrQL8sVi98teGQN42MCqcB1y9wfOnwOOo6JlApgFH2VOTwAAQ"
		const uintEjaxUDP = BigInt("156")
		const BACMARSLPTOKENPoolaKQPZOi = await BACMARSLPTOKENPool.new(stringkRimOM7, stringLaPNL9y, uintEjaxUDP, {from: accounts[4]});
		const addresswVvrzGc = accounts[3]
		const uint256ViZxf4X = await BACMARSLPTOKENPoolaKQPZOi.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256bZN3mm4 = await BACMARSLPTOKENPoolaKQPZOi.balanceOf.call(addresswVvrzGc, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVcPzWDN = "QFa2LpJjoDLJBSVz8gDBbX5lRaEQAArCVL42PVS5Pdxm5HgxS7TrDWHv6cHzAe9twDSa"
		const stringI7swuCc = "Vi4jsLCzK2bVLYusos6pU4tdvr9ILnNc701ISKyCntwj49ECFblMXcWF5zJTmMzkktSt7CQKGKreh"
		const uintIX9oMvS = BigInt("237")
		const BACMARSLPTOKENPoolsR5wzaK = await BACMARSLPTOKENPool.new(stringVcPzWDN, stringI7swuCc, uintIX9oMvS, {from: accounts[4]});
		const byteonBK7qo = "0x061f1e141f191a041319141403151017050b011f0c0b18100304170e06041a13"
		const bytegTi8nfB = "0x1313100d1701071b0d0c1a0518200e101a0306071f1e0e04170112041e18021d"
		const uintEmUvfm = BigInt("196")
		const uintTrsqz1C = BigInt("1514")
		const uintMek9LlA = BigInt("97")
		const uintgakGRJC = BigInt("655")
		const uint256G9NYZgi = await BACMARSLPTOKENPoolsR5wzaK.stakeWithPermit.call(uintMek9LlA, uintTrsqz1C, uintEmUvfm, bytegTi8nfB, byteonBK7qo, {from: accounts[0]});
		const uint256p3ZqHeD = await BACMARSLPTOKENPoolsR5wzaK.stake.call(uintgakGRJC, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoeNUV5 = "S2ckrAy6iNUYfaIwfXsUY7aMsbzKJu87B2vzfVbkkAw1Q4nxc8qdpbSIyyvuhuztNAVSe7"
		const stringFcUZwWa = "1VZMOJ3P1EjaF9c3lDXSfxVMGvhViqHgn32znfU8XoPDJzJUD04qT6BMLEZb2Vua"
		const uintOY3GDxR = BigInt("115")
		const BACMARSLPTOKENPooll3af6GQ = await BACMARSLPTOKENPool.new(stringoeNUV5, stringFcUZwWa, uintOY3GDxR, {from: accounts[3]});
		const uintgFskmy1 = BigInt("446")
		const uintY7uMVaA = BigInt("728")
		await BACMARSLPTOKENPooll3af6GQ.exit.call({from: accounts[1]});
		const uint256FbgAG9D = await BACMARSLPTOKENPooll3af6GQ.withdraw.call(uintgFskmy1, {from: accounts[0]});
		const uint256K58rBht = await BACMARSLPTOKENPooll3af6GQ.withdraw.call(uintY7uMVaA, {from: accounts[3]});
		await BACMARSLPTOKENPooll3af6GQ.nonReentrant.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwNpjIio = "AcVmEXI7DWyosSnJWbVA15gDKnA6W7vJrFfU8HNj1yaunLP6WMdcP52H5YVvJwVHpoRx"
		const stringxYekbdX = "0Es2dXyYREAPpLz6ju26dz2dQrnH4A3i8hv6M9pxj7bqn6Q30culewlPrOMhaV8Bo93STrNwK5tR4QnBkmk"
		const uintBTck8uw = BigInt("240")
		const BACMARSLPTOKENPoolyeKFQV = await BACMARSLPTOKENPool.new(stringwNpjIio, stringxYekbdX, uintBTck8uw, {from: accounts[0]});
		const uintOUHK7Wu = BigInt("597")
		const addresscWZsJM = accounts[1]
		const addressAEmbkjb = accounts[3]
		await BACMARSLPTOKENPoolyeKFQV.nonReentrant.call({from: accounts[4]});
		const uint256SGcJFqZ = await BACMARSLPTOKENPoolyeKFQV.withdraw.call(uintOUHK7Wu, {from: accounts[0]});
		const uint256PbMuvfo = await BACMARSLPTOKENPoolyeKFQV.earned.call(addresscWZsJM, {from: accounts[3]});
		const uint256qnmuin4 = await BACMARSLPTOKENPoolyeKFQV.balanceOf.call(addressAEmbkjb, {from: accounts[4]});
		const uint256RZViADj = await BACMARSLPTOKENPoolyeKFQV.rewardPerToken.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHlmTrCP = "T6LpJlmmEbcykvs2BnQGBFQ"
		const stringjHvTsoI = "hlKEmLf05PqRdyM9iLWeLg86YNk8UjGm0nQkpnKLp83daXoiKh7zitcXxOV2dTXfEyidjlvmPVT2VkOgTXRfeUxt"
		const uintG5FhPC = BigInt("233")
		const BACMARSLPTOKENPoolCPyo8uI = await BACMARSLPTOKENPool.new(stringHlmTrCP, stringjHvTsoI, uintG5FhPC, {from: accounts[2]});
		const uintrr8NZ5r = BigInt("343")
		const addressofLpni7 = accounts[4]
		const uint256NPc75xu = await BACMARSLPTOKENPoolCPyo8uI.notifyRewardAmount.call(uintrr8NZ5r, {from: accounts[3]});
		const uint8wMAI3By = await BACMARSLPTOKENPoolCPyo8uI.decimals.call({from: accounts[3]});
		await BACMARSLPTOKENPoolCPyo8uI.nonReentrant.call({from: accounts[0]});
		const addresslMKmJ4i = await BACMARSLPTOKENPoolCPyo8uI.updateReward.call(addressofLpni7, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringN6nUOP = "u587xk1SLYTtFsGUkCCTcY7qaRg1MRkDdukUURrgQ6B2BpohNQyD3VGLaVqXSx4H0i6AepNvyioASvIh0xj5vuB"
		const stringCzszu1a = "IxwIhGl9M6njbBUSFoh8OF97kVQr1hxSGiY4z35"
		const uintcKRIsjk = BigInt("162")
		const BACMARSLPTOKENPoolIhOAimd = await BACMARSLPTOKENPool.new(stringN6nUOP, stringCzszu1a, uintcKRIsjk, {from: accounts[0]});
		const uintFwyC9lb = BigInt("698")
		const uint256jb5lKXr = await BACMARSLPTOKENPoolIhOAimd.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256bQPEC47 = await BACMARSLPTOKENPoolIhOAimd.rewardPerToken.call({from: accounts[3]});
		const uint256uwKXJp = await BACMARSLPTOKENPoolIhOAimd.stake.call(uintFwyC9lb, {from: accounts[1]});
		const stringhyqugw = await BACMARSLPTOKENPoolIhOAimd.symbol.call({from: accounts[2]});
		const stringzFWgJIK = await BACMARSLPTOKENPoolIhOAimd.symbol.call({from: accounts[0]});
		const uint256RbbRQCC = await BACMARSLPTOKENPoolIhOAimd.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringAgnumiD = "KkWaycg6WTKDRxx8yKfOvWO2aqk3fIl3A6EArO0wWAH75p1k32w6Bus0PVSa"
		const stringacRCR4h = "4iWGfdhCxITevf2pIsrYLr"
		const uintIfsCbLH = BigInt("65")
		const BACMARSLPTOKENPooltcWfoHw = await BACMARSLPTOKENPool.new(stringAgnumiD, stringacRCR4h, uintIfsCbLH, {from: accounts[0]});
		const addressuR6d1u9 = accounts[3]
		const stringyotFalx = await BACMARSLPTOKENPooltcWfoHw.symbol.call({from: accounts[3]});
		await BACMARSLPTOKENPooltcWfoHw.nonReentrant.call({from: accounts[1]});
		const uint256G9rJfsi = await BACMARSLPTOKENPooltcWfoHw.earned.call(addressuR6d1u9, {from: accounts[3]});
		const uint881krvi = await BACMARSLPTOKENPooltcWfoHw.decimals.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEYxtYSt = "aPyDd1pUivtnlHJo6xCWkjgsBEIgcRCvQBP4pktw1Ty"
		const stringmDfkStz = "iZpOe1lev8wQhP2Qzms9odk9bkcGPfnGsYZ1X7KztHFFuqQWl7s0II8s"
		const uintRPQ3fiq = BigInt("174")
		const BACMARSLPTOKENPoolb8R4weo = await BACMARSLPTOKENPool.new(stringEYxtYSt, stringmDfkStz, uintRPQ3fiq, {from: accounts[0]});
		await BACMARSLPTOKENPoolb8R4weo.nonReentrant.call({from: accounts[2]});
		const uint256yAd0b1C = await BACMARSLPTOKENPoolb8R4weo.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringb8xEXsC = "xulBJDKmoFzCG1hyqE1yCQdy1Ou8v51TH4bUouHiVODWLSExPSFCLVBKT"
		const stringzD7Ezrp = "e7wD1F6I9tzDCvx4sHvDWHTnxNxwSXNGuoiaHPT4qNoEW55SdjRkQFS7Eh2etuh8sem571m39TJRSJVjTqS"
		const uintEp6CbmO = BigInt("164")
		const BACMARSLPTOKENPoolDtltak = await BACMARSLPTOKENPool.new(stringb8xEXsC, stringzD7Ezrp, uintEp6CbmO, {from: accounts[1]});
		await BACMARSLPTOKENPoolDtltak.exit.call({from: accounts[3]});
		await BACMARSLPTOKENPoolDtltak.getReward.call({from: accounts[4]});
		await BACMARSLPTOKENPoolDtltak.exit.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwHO9DP2 = "KM7Xxo2Id"
		const stringRAJIYdR = "2Mn1qhied7XnkKErt5sQWMvZCzA3yA8MSpxbn3ajKGBTRhko2FefH51hnAg"
		const uintLhS8OtJ = BigInt("116")
		const BACMARSLPTOKENPoolqjuqmiG = await BACMARSLPTOKENPool.new(stringwHO9DP2, stringRAJIYdR, uintLhS8OtJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256glD4LEq = await BACMARSLPTOKENPoolqjuqmiG.getRewardForDuration.call({from: accounts[0]});
		await BACMARSLPTOKENPoolqjuqmiG.nonReentrant.call({from: accounts[0]});
		await BACMARSLPTOKENPoolqjuqmiG.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoHoFvel = "xICHrpzUXHdCdGFlXMUBxN3iEpbWevRwkWI7tgWbBjTLYEO3Id7VQgI8AAHp5f1ya12Kwe2KZaP3AxUL"
		const stringLFTGkKV = "J7vDREwpKMF6az9UESxTUFQzSZTiEdnZk8xKctn2JQuskCF7UicmQxIjNjlWojHOdyTrfK4"
		const uinttI7DUs7 = BigInt("159")
		const BACMARSLPTOKENPooliWqrxsi = await BACMARSLPTOKENPool.new(stringoHoFvel, stringLFTGkKV, uinttI7DUs7, {from: accounts[3]});
		const stringEki7WjJ = await BACMARSLPTOKENPooliWqrxsi.symbol.call({from: accounts[0]});
		const uint256XKApwHH = await BACMARSLPTOKENPooliWqrxsi.rewardPerToken.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYfIQb5 = "Gq41qvqrUbE8IRPfKjIRJ7zy6DNT4psdM7aRKrbgtEKiDybCQPFTwSQ9rSPTI4e1wbftqf"
		const stringqMY0MEo = "QyhKN4yylh5XlgKUBCSbsk8jmi6uOXHoP549QdpjpyW4t572WjetY"
		const uintMdz6WXw = BigInt("10")
		const BACMARSLPTOKENPooljVpNdQL = await BACMARSLPTOKENPool.new(stringYfIQb5, stringqMY0MEo, uintMdz6WXw, {from: accounts[1]});
		const addressYHtBBfV = "0x0000000000000000000000000000000000000001"
		await BACMARSLPTOKENPooljVpNdQL.nonReentrant.call({from: accounts[1]});
		await BACMARSLPTOKENPooljVpNdQL.nonReentrant.call({from: accounts[3]});
		const uint256RU0la8n = await BACMARSLPTOKENPooljVpNdQL.balanceOf.call(addressYHtBBfV, {from: accounts[0]});
		await BACMARSLPTOKENPooljVpNdQL.exit.call({from: accounts[2]});
		await BACMARSLPTOKENPooljVpNdQL.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringA2iWcB = "V8TqHVEawswJeAIVHuss3kBcNFhsevxKMOM6n6nNs71wWj1vVHNRD1Yk7uFEiYxOYMkFDnCqXyEXKQpjvQtCu"
		const stringzr5mqLk = "5lgqLuPkgzJYoySnA1fR2DFAm1sQtslOdG7PayKLVPQBAM2emKWOt"
		const uintcnCVwCO = BigInt("171")
		const BACMARSLPTOKENPoolRyILDWW = await BACMARSLPTOKENPool.new(stringA2iWcB, stringzr5mqLk, uintcnCVwCO, {from: accounts[2]});
		const uintCaXdO5k = BigInt("1944")
		const addressT9sFphP = accounts[4]
		const uintj1Ezn0 = BigInt("1068")
		const uint256bQvZUPG = await BACMARSLPTOKENPoolRyILDWW.notifyRewardAmount.call(uintCaXdO5k, {from: "0x0000000000000000000000000000000000000001"});
		const addressFZcXRiz = await BACMARSLPTOKENPoolRyILDWW.updateReward.call(addressT9sFphP, {from: accounts[3]});
		const stringCmWPBOU = await BACMARSLPTOKENPoolRyILDWW.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256mBSE3m = await BACMARSLPTOKENPoolRyILDWW.notifyRewardAmount.call(uintj1Ezn0, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbb6CYNb = "usvk9zuPw7"
		const stringfueGHWv = "RU"
		const uintzX2NJ0Z = BigInt("230")
		const BACMARSLPTOKENPoolRV2vLoZ = await BACMARSLPTOKENPool.new(stringbb6CYNb, stringfueGHWv, uintzX2NJ0Z, {from: accounts[4]});
		const addresszTg0tb1 = accounts[3]
		const uinthghBFkY = BigInt("1834")
		const stringbOM18ch = await BACMARSLPTOKENPoolRV2vLoZ.symbol.call({from: accounts[3]});
		await BACMARSLPTOKENPoolRV2vLoZ.getReward.call({from: accounts[3]});
		const addressYtjAJn6 = await BACMARSLPTOKENPoolRV2vLoZ.updateReward.call(addresszTg0tb1, {from: accounts[3]});
		const uint256o6JV7jH = await BACMARSLPTOKENPoolRV2vLoZ.totalSupply.call({from: accounts[4]});
		const uint256ODPjkDY = await BACMARSLPTOKENPoolRV2vLoZ.withdraw.call(uinthghBFkY, {from: accounts[4]});
		await BACMARSLPTOKENPoolRV2vLoZ.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmYhUSTj = "xMgZrHqj1iudaarMrz2ioPIu"
		const stringZdovZj4 = "dhQWziCqfLszEM6jMQpWrbT7eXUFKhUuLrPQRFHxy8vJbiimsHONWepJC"
		const uintcta3Yiy = BigInt("96")
		const BACMARSLPTOKENPoolzIHPOIS = await BACMARSLPTOKENPool.new(stringmYhUSTj, stringZdovZj4, uintcta3Yiy, {from: accounts[0]});
		const uintqWvGpwQ = BigInt("1065")
		const uint256UEtEPOf = await BACMARSLPTOKENPoolzIHPOIS.rewardPerToken.call({from: accounts[2]});
		await BACMARSLPTOKENPoolzIHPOIS.getReward.call({from: accounts[4]});
		const uint2563h8q1C = await BACMARSLPTOKENPoolzIHPOIS.withdraw.call(uintqWvGpwQ, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOqdo4l7 = "qNrtcAWPSk4SAzmVLV3DuzKfBZxTf17Ok1ebFxVGwdAemV4UMZsfWT"
		const stringVRoVQI7 = "57izZRVRJ1mZmp89e3"
		const uintsnI9ICU = BigInt("109")
		const BACMARSLPTOKENPoolpJt5DIb = await BACMARSLPTOKENPool.new(stringOqdo4l7, stringVRoVQI7, uintsnI9ICU, {from: accounts[1]});
		const uintWxocVE5 = BigInt("1851")
		await BACMARSLPTOKENPoolpJt5DIb.exit.call({from: accounts[0]});
		const uint256AnxEGSr = await BACMARSLPTOKENPoolpJt5DIb.notifyRewardAmount.call(uintWxocVE5, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTgOYxH = "55BCF1HgBNg8zkuNO6TWKtXNvNGSO3ow1gweENS1bjlAV9lOBgPv6f0kU5BtJp3eplQwQd"
		const stringdzEjA6a = "6TbdrwXIYzVlUYXkx7KotLsm"
		const uintEFQNCTo = BigInt("211")
		const BACMARSLPTOKENPoolwHUbRp8 = await BACMARSLPTOKENPool.new(stringTgOYxH, stringdzEjA6a, uintEFQNCTo, {from: accounts[1]});
		const addressKgdGrwJ = accounts[0]
		const stringwf31u45 = await BACMARSLPTOKENPoolwHUbRp8.symbol.call({from: accounts[2]});
		await BACMARSLPTOKENPoolwHUbRp8.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8KYaKJ7U = await BACMARSLPTOKENPoolwHUbRp8.decimals.call({from: accounts[2]});
		const uint256nTx1Sgo = await BACMARSLPTOKENPoolwHUbRp8.balanceOf.call(addressKgdGrwJ, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhqoHpvP = "Hgkh8kKal6LMMQ4NSTpVuYmB2zKjTE1q7hBXhzqrXFaq8u4wMV9wbEqaWtUL1nRpK2646twwm3pd7P1M6QtIAqoFq"
		const stringvNJ6SFB = "YJQHXQTpb3CoJURwHysiHYJMHC2S"
		const uintPivwnx = BigInt("146")
		const BACMARSLPTOKENPoolPBmVCjg = await BACMARSLPTOKENPool.new(stringhqoHpvP, stringvNJ6SFB, uintPivwnx, {from: accounts[1]});
		const uintiW0ql75 = BigInt("983")
		const addressGYdLTy4 = "0x0000000000000000000000000000000000000001"
		const addressEeJwdF = accounts[0]
		const uint256rjDenrF = await BACMARSLPTOKENPoolPBmVCjg.withdraw.call(uintiW0ql75, {from: accounts[4]});
		const uint256n2w0rA = await BACMARSLPTOKENPoolPBmVCjg.earned.call(addressGYdLTy4, {from: "0x0000000000000000000000000000000000000001"});
		const addressk0QnFy = await BACMARSLPTOKENPoolPBmVCjg.updateReward.call(addressEeJwdF, {from: accounts[2]});
		await BACMARSLPTOKENPoolPBmVCjg.onlyRewardsDistribution.call({from: accounts[4]});
		await BACMARSLPTOKENPoolPBmVCjg.exit.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnqgQrUx = "7IgzBI2OkfaDE"
		const stringRrm1F7D = "Fy"
		const uintSCQyOeF = BigInt("58")
		const BACMARSLPTOKENPoolxT8o1Pt = await BACMARSLPTOKENPool.new(stringnqgQrUx, stringRrm1F7D, uintSCQyOeF, {from: accounts[0]});
		const uint256Qj9junH = await BACMARSLPTOKENPoolxT8o1Pt.lastTimeRewardApplicable.call({from: accounts[3]});
		const stringRUJN96P = await BACMARSLPTOKENPoolxT8o1Pt.symbol.call({from: accounts[3]});
		const uint256kbohErU = await BACMARSLPTOKENPoolxT8o1Pt.totalSupply.call({from: accounts[4]});
		const uint256DV5Kee0 = await BACMARSLPTOKENPoolxT8o1Pt.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmY9jBJM = "FRu3mGc9yxi990ADvKXCMEsfIduP6AQf1"
		const stringuRewUZC = "Lgfb5JJNqGHaYCVqO728IH79SQzt5FTXul"
		const uintVLH93sr = BigInt("201")
		const BACMARSLPTOKENPoolKp6sMRY = await BACMARSLPTOKENPool.new(stringmY9jBJM, stringuRewUZC, uintVLH93sr, {from: accounts[0]});
		const addressPkPhy0N = accounts[4]
		const uintvaPrfVB = BigInt("305")
		const uint256wFs303O = await BACMARSLPTOKENPoolKp6sMRY.earned.call(addressPkPhy0N, {from: accounts[3]});
		const uint256FvizgOk = await BACMARSLPTOKENPoolKp6sMRY.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256sC4Ijpl = await BACMARSLPTOKENPoolKp6sMRY.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256GLokhnU = await BACMARSLPTOKENPoolKp6sMRY.stake.call(uintvaPrfVB, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKcF34Dm = "dG6qmnf0sEviLull1gKg47g7qlEePUGJeaC83lFVz2uz6BgA4Yo6V1H8bSW5qLHdo5Sjb7hKd1wfb"
		const stringBS6flIJ = "ymvJHPpbpgUH947WQiSa4x3N292hhEqmTpquYm35JA4OtUmtnOTcyzDyUUM8KjPgHXQ1UackqgaXl59DpSu"
		const uintIyB9nLF = BigInt("255")
		const BACMARSLPTOKENPoolga2yxfN = await BACMARSLPTOKENPool.new(stringKcF34Dm, stringBS6flIJ, uintIyB9nLF, {from: accounts[2]});
		const uintz3GAWtP = BigInt("409")
		const uintfA6GhU = BigInt("1839")
		const stringxE8Jk4f = await BACMARSLPTOKENPoolga2yxfN.name.call({from: accounts[4]});
		const uint256XbsEAaz = await BACMARSLPTOKENPoolga2yxfN.getRewardForDuration.call({from: accounts[2]});
		const uint256g4iZFP4 = await BACMARSLPTOKENPoolga2yxfN.stake.call(uintz3GAWtP, {from: accounts[0]});
		const uint25648oXpj = await BACMARSLPTOKENPoolga2yxfN.stake.call(uintfA6GhU, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqdgh1L6 = "Z9wYH5yiIDsl6BSiYcpXXy36An4POE4hnIjnmCYAfvuy6QQ"
		const stringSGwK1Np = "Q8DggzM2ZoAzXYjt2rgCW38OPReCArTg34olb5681an3NAyMeMhvi6h5pXCc1xFkwhVlQdJVBFqtZPGxbLjLe"
		const uintBQMEFXz = BigInt("215")
		const BACMARSLPTOKENPoolFIqkAm7 = await BACMARSLPTOKENPool.new(stringqdgh1L6, stringSGwK1Np, uintBQMEFXz, {from: accounts[1]});
		const addressB62AqW = accounts[3]
		const addressiRHVTnH = accounts[0]
		await BACMARSLPTOKENPoolFIqkAm7.nonReentrant.call({from: accounts[0]});
		const uint256mTQ79dY = await BACMARSLPTOKENPoolFIqkAm7.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256kDlkI68 = await BACMARSLPTOKENPoolFIqkAm7.earned.call(addressB62AqW, {from: accounts[5]});
		const uint256Mt78AsG = await BACMARSLPTOKENPoolFIqkAm7.balanceOf.call(addressiRHVTnH, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKaN63Tz = "9HncvHBEbXoQ"
		const stringJ6Xg6og = "RCHxIM1L0WliPzaaNZvy5phwg8Dw499bHmE7zQNm06QMYARro"
		const uintU3hAqQT = BigInt("81")
		const BACMARSLPTOKENPoolNP63v1N = await BACMARSLPTOKENPool.new(stringKaN63Tz, stringJ6Xg6og, uintU3hAqQT, {from: accounts[4]});
		const addressy0jiFCP = accounts[3]
		const addressXovgTv = accounts[5]
		const addressocJDBdO = accounts[4]
		const bytegJ9Crg = "0x1a151d1a1b171a021104130b1e1b12020402181b0a101a0e1e010a19181a140b"
		const byterV4ZRPE = "0x1212110e1f0c1412091405131e192010041b14061f170d1503080d0815091303"
		const uintFoDg90 = BigInt("245")
		const uintj2XKRs5 = BigInt("1059")
		const uintGQOD004 = BigInt("850")
		const uint8PcTUEbF = await BACMARSLPTOKENPoolNP63v1N.decimals.call({from: accounts[2]});
		const uint256oHP6bI = await BACMARSLPTOKENPoolNP63v1N.balanceOf.call(addressy0jiFCP, {from: accounts[0]});
		const uint256F2LKsx = await BACMARSLPTOKENPoolNP63v1N.balanceOf.call(addressXovgTv, {from: accounts[5]});
		const addressFK3cJHs = await BACMARSLPTOKENPoolNP63v1N.updateReward.call(addressocJDBdO, {from: accounts[4]});
		const uint256xNYmFeM = await BACMARSLPTOKENPoolNP63v1N.stakeWithPermit.call(uintGQOD004, uintj2XKRs5, uintFoDg90, byterV4ZRPE, bytegJ9Crg, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhcxWHi = "M93J3STlWbUHKIlWWCdU72udbMtQmsNgXhz0w0rrFshTkIZFq9yfW6d7NRR4nI6dHiHzLVRxTPEi1fbZVow"
		const stringFnIyN4o = "wtEL3A4MWuJ6LtNSsJmkKICquAYGhyHqGv1Dj4g5ZpFg0n9i4Hh3VNp2ZSwmaRpmFDhOOL4uVXnU4MyUYf78cf5tDCdTFc"
		const uintAsMbioW = BigInt("210")
		const BACMARSLPTOKENPoolF9hlZKz = await BACMARSLPTOKENPool.new(stringhcxWHi, stringFnIyN4o, uintAsMbioW, {from: accounts[4]});
		const uint256PDPvyT3 = await BACMARSLPTOKENPoolF9hlZKz.rewardPerToken.call({from: accounts[3]});
		await BACMARSLPTOKENPoolF9hlZKz.onlyRewardsDistribution.call({from: accounts[1]});
		const stringqfRrU9 = await BACMARSLPTOKENPoolF9hlZKz.symbol.call({from: accounts[2]});
		await BACMARSLPTOKENPoolF9hlZKz.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrzlMvYd = "YmxzGBS4WKMl5f61HLrGckTpaoeH8t4raKX4hqQP13bG"
		const stringtaIQZ6a = "LGh6QBhgRNFCWn1uSs0PRJN4UKYrwiYE6fCnhGcgVFhr"
		const uintbRhZOTf = BigInt("84")
		const BACMARSLPTOKENPoolMo5j69q = await BACMARSLPTOKENPool.new(stringrzlMvYd, stringtaIQZ6a, uintbRhZOTf, {from: accounts[3]});
		const uintAXozpnp = BigInt("848")
		const uintldCALGq = BigInt("1373")
		const uintJEpkyR0 = BigInt("1406")
		const uint8RxWOjXD = await BACMARSLPTOKENPoolMo5j69q.decimals.call({from: accounts[0]});
		const uint256wSGp1Jx = await BACMARSLPTOKENPoolMo5j69q.notifyRewardAmount.call(uintAXozpnp, {from: accounts[0]});
		const uint256fQeRhEr = await BACMARSLPTOKENPoolMo5j69q.getRewardForDuration.call({from: accounts[1]});
		const uint256A8MOikT = await BACMARSLPTOKENPoolMo5j69q.notifyRewardAmount.call(uintldCALGq, {from: accounts[4]});
		const uint256RHVzLTB = await BACMARSLPTOKENPoolMo5j69q.withdraw.call(uintJEpkyR0, {from: accounts[1]});
	});
})