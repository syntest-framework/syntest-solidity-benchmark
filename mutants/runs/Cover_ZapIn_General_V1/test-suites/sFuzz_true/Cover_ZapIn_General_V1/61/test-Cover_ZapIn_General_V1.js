const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintTAGJLYP = BigInt("62")
		const Cover_ZapIn_General_V1RBfkw4H = await Cover_ZapIn_General_V1.new(uintTAGJLYP, {from: accounts[5]});
		const address4Yk9fW = accounts[5]
		const addressfQOyg66 = accounts[0]
		const addressSpupxuA = "0x0000000000000000000000000000000000000001"
		const uintaHZTvNQ = BigInt("583")
		const addressvA156RM = accounts[3]
		const addressrU1tCsY = accounts[5]
		const addressKRg6rwo = await Cover_ZapIn_General_V1RBfkw4H.inCaseTokengetsStuck.call(address4Yk9fW, {from: accounts[0]});
		const 
lWXozZy = await Cover_ZapIn_General_V1RBfkw4H._enterPosition.call(addressvA156RM, uintaHZTvNQ, addressSpupxuA, addressfQOyg66, {from: accounts[2]});
		const boolBSGi4l = await Cover_ZapIn_General_V1RBfkw4H.isOwner.call({from: accounts[5]});
		const 
