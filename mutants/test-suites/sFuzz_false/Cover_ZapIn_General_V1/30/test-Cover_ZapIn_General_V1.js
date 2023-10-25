const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintKrGmfaM = BigInt("1708")
		const Cover_ZapIn_General_V1JdTnbeW = await Cover_ZapIn_General_V1.new(uintKrGmfaM, {from: accounts[2]});
		const addressIrD0ffi = accounts[3]
		const uintKSMTF2y = BigInt("1040")
		const addressF7kIQAA = accounts[3]
		const addressVHFEWyz = await Cover_ZapIn_General_V1JdTnbeW.owner.call({from: accounts[4]});
		const addressc2fwcjn = await Cover_ZapIn_General_V1JdTnbeW.transferOwnership.call(addressIrD0ffi, {from: accounts[1]});
		await Cover_ZapIn_General_V1JdTnbeW._enterCover.call(addressF7kIQAA, uintKSMTF2y, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintrdFHXYw = BigInt("1563")
		const Cover_ZapIn_General_V1JjDAsI = await Cover_ZapIn_General_V1.new(uintrdFHXYw, {from: accounts[1]});
		const addressgkZvPiz = accounts[5]
		const address2NLRcq = accounts[4]
		const uintRL86dLu = BigInt("1162")
		const addressHzwh0zI = accounts[0]
		const uintEOVsFJL = BigInt("1065")
		const byteJPMGLVZ = "0x1b1d1419121d1a"
		const addressVLpRuWD = "0x0000000000000000000000000000000000000001"
		const address723DXd = accounts[0]
		const uintsyTkmH8 = BigInt("1049")
		const addressw1B5RN7 = accounts[3]
		const addresst5ZyDSA = accounts[1]
		const addressfsW6ZiW = "0x0000000000000000000000000000000000000001"
		const addressdRwbSS = accounts[2]
		const addressE1V4gay = accounts[0]
		const addressFAD5wL1 = accounts[2]
		const uint5peBpE = BigInt("1110")
		const addressAsRZqPU = accounts[4]
		const 
LEndxKN = await Cover_ZapIn_General_V1JjDAsI._enterPosition.call(addressHzwh0zI, uintRL86dLu, address2NLRcq, addressgkZvPiz, {from: accounts[1]});
		const uint16XqgS47B = await Cover_ZapIn_General_V1JjDAsI.set_new_goodwill.call(uintEOVsFJL, {from: "0x0000000000000000000000000000000000000001"});
		const 
LSrkCbm = await Cover_ZapIn_General_V1JjDAsI.ZapIn.call(addressdRwbSS, addressfsW6ZiW, addresst5ZyDSA, addressw1B5RN7, uintsyTkmH8, address723DXd, addressVLpRuWD, byteJPMGLVZ, {from: accounts[3]});
		const 
JMPY4Gc = await Cover_ZapIn_General_V1JjDAsI._enterPosition.call(addressAsRZqPU, uint5peBpE, addressFAD5wL1, addressE1V4gay, {from: accounts[5]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintWhd060y = BigInt("1934")
		const Cover_ZapIn_General_V1CzVp8xH = await Cover_ZapIn_General_V1.new(uintWhd060y, {from: "0x0000000000000000000000000000000000000001"});
		const addresslj3B4ai = accounts[4]
		const addressK9UYyjA = accounts[5]
		const uintwI4zgUI = BigInt("1945")
		const addressciSs4dG = accounts[1]
		await Cover_ZapIn_General_V1CzVp8xH.stopInEmergency.call({from: accounts[5]});
		const 
cMHq0oH = await Cover_ZapIn_General_V1CzVp8xH._enterPosition.call(addressciSs4dG, uintwI4zgUI, addressK9UYyjA, addresslj3B4ai, {from: accounts[5]});
		await Cover_ZapIn_General_V1CzVp8xH.renounceOwnership.call({from: accounts[0]});
		await Cover_ZapIn_General_V1CzVp8xH.withdraw.call({from: accounts[3]});
		const boolnGZDtLD = await Cover_ZapIn_General_V1CzVp8xH.isOwner.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintmo6HXKe = BigInt("62")
		const Cover_ZapIn_General_V1izKLkwr = await Cover_ZapIn_General_V1.new(uintmo6HXKe, {from: accounts[4]});
		const addresscylvnPR = "0x0000000000000000000000000000000000000001"
		const byteivpBJxn = "0x160e160b"
		const addressFx2m5R7 = accounts[4]
		const addressjhKZhsW = accounts[4]
		const uintdtFGb3N = BigInt("577")
		const addressQNaowk2 = accounts[2]
		const addressjIFng6L = accounts[4]
		const addressqvV8hNh = accounts[4]
		const addressK5E8dsE = accounts[0]
		const addressMTj6sfx = await Cover_ZapIn_General_V1izKLkwr.transferOwnership.call(addresscylvnPR, {from: accounts[4]});
		const 
W534bT = await Cover_ZapIn_General_V1izKLkwr.ZapIn.call(addressK5E8dsE, addressqvV8hNh, addressjIFng6L, addressQNaowk2, uintdtFGb3N, addressjhKZhsW, addressFx2m5R7, byteivpBJxn, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintBbmRSnF = BigInt("62")
		const Cover_ZapIn_General_V1izKLkwr = await Cover_ZapIn_General_V1.new(uintBbmRSnF, {from: accounts[4]});
		const addressLyTRDh = "0x0000000000000000000000000000000000000000"
		const addressUGdOIJP = accounts[1]
		const bytebAQ9WtB = "0x160e160b"
		const addresseJMsZnh = accounts[4]
		const addressvmYuWeX = accounts[4]
		const uint74XUPY = BigInt("577")
		const addresssNWHCa = accounts[2]
		const addressD8tFAm8 = accounts[4]
		const addressBGdQerS = accounts[4]
		const addressLQDTFdy = accounts[0]
		const addressMTj6sfx = await Cover_ZapIn_General_V1izKLkwr.transferOwnership.call(addressLyTRDh, {from: accounts[4]});
		const 
tLaSi80 = await Cover_ZapIn_General_V1izKLkwr._getCoverDetails.call(addressUGdOIJP, {from: accounts[3]});
		const boolhMEUKyg = await Cover_ZapIn_General_V1izKLkwr.isOwner.call({from: accounts[2]});
		const 
W534bT = await Cover_ZapIn_General_V1izKLkwr.ZapIn.call(addressLQDTFdy, addressBGdQerS, addressD8tFAm8, addresssNWHCa, uint74XUPY, addressvmYuWeX, addresseJMsZnh, bytebAQ9WtB, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintluZe03 = BigInt("62")
		const Cover_ZapIn_General_V1izKLkwr = await Cover_ZapIn_General_V1.new(uintluZe03, {from: accounts[4]});
		const bytelBce7UO = "0x160e160b"
		const addresssKRAmbA = accounts[4]
		const addressnt0D9QS = accounts[4]
		const uintEmLde4b = BigInt("577")
		const addressRjfu831 = accounts[2]
		const addresspV9zAqi = accounts[4]
		const addresspcp5AeE = accounts[5]
		const addressERcEOOj = accounts[0]
		const addressUp4jcSa = accounts[2]
		await Cover_ZapIn_General_V1izKLkwr.renounceOwnership.call({from: accounts[4]});
		const 
W534bT = await Cover_ZapIn_General_V1izKLkwr.ZapIn.call(addressERcEOOj, addresspcp5AeE, addresspV9zAqi, addressRjfu831, uintEmLde4b, addressnt0D9QS, addresssKRAmbA, bytelBce7UO, {from: accounts[0]});
		const addressoutRfpo = await Cover_ZapIn_General_V1izKLkwr.inCaseTokengetsStuck.call(addressUp4jcSa, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintqAjWNVV = BigInt("62")
		const Cover_ZapIn_General_V1izKLkwr = await Cover_ZapIn_General_V1.new(uintqAjWNVV, {from: accounts[4]});
		const addressKAU18EN = accounts[0]
		const bytes7cYT5l = "0x160e160b"
		const addressYGNxGt = accounts[4]
		const addressuhSpwYH = accounts[4]
		const uintaxbz0bc = BigInt("577")
		const addressYbdrWjU = accounts[2]
		const addressPpHLC8c = accounts[5]
		const addressR29ieo = accounts[4]
		const addressIC0qZQ4 = accounts[0]
		const addressSCld6n = await Cover_ZapIn_General_V1izKLkwr.inCaseTokengetsStuck.call(addressKAU18EN, {from: accounts[4]});
		const 
W534bT = await Cover_ZapIn_General_V1izKLkwr.ZapIn.call(addressIC0qZQ4, addressR29ieo, addressPpHLC8c, addressYbdrWjU, uintaxbz0bc, addressuhSpwYH, addressYGNxGt, bytes7cYT5l, {from: accounts[0]});
	});
})