const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintUPQjjFR = BigInt("1186")
		const Cover_ZapIn_General_V1kz0LFs = await Cover_ZapIn_General_V1.new(uintUPQjjFR, {from: accounts[2]});
		const addressv4l5K6d = accounts[3]
		const uintMuwlZ6e = BigInt("1100")
		const addressjhwUMq = accounts[1]
		const addressDfnf3V5 = accounts[2]
		const addresssSO06in = accounts[0]
		const uinthnVDK1 = BigInt("1926")
		const addressyjLMTV = accounts[5]
		const addressHXedisf = await Cover_ZapIn_General_V1kz0LFs.transferOwnership.call(addressv4l5K6d, {from: accounts[4]});
		await Cover_ZapIn_General_V1kz0LFs._enterCover.call(addressjhwUMq, uintMuwlZ6e, {from: accounts[4]});
		const 
OMRGvyB = await Cover_ZapIn_General_V1kz0LFs._enterPosition.call(addressyjLMTV, uinthnVDK1, addresssSO06in, addressDfnf3V5, {from: accounts[1]});
		await Cover_ZapIn_General_V1kz0LFs.withdraw.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintEMqfXaR = BigInt("962")
		const Cover_ZapIn_General_V1WcoovFP = await Cover_ZapIn_General_V1.new(uintEMqfXaR, {from: accounts[2]});
		const addressg0uKzb0 = accounts[4]
		const addresscVEnzs8 = accounts[0]
		const addressPg9GorF = accounts[2]
		const uintjCxvrdh = BigInt("321")
		const addressharEf2k = accounts[1]
		const byte3hZNG8 = "0x0d0002020a0f090e1c020414"
		const addressvLFi45Z = accounts[1]
		const addressUYaVY6V = accounts[1]
		const uintoNDaeP0 = BigInt("792")
		const addressHZMBWTu = accounts[0]
		const addressTsSQxE = accounts[4]
		const addresslHkltE7 = accounts[5]
		const addressrIyqRX4 = accounts[2]
		const uintL4XAqIE = BigInt("2012")
		const uinttC2K66O = BigInt("1823")
		const addresshB12iUn = accounts[0]
		const boolkRkin3g = await Cover_ZapIn_General_V1WcoovFP.isOwner.call({from: accounts[2]});
		const 
ASljPfO = await Cover_ZapIn_General_V1WcoovFP._getCoverDetails.call(addressg0uKzb0, {from: accounts[1]});
		const 
jP0YqkN = await Cover_ZapIn_General_V1WcoovFP._enterPosition.call(addressharEf2k, uintjCxvrdh, addressPg9GorF, addresscVEnzs8, {from: accounts[5]});
		const 