fP1WSF9 = await Cover_ZapIn_General_V1RBfkw4H._getCoverDetails.call(addressrU1tCsY, {from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1RBfkw4H.stopInEmergency.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinte8Ne5qS = BigInt("329")
		const Cover_ZapIn_General_V1RyBdnOy = await Cover_ZapIn_General_V1.new(uinte8Ne5qS, {from: accounts[4]});
		const addressVqMrvLt = accounts[2]
		const uintDmFYHiL = BigInt("1388")
		const addressSkaWg9C = accounts[2]
		const bytelI0wkdW = "0x05151c01151b18190814030c161f0b09120f021e1e141b160b1b130d1c"
		const addressqTw3P3U = accounts[0]
		const addressJg69UWA = accounts[1]
		const uintLO6JnR1 = BigInt("47")
		const address23VCoP = accounts[0]
		const addressHsvSJRK = accounts[2]
		const addressLhpPQr = accounts[1]
		const addressUxwVDT3 = accounts[4]
		const boolQnCxKIX = await Cover_ZapIn_General_V1RyBdnOy.isOwner.call({from: accounts[1]});
		const 
UtKvOKL = await Cover_ZapIn_General_V1RyBdnOy._getCoverDetails.call(addressVqMrvLt, {from: accounts[2]});
		await Cover_ZapIn_General_V1RyBdnOy.onlyOwner.call({from: accounts[4]});
		await Cover_ZapIn_General_V1RyBdnOy._enterCover.call(addressSkaWg9C, uintDmFYHiL, {from: accounts[3]});
		const 
QOLNoG1 = await Cover_ZapIn_General_V1RyBdnOy.ZapIn.call(addressUxwVDT3, addressLhpPQr, addressHsvSJRK, address23VCoP, uintLO6JnR1, addressJg69UWA, addressqTw3P3U, bytelI0wkdW, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinthCLeOHd = BigInt("1220")
		const Cover_ZapIn_General_V1lXV0Kp7 = await Cover_ZapIn_General_V1.new(uinthCLeOHd, {from: "0x0000000000000000000000000000000000000001"});
		const uinthTKa933 = BigInt("688")
		const addressOg8IhXb = accounts[1]
		await Cover_ZapIn_General_V1lXV0Kp7._enterCover.call(addressOg8IhXb, uinthTKa933, {from: accounts[0]});
		const boolarGpPj4 = await Cover_ZapIn_General_V1lXV0Kp7.isOwner.call({from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintwAJekx = BigInt("219")
		const Cover_ZapIn_General_V1AN3ve88 = await Cover_ZapIn_General_V1.new(uintwAJekx, {from: accounts[5]});
		const byteK3355ga = "0x1208000f1e080d00050d04041e080b1b0f19051c050a1e011205101d09"
		const addresspsbe7Tc = accounts[4]
		const addressl3sieR = accounts[5]
		const uintzrA4PXU = BigInt("959")
		const addressJdP87B = "0x0000000000000000000000000000000000000001"
		const addressn6Yf8wL = accounts[1]
		const addresscy53exW = accounts[3]
		const addressd2YDXwh = accounts[3]
		const addresskoi9mJ7 = accounts[5]
		const 
pgtUDRc = await Cover_ZapIn_General_V1AN3ve88.ZapIn.call(addressd2YDXwh, addresscy53exW, addressn6Yf8wL, addressJdP87B, uintzrA4PXU, addressl3sieR, addresspsbe7Tc, byteK3355ga, {from: accounts[0]});
		const addressQZ215uE = await Cover_ZapIn_General_V1AN3ve88.transferOwnership.call(addresskoi9mJ7, {from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1AN3ve88.stopInEmergency.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintwNbp8Z6 = BigInt("1745")
		const Cover_ZapIn_General_V1NK4oSng = await Cover_ZapIn_General_V1.new(uintwNbp8Z6, {from: accounts[1]});
		const uintnSDcvhu = BigInt("594")
		const uintTmxI3Q6 = BigInt("6")
		const addressoayyfA2 = accounts[1]
		const uint16nEJiSLv = await Cover_ZapIn_General_V1NK4oSng.set_new_goodwill.call(uintnSDcvhu, {from: accounts[1]});
		const addressap0O5P = await Cover_ZapIn_General_V1NK4oSng.owner.call({from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1NK4oSng._enterCover.call(addressoayyfA2, uintTmxI3Q6, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintqGu2HIX = BigInt("219")
		const Cover_ZapIn_General_V1AN3ve88 = await Cover_ZapIn_General_V1.new(uintqGu2HIX, {from: accounts[5]});
		const uintFhsVW2n = BigInt("933")
		const byteGSmxNb0 = "0x1208000f1e080d00050d04041e080b1b0f19051c050a1e011205101d09"
		const addressIWXIMTe = accounts[4]
		const addressKyUy9cj = accounts[5]
		const uintzVPTcFf = BigInt("959")
		const addresstYknNfH = "0x0000000000000000000000000000000000000001"
		const addressltPn0u1 = accounts[1]
		const addressAbiAyUp = accounts[3]
		const addressTXHYEm = accounts[3]
		await Cover_ZapIn_General_V1AN3ve88.toggleContractActive.call({from: accounts[5]});
		const uint16RHCrjy = await Cover_ZapIn_General_V1AN3ve88.set_new_goodwill.call(uintFhsVW2n, {from: accounts[5]});
		const 
pgtUDRc = await Cover_ZapIn_General_V1AN3ve88.ZapIn.call(addressTXHYEm, addressAbiAyUp, addressltPn0u1, addresstYknNfH, uintzVPTcFf, addressKyUy9cj, addressIWXIMTe, byteGSmxNb0, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintmOd4tUH = BigInt("219")
		const Cover_ZapIn_General_V1AN3ve88 = await Cover_ZapIn_General_V1.new(uintmOd4tUH, {from: accounts[5]});
		const addressXSyZrhS = accounts[3]
		const bytekXaRYOx = "0x1208000f1e080d00050d04041e080b1b0f19051c050a1e011205101d09"
		const addressOEGIN0h = accounts[4]
		const addressNHBpubf = accounts[6]
		const uintnJaoz0q = BigInt("959")
		const addressaI2epZm = "0x0000000000000000000000000000000000000001"
		const addressNaBosPs = accounts[1]
		const addressYjoBAYq = accounts[3]
		const addressv5C81sP = accounts[3]
		const addresstvyCLV = accounts[3]
		const addressjQ2BHRR = await Cover_ZapIn_General_V1AN3ve88.transferOwnership.call(addressXSyZrhS, {from: accounts[5]});
		const 
pgtUDRc = await Cover_ZapIn_General_V1AN3ve88.ZapIn.call(addressv5C81sP, addressYjoBAYq, addressNaBosPs, addressaI2epZm, uintnJaoz0q, addressNHBpubf, addressOEGIN0h, bytekXaRYOx, {from: accounts[0]});
		const addressjGksaiX = await Cover_ZapIn_General_V1AN3ve88.inCaseTokengetsStuck.call(addresstvyCLV, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintQPRMO6w = BigInt("149")
		const Cover_ZapIn_General_V1VrhcCMc = await Cover_ZapIn_General_V1.new(uintQPRMO6w, {from: accounts[5]});
		const addressrXizrkp = await Cover_ZapIn_General_V1VrhcCMc.owner.call({from: accounts[4]});
		await Cover_ZapIn_General_V1VrhcCMc.withdraw.call({from: accounts[5]});
	});
})