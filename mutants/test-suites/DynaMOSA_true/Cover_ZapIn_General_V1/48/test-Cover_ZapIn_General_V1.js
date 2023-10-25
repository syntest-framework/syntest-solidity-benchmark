const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintKeymUP = BigInt("1990")
		const Cover_ZapIn_General_V1dAH5cHI = await Cover_ZapIn_General_V1.new(uintKeymUP, {from: accounts[0]});
		const addressZsy3WHG = accounts[1]
		const addresspyhE6U = accounts[0]
		const uintL12XrYS = BigInt("1496")
		const addressSfiEJh2 = accounts[2]
		const byteaBdNGYn = "0x17150e18161e160a120c08"
		const addressAeRae9e = accounts[1]
		const addressyXNlAq6 = accounts[1]
		const uintxRTNzMa = BigInt("575")
		const addressA2MeJsO = accounts[4]
		const addressz1oBCr1 = accounts[3]
		const addressoGPMyHh = accounts[1]
		const addressSbctXv4 = accounts[2]
		const 
zEjJ1G = await Cover_ZapIn_General_V1dAH5cHI._enterPosition.call(addressSfiEJh2, uintL12XrYS, addresspyhE6U, addressZsy3WHG, {from: accounts[4]});
		await Cover_ZapIn_General_V1dAH5cHI.toggleContractActive.call({from: accounts[0]});
		const 