SzTHxkW = await Cover_ZapIn_General_V1WcoovFP.ZapIn.call(addressrIyqRX4, addresslHkltE7, addressTsSQxE, addressHZMBWTu, uintoNDaeP0, addressUYaVY6V, addressvLFi45Z, byte3hZNG8, {from: accounts[4]});
		const uint16ZMfSEr = await Cover_ZapIn_General_V1WcoovFP.set_new_goodwill.call(uintL4XAqIE, {from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1WcoovFP._enterCover.call(addresshB12iUn, uinttC2K66O, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintjlKS2At = BigInt("196")
		const Cover_ZapIn_General_V1cRXldui = await Cover_ZapIn_General_V1.new(uintjlKS2At, {from: "0x0000000000000000000000000000000000000001"});
		const uintvoAoSaP = BigInt("651")
		const addressRga7vbQ = accounts[4]
		const bytenjezb99 = "0x02121d0f1f061a17"
		const addresswZSqIyN = accounts[1]
		const addressXyfob7u = accounts[2]
		const uintHhFrD7L = BigInt("442")
		const addressHcWM5gI = accounts[1]
		const addressuKBiQIA = accounts[4]
		const addressuaNnhN1 = "0x0000000000000000000000000000000000000001"
		const addressd5ROgkb = accounts[1]
		await Cover_ZapIn_General_V1cRXldui.onlyOwner.call({from: accounts[4]});
		await Cover_ZapIn_General_V1cRXldui._enterCover.call(addressRga7vbQ, uintvoAoSaP, {from: accounts[2]});
		const 
ZT5XR6y = await Cover_ZapIn_General_V1cRXldui.ZapIn.call(addressd5ROgkb, addressuaNnhN1, addressuKBiQIA, addressHcWM5gI, uintHhFrD7L, addressXyfob7u, addresswZSqIyN, bytenjezb99, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintbtO6obD = BigInt("1532")
		const Cover_ZapIn_General_V1w2o35pN = await Cover_ZapIn_General_V1.new(uintbtO6obD, {from: accounts[3]});
		const bytemWorSf9 = "0x0720110b"
		const addresscbu29oW = accounts[5]
		const addressfenHwxr = accounts[0]
		const uintBKQCgPm = BigInt("524")
		const addressBxPF1u = accounts[2]
		const addressmKLmg2l = accounts[2]
		const addresskRHzWkB = accounts[3]
		const addressPwHhWJK = accounts[2]
		const byteyOKJgen = "0x0d061817071f1a170b1c1b1b1c05190819111313000b0505"
		const addressftGxTJ6 = accounts[5]
		const address2zIRfk = "0x0000000000000000000000000000000000000001"
		const uintFq2Lpdz = BigInt("771")
		const addressDl4nQxv = "0x0000000000000000000000000000000000000001"
		const addressK72W7xM = accounts[3]
		const addressBov2mwY = "0x0000000000000000000000000000000000000001"
		const addressLNR8DzS = accounts[3]
		await Cover_ZapIn_General_V1w2o35pN.renounceOwnership.call({from: accounts[3]});
		const 
p9USpSB = await Cover_ZapIn_General_V1w2o35pN.ZapIn.call(addressPwHhWJK, addresskRHzWkB, addressmKLmg2l, addressBxPF1u, uintBKQCgPm, addressfenHwxr, addresscbu29oW, bytemWorSf9, {from: accounts[1]});
		const 
maS31Ol = await Cover_ZapIn_General_V1w2o35pN.ZapIn.call(addressLNR8DzS, addressBov2mwY, addressK72W7xM, addressDl4nQxv, uintFq2Lpdz, address2zIRfk, addressftGxTJ6, byteyOKJgen, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintIUjBjz5 = BigInt("1888")
		const Cover_ZapIn_General_V1L7Yid8y = await Cover_ZapIn_General_V1.new(uintIUjBjz5, {from: accounts[3]});
		const addressKUHCyaY = await Cover_ZapIn_General_V1L7Yid8y.owner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintaO3SH3 = BigInt("1438")
		const Cover_ZapIn_General_V1q0Add8l = await Cover_ZapIn_General_V1.new(uintaO3SH3, {from: accounts[4]});
		const address9JTzPJ = accounts[3]
		const addressjXl2otU = accounts[4]
		const uintmEkULE = BigInt("1949")
		const addressmLxlmsW = await Cover_ZapIn_General_V1q0Add8l.transferOwnership.call(address9JTzPJ, {from: accounts[4]});
		const addressNfEx7FC = await Cover_ZapIn_General_V1q0Add8l.inCaseTokengetsStuck.call(addressjXl2otU, {from: accounts[2]});
		await Cover_ZapIn_General_V1q0Add8l.onlyOwner.call({from: accounts[3]});
		const uint16AOlIb5a = await Cover_ZapIn_General_V1q0Add8l.set_new_goodwill.call(uintmEkULE, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintIDIKk3h = BigInt("157")
		const Cover_ZapIn_General_V1BmfSDTc = await Cover_ZapIn_General_V1.new(uintIDIKk3h, {from: accounts[4]});
		const addressxxSOkY6 = accounts[4]
		const addressfBItnQy = accounts[3]
		const addressGaTfA8B = await Cover_ZapIn_General_V1BmfSDTc.inCaseTokengetsStuck.call(addressxxSOkY6, {from: accounts[4]});
		const addressVCzGWiW = await Cover_ZapIn_General_V1BmfSDTc.inCaseTokengetsStuck.call(addressfBItnQy, {from: "0x0000000000000000000000000000000000000001"});
		const addressPlEtdg7 = await Cover_ZapIn_General_V1BmfSDTc.owner.call({from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintgaRFIGA = BigInt("1438")
		const Cover_ZapIn_General_V1q0Add8l = await Cover_ZapIn_General_V1.new(uintgaRFIGA, {from: accounts[4]});
		const byteExWLP0X = "0x031109130c11141b1609141a0512070f15070c0e1f18121c1a0d030f02"
		const addresstjMEzT = accounts[5]
		const addressaV8haqq = accounts[4]
		const uintvEeUM77 = BigInt("782")
		const addressTL2HWtZ = "0x0000000000000000000000000000000000000001"
		const addressQrcFB4a = accounts[4]
		const addressCRIKglo = accounts[5]
		const addressfQkcphe = accounts[1]
		await Cover_ZapIn_General_V1q0Add8l.toggleContractActive.call({from: accounts[4]});
		await Cover_ZapIn_General_V1q0Add8l.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const 
o03vu6E = await Cover_ZapIn_General_V1q0Add8l.ZapIn.call(addressfQkcphe, addressCRIKglo, addressQrcFB4a, addressTL2HWtZ, uintvEeUM77, addressaV8haqq, addresstjMEzT, byteExWLP0X, {from: accounts[2]});
	});
})