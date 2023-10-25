const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringNMFBADd = "1jmqWtjnxCA2MCjmuG5xWD5GQKzsb"
		const stringjCqqcgh = "531GIwiXmw"
		const uintG0yS8ru = BigInt("59")
		const AntiBaseProtocolL2KzLL = await AntiBaseProtocol.new(stringNMFBADd, stringjCqqcgh, uintG0yS8ru, {from: "0x0000000000000000000000000000000000000001"});
		const uintGWxagMk = BigInt("939")
		const addressBKb4C2V = accounts[1]
		const uintVTlf4cj = BigInt("475")
		const uintnxRV4fZ = BigInt("828")
		const addressC0q5f7d = accounts[2]
		const uintsLPu5tt = BigInt("1387")
		const addressCEPTtd6 = accounts[5]
		const uintfpA2hjk = BigInt("51")
		const addressgwNPK6i = accounts[3]
		const boolDvVSwnA = await AntiBaseProtocolL2KzLL.approve.call(addressBKb4C2V, uintGWxagMk, {from: accounts[1]});
		const uint256ujbfqEI = await AntiBaseProtocolL2KzLL.findBurnFee.call(uintVTlf4cj, {from: accounts[4]});
		const boolOzkzba = await AntiBaseProtocolL2KzLL.increaseAllowance.call(addressC0q5f7d, uintnxRV4fZ, {from: accounts[1]});
		const boolkvNm3h8 = await AntiBaseProtocolL2KzLL.approve.call(addressCEPTtd6, uintsLPu5tt, {from: accounts[0]});
		const addressrZFhsEf = await AntiBaseProtocolL2KzLL._mint.call(addressgwNPK6i, uintfpA2hjk, {from: accounts[3]});
		await AntiBaseProtocolL2KzLL.renounceOwnership.call({from: accounts[5]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmqdKIbD = await AntiBaseProtocol.new({from: accounts[4]});
		const addressTodYzxw = "0x0000000000000000000000000000000000000001"
		const uintdrU5X0e = BigInt("1477")
		const uintPxf352Z = BigInt("214")
		const addressk5agKO1 = accounts[1]
		const addressHzIKbI1 = await AntiBaseProtocolmqdKIbD.transferOwnership.call(addressTodYzxw, {from: accounts[4]});
		const uint256aFlyai = await AntiBaseProtocolmqdKIbD.findRewardFee.call(uintdrU5X0e, {from: accounts[0]});
//		const boole6lasZB = await AntiBaseProtocolmqdKIbD.transfer.call(addressk5agKO1, uintPxf352Z, {from: accounts[0]});
//		await AntiBaseProtocolmqdKIbD.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256aFlyai, BigInt("75"))
		await expect(AntiBaseProtocolmqdKIbD.transfer.call(addressk5agKO1, uintPxf352Z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocole6xwwVC = await AntiBaseProtocol.new({from: accounts[1]});
		const addressZZyLfXu = accounts[1]
		const uintT351hZ = BigInt("1086")
		const addressVJxfrz = accounts[3]
		const addressl6CpaSy = accounts[4]
		const uinttvU73q1 = BigInt("1407")
		const addressk8alQf = accounts[5]
		const uintYc2pshe = BigInt("1168")
		const addressP8AE1i1 = accounts[4]
//		await AntiBaseProtocole6xwwVC.renounceOwnership.call({from: accounts[0]});
//		const uint256cPDkSUz = await AntiBaseProtocole6xwwVC.balanceOf.call(addressZZyLfXu, {from: accounts[1]});
//		const booliYkaUkI = await AntiBaseProtocole6xwwVC.transferFrom.call(addressl6CpaSy, addressVJxfrz, uintT351hZ, {from: accounts[0]});
//		const boolj15q7xf = await AntiBaseProtocole6xwwVC.increaseAllowance.call(addressk8alQf, uinttvU73q1, {from: accounts[1]});
//		const addresshWZXQ4a = await AntiBaseProtocole6xwwVC._mint.call(addressP8AE1i1, uintYc2pshe, {from: accounts[2]});

		await expect(AntiBaseProtocole6xwwVC.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoleCsgEJb = await AntiBaseProtocol.new({from: accounts[4]});
		const uintBgMUl8 = BigInt("1112")
		const addresseM6MyjR = accounts[2]
		const addressm3BSabJ = accounts[0]
		const uintH3Rs6so = BigInt("98")
		const addressx10sPxT = accounts[3]
		const uintrii7ofi = BigInt("147")
		const addressMqe2XKM = accounts[1]
//		const uint256MJ4hIYC = await AntiBaseProtocoleCsgEJb.burn.call(uintBgMUl8, {from: accounts[1]});
//		const uint256WEL2FS6 = await AntiBaseProtocoleCsgEJb.allowance.call(addressm3BSabJ, addresseM6MyjR, {from: accounts[1]});
//		const addresslmCJF8e = await AntiBaseProtocoleCsgEJb.burnFrom.call(addressx10sPxT, uintH3Rs6so, {from: accounts[3]});
//		const addressYvPKwzQ = await AntiBaseProtocoleCsgEJb._burnFrom.call(addressMqe2XKM, uintrii7ofi, {from: accounts[0]});
//		const uint82rGP8i = await AntiBaseProtocoleCsgEJb.decimals.call({from: accounts[1]});

		await expect(AntiBaseProtocoleCsgEJb.burn.call(uintBgMUl8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolA0kENcu = await AntiBaseProtocol.new({from: accounts[4]});
		const addressn6UiK2x = accounts[0]
		const addressnHaNXvg = accounts[2]
		const addressWnSq8Kk = accounts[4]
		const addressy1im6u7 = accounts[2]
		const addressFanQije = accounts[2]
		const uintGnqBRp = BigInt("1032")
		const addresszm6HAQM = accounts[3]
		const uint8bPRwuUG = await AntiBaseProtocolA0kENcu.decimals.call({from: accounts[4]});
		const boolkhBPbQh = await AntiBaseProtocolA0kENcu.isOwner.call({from: accounts[1]});
//		const addresskbKdue = await AntiBaseProtocolA0kENcu._transferOwnership.call(addressn6UiK2x, {from: accounts[3]});
//		const uint256CfPnLu = await AntiBaseProtocolA0kENcu.allowance.call(addressWnSq8Kk, addressnHaNXvg, {from: accounts[1]});
//		const uint256AEEy7XE = await AntiBaseProtocolA0kENcu.allowance.call(addressFanQije, addressy1im6u7, {from: accounts[2]});
//		const addressVpWr0Ji = await AntiBaseProtocolA0kENcu.burnFrom.call(addresszm6HAQM, uintGnqBRp, {from: accounts[0]});

		assert.equal(boolkhBPbQh, false)
		assert.equal(uint8bPRwuUG, BigInt("18"))
		await expect(AntiBaseProtocolA0kENcu._transferOwnership.call(addressn6UiK2x, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoltLQAzqM = await AntiBaseProtocol.new({from: accounts[3]});
		const uintJN52Zkl = BigInt("1547")
		const uintY76zH3T = BigInt("1788")
		const addressvZliaBy = accounts[2]
		const address4JioB8 = accounts[3]
		const addressuYjzjpz = accounts[1]
		const uintUuVRNCd = BigInt("1161")
		const addressGhag7PO = accounts[0]
		const uintdesVUiS = BigInt("185")
		const address70yrZi = "0x0000000000000000000000000000000000000001"
		const uint256gAFZEjl = await AntiBaseProtocoltLQAzqM.findBurnFee.call(uintJN52Zkl, {from: accounts[4]});
//		const addressPBBISRu = await AntiBaseProtocoltLQAzqM._burn.call(addressvZliaBy, uintY76zH3T, {from: accounts[0]});
//		const uint256BnXyMBd = await AntiBaseProtocoltLQAzqM.allowance.call(addressuYjzjpz, address4JioB8, {from: accounts[0]});
//		const boolkAnIImt = await AntiBaseProtocoltLQAzqM.increaseAllowance.call(addressGhag7PO, uintUuVRNCd, {from: accounts[0]});
//		const boolR0cMBcM = await AntiBaseProtocoltLQAzqM.transfer.call(address70yrZi, uintdesVUiS, {from: accounts[0]});

		assert.equal(uint256gAFZEjl, BigInt("240"))
		await expect(AntiBaseProtocoltLQAzqM._burn.call(addressvZliaBy, uintY76zH3T, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmqdKIbD = await AntiBaseProtocol.new({from: accounts[4]});
		const addressswTkLd = "0x0000000000000000000000000000000000000001"
		const uintKf76DAB = BigInt("152")
		const addresshy8BRB7 = accounts[0]
		const uintjDd6ve9 = BigInt("1477")
		const uintpOZeeN0 = BigInt("214")
		const addressrrFWYYU = accounts[1]
		const addressHzIKbI1 = await AntiBaseProtocolmqdKIbD.transferOwnership.call(addressswTkLd, {from: accounts[4]});
//		const addressiJCQHwz = await AntiBaseProtocolmqdKIbD.burnFrom.call(addresshy8BRB7, uintKf76DAB, {from: accounts[2]});
//		const uint256aFlyai = await AntiBaseProtocolmqdKIbD.findRewardFee.call(uintjDd6ve9, {from: accounts[0]});
//		const boole6lasZB = await AntiBaseProtocolmqdKIbD.transfer.call(addressrrFWYYU, uintpOZeeN0, {from: accounts[0]});
//		await AntiBaseProtocolmqdKIbD.renounceOwnership.call({from: accounts[3]});

		await expect(AntiBaseProtocolmqdKIbD.burnFrom.call(addresshy8BRB7, uintKf76DAB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmqdKIbD = await AntiBaseProtocol.new({from: accounts[4]});
		const addressqpv2Oo = accounts[0]
		const addressCUdxQgu = accounts[1]
		const addressUFe6HR3 = "0x0000000000000000000000000000000000000001"
		const uintHP9fLV1 = BigInt("1477")
		const uintSSsdgi = BigInt("214")
		const addressz4D0Eq = accounts[1]
		const uint256XMUcjM = await AntiBaseProtocolmqdKIbD.allowance.call(addressCUdxQgu, addressqpv2Oo, {from: accounts[2]});
		const addressHzIKbI1 = await AntiBaseProtocolmqdKIbD.transferOwnership.call(addressUFe6HR3, {from: accounts[4]});
		const uint256aFlyai = await AntiBaseProtocolmqdKIbD.findRewardFee.call(uintHP9fLV1, {from: accounts[0]});
//		const boole6lasZB = await AntiBaseProtocolmqdKIbD.transfer.call(addressz4D0Eq, uintSSsdgi, {from: accounts[0]});
//		await AntiBaseProtocolmqdKIbD.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256XMUcjM, BigInt("0"))
		assert.equal(uint256aFlyai, BigInt("75"))
		await expect(AntiBaseProtocolmqdKIbD.transfer.call(addressz4D0Eq, uintSSsdgi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmqdKIbD = await AntiBaseProtocol.new({from: accounts[4]});
		const uintCEFm6c = BigInt("1806")
		const addressuo1nOWq = accounts[4]
		const addressihCOUGC = "0x0000000000000000000000000000000000000002"
		const uintTgo0WMq = BigInt("1485")
//		const addressYgp59lt = await AntiBaseProtocolmqdKIbD.burnFrom.call(addressuo1nOWq, uintCEFm6c, {from: "0x0000000000000000000000000000000000000001"});
//		const addressHzIKbI1 = await AntiBaseProtocolmqdKIbD.transferOwnership.call(addressihCOUGC, {from: accounts[4]});
//		const uint256aFlyai = await AntiBaseProtocolmqdKIbD.findRewardFee.call(uintTgo0WMq, {from: accounts[0]});
//		await AntiBaseProtocolmqdKIbD.renounceOwnership.call({from: accounts[3]});

		await expect(AntiBaseProtocolmqdKIbD.burnFrom.call(addressuo1nOWq, uintCEFm6c, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmqdKIbD = await AntiBaseProtocol.new({from: accounts[4]});
		const uintKEmpri4 = BigInt("1807")
		const addressY46ka9T = accounts[2]
		const addressEpZeuZx = accounts[4]
		const addressyUf7Wsx = "0x0000000000000000000000000000000000000001"
		const uintWjC2gKs = BigInt("1485")
//		const boolydFyq56 = await AntiBaseProtocolmqdKIbD.transferFrom.call(addressEpZeuZx, addressY46ka9T, uintKEmpri4, {from: accounts[0]});
//		const addressHzIKbI1 = await AntiBaseProtocolmqdKIbD.transferOwnership.call(addressyUf7Wsx, {from: accounts[4]});
//		const uint256aFlyai = await AntiBaseProtocolmqdKIbD.findRewardFee.call(uintWjC2gKs, {from: accounts[0]});
//		await AntiBaseProtocolmqdKIbD.renounceOwnership.call({from: accounts[3]});

		await expect(AntiBaseProtocolmqdKIbD.transferFrom.call(addressEpZeuZx, addressY46ka9T, uintKEmpri4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmqdKIbD = await AntiBaseProtocol.new({from: accounts[4]});
		const uintAKe282V = BigInt("214")
		const addressSpN6Lb4 = accounts[1]
		const uintV6SUuR = BigInt("469")
		const stringTMEXRQZ = await AntiBaseProtocolmqdKIbD.symbol.call({from: accounts[2]});
//		const boole6lasZB = await AntiBaseProtocolmqdKIbD.transfer.call(addressSpN6Lb4, uintAKe282V, {from: accounts[0]});
//		await AntiBaseProtocolmqdKIbD.renounceOwnership.call({from: accounts[3]});
//		const uint256XiOxEtH = await AntiBaseProtocolmqdKIbD.findRewardFee.call(uintV6SUuR, {from: accounts[0]});

		assert.equal(stringTMEXRQZ, "ABASE")
		await expect(AntiBaseProtocolmqdKIbD.transfer.call(addressSpN6Lb4, uintAKe282V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmqdKIbD = await AntiBaseProtocol.new({from: accounts[4]});
		const uintXWjVyZ = BigInt("562")
		const uintTdB1Cqx = BigInt("644")
		const addressz0bBjK = accounts[5]
		const uintxULQLFU = BigInt("1770")
		const addressB6kpWsZ = accounts[2]
		const uinte6p2laI = BigInt("1168")
		const addressY2nEbw = "0x0000000000000000000000000000000000000001"
		const uintTXjIjty = BigInt("1395")
		const addressIh1BT3b = accounts[0]
		const uint256aFlyai = await AntiBaseProtocolmqdKIbD.findRewardFee.call(uintXWjVyZ, {from: accounts[0]});
		const boolb7ebF6R = await AntiBaseProtocolmqdKIbD.approve.call(addressz0bBjK, uintTdB1Cqx, {from: accounts[0]});
//		const booljWaWRCy = await AntiBaseProtocolmqdKIbD.transfer.call(addressB6kpWsZ, uintxULQLFU, {from: accounts[1]});
//		const addressHeswNu4 = await AntiBaseProtocolmqdKIbD._burnFrom.call(addressY2nEbw, uinte6p2laI, {from: accounts[2]});
//		await AntiBaseProtocolmqdKIbD.renounceOwnership.call({from: accounts[3]});
//		const addressDdpPWAv = await AntiBaseProtocolmqdKIbD.burnFrom.call(addressIh1BT3b, uintTXjIjty, {from: accounts[0]});

		assert.equal(boolb7ebF6R, true)
		assert.equal(uint256aFlyai, BigInt("30"))
		await expect(AntiBaseProtocolmqdKIbD.transfer.call(addressB6kpWsZ, uintxULQLFU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmqdKIbD = await AntiBaseProtocol.new({from: accounts[4]});
		const uintmXxDFV0 = BigInt("562")
		const uintv4qEL5L = BigInt("1310")
		const addresscHIasLB = accounts[1]
		const uintIeg9BDf = BigInt("214")
		const addressrqxILMd = accounts[1]
		const uintRm6Be1R = BigInt("644")
		const addressVZJV23e = accounts[5]
		const uintuki2NeH = BigInt("1770")
		const addressmK0CkM6 = accounts[2]
		const uintNr8cNWB = BigInt("1395")
		const addressxM3XA6E = accounts[0]
		const uint256aFlyai = await AntiBaseProtocolmqdKIbD.findRewardFee.call(uintmXxDFV0, {from: accounts[0]});
		const boolUKnQRw = await AntiBaseProtocolmqdKIbD.increaseAllowance.call(addresscHIasLB, uintv4qEL5L, {from: accounts[2]});
//		const boole6lasZB = await AntiBaseProtocolmqdKIbD.transfer.call(addressrqxILMd, uintIeg9BDf, {from: accounts[0]});
//		const boolb7ebF6R = await AntiBaseProtocolmqdKIbD.approve.call(addressVZJV23e, uintRm6Be1R, {from: accounts[0]});
//		const booljWaWRCy = await AntiBaseProtocolmqdKIbD.transfer.call(addressmK0CkM6, uintuki2NeH, {from: accounts[1]});
//		const addressDdpPWAv = await AntiBaseProtocolmqdKIbD.burnFrom.call(addressxM3XA6E, uintNr8cNWB, {from: accounts[0]});

		assert.equal(boolUKnQRw, true)
		assert.equal(uint256aFlyai, BigInt("30"))
		await expect(AntiBaseProtocolmqdKIbD.transfer.call(addressrqxILMd, uintIeg9BDf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmqdKIbD = await AntiBaseProtocol.new({from: accounts[4]});
		const uintSv6Nwir = BigInt("562")
		const uintj3DM5Br = BigInt("1770")
		const addressAKxXW8w = accounts[3]
		const uintgNfFiRz = BigInt("1395")
		const addressnmsPsEM = accounts[0]
		const uint256aFlyai = await AntiBaseProtocolmqdKIbD.findRewardFee.call(uintSv6Nwir, {from: accounts[0]});
		const stringkMzGow1 = await AntiBaseProtocolmqdKIbD.name.call({from: accounts[2]});
//		const booljWaWRCy = await AntiBaseProtocolmqdKIbD.transfer.call(addressAKxXW8w, uintj3DM5Br, {from: accounts[1]});
//		const stringnWLGxpb = await AntiBaseProtocolmqdKIbD.symbol.call({from: accounts[0]});
//		const addressDdpPWAv = await AntiBaseProtocolmqdKIbD.burnFrom.call(addressnmsPsEM, uintgNfFiRz, {from: accounts[0]});

		assert.equal(stringkMzGow1, "https://t.me/antibaseprotocol")
		assert.equal(uint256aFlyai, BigInt("30"))
		await expect(AntiBaseProtocolmqdKIbD.transfer.call(addressAKxXW8w, uintj3DM5Br, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmqdKIbD = await AntiBaseProtocol.new({from: accounts[4]});
		const uinttkpQSCz = BigInt("1770")
		const addressyeJPlMm = accounts[2]
		const uintdnfezep = BigInt("1395")
		const addressLHaLiJ0 = accounts[0]
//		await AntiBaseProtocolmqdKIbD.renounceOwnership.call({from: accounts[4]});
//		const booljWaWRCy = await AntiBaseProtocolmqdKIbD.transfer.call(addressyeJPlMm, uinttkpQSCz, {from: accounts[1]});
//		const addressDdpPWAv = await AntiBaseProtocolmqdKIbD.burnFrom.call(addressLHaLiJ0, uintdnfezep, {from: accounts[0]});

		await expect(AntiBaseProtocolmqdKIbD.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolKPVeiCM = await AntiBaseProtocol.new({from: accounts[4]});
		const addressunfkOi5 = accounts[1]
		const uintITA1ugI = BigInt("1534")
		const addressDNokSSE = accounts[0]
		const uint256IZOyQQ = await AntiBaseProtocolKPVeiCM.balanceOf.call(addressunfkOi5, {from: accounts[3]});
		const boolWQFyIlh = await AntiBaseProtocolKPVeiCM.approve.call(addressDNokSSE, uintITA1ugI, {from: accounts[3]});
		const uint8v5lGKeC = await AntiBaseProtocolKPVeiCM.decimals.call({from: accounts[5]});

		assert.equal(boolWQFyIlh, true)
		assert.equal(uint256IZOyQQ, BigInt("0"))
		assert.equal(uint8v5lGKeC, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmqdKIbD = await AntiBaseProtocol.new({from: accounts[4]});
		const uintqEq9LgY = BigInt("42")
		const uintMoHAjD6 = BigInt("562")
		const uinttKnp4Nz = BigInt("1538")
		const addressJl3viOW = accounts[1]
		const uint256JbsSkOA = await AntiBaseProtocolmqdKIbD.findBurnFee.call(uintqEq9LgY, {from: accounts[3]});
		const uint256aFlyai = await AntiBaseProtocolmqdKIbD.findRewardFee.call(uintMoHAjD6, {from: accounts[0]});
//		const boolcoVU1P = await AntiBaseProtocolmqdKIbD.decreaseAllowance.call(addressJl3viOW, uinttKnp4Nz, {from: accounts[1]});

		assert.equal(uint256JbsSkOA, BigInt("15"))
		assert.equal(uint256aFlyai, BigInt("30"))
		await expect(AntiBaseProtocolmqdKIbD.decreaseAllowance.call(addressJl3viOW, uinttKnp4Nz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmqdKIbD = await AntiBaseProtocol.new({from: accounts[4]});
		const uintHJKDz7H = BigInt("562")
		const uintDwVei3U = BigInt("1538")
		const addressHWyeQLT = accounts[1]
		const uint256Nyxze8V = await AntiBaseProtocolmqdKIbD.totalSupply.call({from: accounts[0]});
		const uint256aFlyai = await AntiBaseProtocolmqdKIbD.findRewardFee.call(uintHJKDz7H, {from: accounts[0]});
		const boolsTEsaf1 = await AntiBaseProtocolmqdKIbD.isOwner.call({from: accounts[5]});
//		const boolcoVU1P = await AntiBaseProtocolmqdKIbD.decreaseAllowance.call(addressHWyeQLT, uintDwVei3U, {from: accounts[1]});

		assert.equal(boolsTEsaf1, false)
		assert.equal(uint256Nyxze8V, BigInt("31250000000000000000"))
		assert.equal(uint256aFlyai, BigInt("30"))
		await expect(AntiBaseProtocolmqdKIbD.decreaseAllowance.call(addressHWyeQLT, uintDwVei3U, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmqdKIbD = await AntiBaseProtocol.new({from: accounts[4]});
		const uintoBobTcj = BigInt("104")
		const address83dYAQ = accounts[2]
		const uintgpJVJo = BigInt("0")
		const addressFrs3IpE = accounts[1]
		const boolsXPIzQP = await AntiBaseProtocolmqdKIbD.approve.call(address83dYAQ, uintoBobTcj, {from: accounts[3]});
		const uint256JbsSkOA = await AntiBaseProtocolmqdKIbD.findBurnFee.call(uintgpJVJo, {from: accounts[3]});
		const stringwrkKkJd = await AntiBaseProtocolmqdKIbD.name.call({from: accounts[0]});
//		const addressBZYcojA = await AntiBaseProtocolmqdKIbD.transferOwnership.call(addressFrs3IpE, {from: accounts[0]});

		assert.equal(boolsXPIzQP, true)
		assert.equal(stringwrkKkJd, "https://t.me/antibaseprotocol")
		assert.equal(uint256JbsSkOA, BigInt("0"))
		await expect(AntiBaseProtocolmqdKIbD.transferOwnership.call(addressFrs3IpE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmqdKIbD = await AntiBaseProtocol.new({from: accounts[4]});
		const uintrjBL99t = BigInt("221")
		const address0eoqFI = accounts[1]
		const addresskyyQd3S = await AntiBaseProtocolmqdKIbD.owner.call({from: accounts[0]});
//		const boole6lasZB = await AntiBaseProtocolmqdKIbD.transfer.call(address0eoqFI, uintrjBL99t, {from: accounts[0]});
//		const uint8V9OGIqY = await AntiBaseProtocolmqdKIbD.decimals.call({from: accounts[1]});

		assert.equal(addresskyyQd3S, 0xC356D8c4407CEb47A2B85893FB99cA7DE52b1532)
		await expect(AntiBaseProtocolmqdKIbD.transfer.call(address0eoqFI, uintrjBL99t, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolHEmB7ls = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintz5kaFFu = BigInt("1028")
		const addressF05Wjf2 = accounts[5]
		const uintlTsLmv = BigInt("420")
		const addressTYqrLS7 = accounts[0]
		const boolgU7EeGE = await AntiBaseProtocolHEmB7ls.approve.call(addressF05Wjf2, uintz5kaFFu, {from: accounts[4]});
		const addressYpCsjpU = await AntiBaseProtocolHEmB7ls.burnFrom.call(addressTYqrLS7, uintlTsLmv, {from: accounts[3]});
	});
})