Ttzh0Sw = await Cover_ZapIn_General_V1dAH5cHI.ZapIn.call(addressSbctXv4, addressoGPMyHh, addressz1oBCr1, addressA2MeJsO, uintxRTNzMa, addressyXNlAq6, addressAeRae9e, byteaBdNGYn, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintgOZlPp4 = BigInt("1884")
		const Cover_ZapIn_General_V1LDO2rN = await Cover_ZapIn_General_V1.new(uintgOZlPp4, {from: accounts[1]});
		const uintr7F8T5B = BigInt("402")
		const uint16zkpyNYv = await Cover_ZapIn_General_V1LDO2rN.set_new_goodwill.call(uintr7F8T5B, {from: "0x0000000000000000000000000000000000000001"});
		const addressnaodYX9 = await Cover_ZapIn_General_V1LDO2rN.owner.call({from: accounts[0]});
		await Cover_ZapIn_General_V1LDO2rN.stopInEmergency.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintAf669c = BigInt("221")
		const Cover_ZapIn_General_V1GyWXA5 = await Cover_ZapIn_General_V1.new(uintAf669c, {from: "0x0000000000000000000000000000000000000001"});
		const bytejz0rNh0 = "0x0501020c01041a080502"
		const addressvaPPbV = accounts[3]
		const addressdAcBZmR = accounts[0]
		const uinttEULdnW = BigInt("227")
		const addressl1uAyJe = accounts[1]
		const addressXsa9Pyt = accounts[1]
		const addressX6Wp5Nr = accounts[3]
		const addressabQWNKo = accounts[3]
		await Cover_ZapIn_General_V1GyWXA5.renounceOwnership.call({from: accounts[3]});
		const addressN5Tpnrs = await Cover_ZapIn_General_V1GyWXA5.owner.call({from: accounts[3]});
		const addressDYOo1Fo = await Cover_ZapIn_General_V1GyWXA5.owner.call({from: accounts[3]});
		const 
iorHGiC = await Cover_ZapIn_General_V1GyWXA5.ZapIn.call(addressabQWNKo, addressX6Wp5Nr, addressXsa9Pyt, addressl1uAyJe, uinttEULdnW, addressdAcBZmR, addressvaPPbV, bytejz0rNh0, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinttNc2T3 = BigInt("1643")
		const Cover_ZapIn_General_V1j7KI53 = await Cover_ZapIn_General_V1.new(uinttNc2T3, {from: accounts[0]});
		const addressf3GuGAr = accounts[2]
		const addressqYgv5wS = accounts[0]
		const addressZQp9SyL = accounts[1]
		const uintYweqeXA = BigInt("1867")
		const addressKAgwEmF = accounts[5]
		const uintVyd7ERG = BigInt("1679")
		const bytelaOYISA = "0x1008111207021b1c0f15100d160c090b0308151d010508170c11"
		const addressujBVX7h = accounts[2]
		const addressj3euboA = accounts[1]
		const uintJTR5Kns = BigInt("103")
		const addressjz6P1e = accounts[1]
		const addressRaXti97 = accounts[3]
		const addressEhTL9fE = accounts[3]
		const addressjdRaAq9 = accounts[3]
		const boolcCh0Sr1 = await Cover_ZapIn_General_V1j7KI53.isOwner.call({from: accounts[0]});
		const addressCsuZ964 = await Cover_ZapIn_General_V1j7KI53.transferOwnership.call(addressf3GuGAr, {from: accounts[0]});
		const 
tHbaDS7 = await Cover_ZapIn_General_V1j7KI53._enterPosition.call(addressKAgwEmF, uintYweqeXA, addressZQp9SyL, addressqYgv5wS, {from: accounts[3]});
		const uint16Uvu3Se9 = await Cover_ZapIn_General_V1j7KI53.set_new_goodwill.call(uintVyd7ERG, {from: accounts[1]});
		const 
D3yz1uG = await Cover_ZapIn_General_V1j7KI53.ZapIn.call(addressjdRaAq9, addressEhTL9fE, addressRaXti97, addressjz6P1e, uintJTR5Kns, addressj3euboA, addressujBVX7h, bytelaOYISA, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintyl8Nw5 = BigInt("1018")
		const Cover_ZapIn_General_V1Bqm55CG = await Cover_ZapIn_General_V1.new(uintyl8Nw5, {from: accounts[0]});
		const uintf2K50tr = BigInt("96")
		const uint16bGe4Z0p = await Cover_ZapIn_General_V1Bqm55CG.set_new_goodwill.call(uintf2K50tr, {from: accounts[0]});
		await Cover_ZapIn_General_V1Bqm55CG.withdraw.call({from: accounts[5]});
		const boolCCVcRRm = await Cover_ZapIn_General_V1Bqm55CG.isOwner.call({from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintcDYZbdB = BigInt("827")
		const Cover_ZapIn_General_V1jvLiZt = await Cover_ZapIn_General_V1.new(uintcDYZbdB, {from: accounts[3]});
		const byteMySMQc2 = "0x05110d140a001010090e04090909171d17"
		const addressNUwQcQF = accounts[2]
		const addressRlQFS2I = accounts[1]
		const uintJU2thKg = BigInt("1668")
		const addressltN2Wkd = accounts[3]
		const addressrRHzjMq = accounts[1]
		const addressZkCU3uf = accounts[0]
		const addressE3yfdq = accounts[3]
		const addressR4gQNm9 = accounts[1]
		const uinthmBghwY = BigInt("2026")
		const addresseOz8vO = accounts[4]
		const 
YuKju9M = await Cover_ZapIn_General_V1jvLiZt.ZapIn.call(addressE3yfdq, addressZkCU3uf, addressrRHzjMq, addressltN2Wkd, uintJU2thKg, addressRlQFS2I, addressNUwQcQF, byteMySMQc2, {from: "0x0000000000000000000000000000000000000001"});
		const addressuFGs1S = await Cover_ZapIn_General_V1jvLiZt.transferOwnership.call(addressR4gQNm9, {from: accounts[4]});
		await Cover_ZapIn_General_V1jvLiZt._enterCover.call(addresseOz8vO, uinthmBghwY, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintrn5QMBl = BigInt("170")
		const Cover_ZapIn_General_V1SoT5z6V = await Cover_ZapIn_General_V1.new(uintrn5QMBl, {from: accounts[2]});
		const addressejZNJKr = accounts[2]
		const addressmknwDXS = "0x0000000000000000000000000000000000000001"
		const addressQ1agkwN = accounts[0]
		const uintO8shilD = BigInt("862")
		const addressjT27gdq = accounts[1]
		const addressTQb2vjl = accounts[0]
		const addressQMsQ8bD = accounts[5]
		const uintz7aB4te = BigInt("913")
		const addressKqYSflQ = "0x0000000000000000000000000000000000000001"
		const addressr9U0NXi = await Cover_ZapIn_General_V1SoT5z6V.owner.call({from: accounts[4]});
		const addressnVQzvU0 = await Cover_ZapIn_General_V1SoT5z6V.transferOwnership.call(addressejZNJKr, {from: accounts[0]});
		const 
Ca8F7du = await Cover_ZapIn_General_V1SoT5z6V._enterPosition.call(addressjT27gdq, uintO8shilD, addressQ1agkwN, addressmknwDXS, {from: accounts[4]});
		const 
nkM7Isq = await Cover_ZapIn_General_V1SoT5z6V._enterPosition.call(addressKqYSflQ, uintz7aB4te, addressQMsQ8bD, addressTQb2vjl, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintF1GWiyG = BigInt("827")
		const Cover_ZapIn_General_V1jvLiZt = await Cover_ZapIn_General_V1.new(uintF1GWiyG, {from: accounts[3]});
		const bytehGHFpGA = "0x05110d140a001010090e04090909171d17"
		const addressxtabati = accounts[2]
		const addressNVUcr2h = accounts[1]
		const uintQvkxXYa = BigInt("1668")
		const addressFKBtNEP = accounts[3]
		const addressNSZyY4F = accounts[1]
		const addressW2R9Dst = accounts[0]
		const address6Jzkn0 = accounts[3]
		const addressWUVOS0u = accounts[1]
		const byteGhwV0Ag = "0x02080908011507011705130b0e0f14201214040108"
		const addressaZyF2D = accounts[1]
		const addressp2CDNl6 = accounts[0]
		const uintbXNCFXQ = BigInt("266")
		const addresswXP3Hjm = accounts[1]
		const addressz3RKYBN = accounts[4]
		const addressHgEsBfH = accounts[3]
		const addressXn75rj = accounts[2]
		const uint4YSt8B = BigInt("2026")
		const addressUsmI3U9 = accounts[5]
		await Cover_ZapIn_General_V1jvLiZt.renounceOwnership.call({from: accounts[3]});
		const 
YuKju9M = await Cover_ZapIn_General_V1jvLiZt.ZapIn.call(address6Jzkn0, addressW2R9Dst, addressNSZyY4F, addressFKBtNEP, uintQvkxXYa, addressNVUcr2h, addressxtabati, bytehGHFpGA, {from: "0x0000000000000000000000000000000000000001"});
		const addressuFGs1S = await Cover_ZapIn_General_V1jvLiZt.transferOwnership.call(addressWUVOS0u, {from: accounts[4]});
		const 
G3WUjIG = await Cover_ZapIn_General_V1jvLiZt.ZapIn.call(addressXn75rj, addressHgEsBfH, addressz3RKYBN, addresswXP3Hjm, uintbXNCFXQ, addressp2CDNl6, addressaZyF2D, byteGhwV0Ag, {from: accounts[4]});
		await Cover_ZapIn_General_V1jvLiZt._enterCover.call(addressUsmI3U9, uint4YSt8B, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintoGsh5By = BigInt("827")
		const Cover_ZapIn_General_V1jvLiZt = await Cover_ZapIn_General_V1.new(uintoGsh5By, {from: accounts[3]});
		const bytezQhoFiz = "0x05110d140a001010090e04090909171d17"
		const addressW8K3mEc = accounts[2]
		const addressmRaKoWF = accounts[1]
		const uintsbLYoBy = BigInt("1668")
		const addressJWXA3NF = accounts[3]
		const addresshHWSCOU = accounts[1]
		const addressjyJFt3k = accounts[0]
		const addressw12YHdZ = accounts[3]
		const addressyIVA09H = accounts[2]
		const uintuoftt2 = BigInt("786")
		const addressK1tU4ti = accounts[0]
		await Cover_ZapIn_General_V1jvLiZt.toggleContractActive.call({from: accounts[3]});
		const 
YuKju9M = await Cover_ZapIn_General_V1jvLiZt.ZapIn.call(addressw12YHdZ, addressjyJFt3k, addresshHWSCOU, addressJWXA3NF, uintsbLYoBy, addressmRaKoWF, addressW8K3mEc, bytezQhoFiz, {from: "0x0000000000000000000000000000000000000001"});
		const addressuFGs1S = await Cover_ZapIn_General_V1jvLiZt.transferOwnership.call(addressyIVA09H, {from: accounts[4]});
		await Cover_ZapIn_General_V1jvLiZt._enterCover.call(addressK1tU4ti, uintuoftt2, {from: accounts[0]});
	});
})