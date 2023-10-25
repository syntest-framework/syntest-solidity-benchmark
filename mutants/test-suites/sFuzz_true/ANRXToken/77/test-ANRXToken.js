const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintPNrbr2f = BigInt("439")
		const stringQIT3jXj = "StXAG9Y18cDiQKbwkuEVoSQLZxq3qLzgTRbEI5jOR5QgBHoXmmuNvtgMrL8nzvN2HplKWjcnzmh7AJUe"
		const stringyHEK9tL = "o8LtQRDNskCPBlLANDks7e2ubnwwh8E9pIWhICFHU51kTJNu0LiE"
		const uinty7aXaT2 = BigInt("1902")
		const ANRXTokengURygoN = await ANRXToken.new(uintPNrbr2f, stringQIT3jXj, stringyHEK9tL, uinty7aXaT2, {from: accounts[4]});
		const addressvOJhazI = accounts[1]
		const addressFELgAXE = accounts[4]
		const uintqm8qbBX = BigInt("0")
		const addressWP5H4r = accounts[5]
		const addressrAKh0rO = accounts[3]
		const addressGYw21PX = "0x0000000000000000000000000000000000000001"
		const addressNd7XjBS = "0x0000000000000000000000000000000000000001"
		const uintL2k76vh = await ANRXTokengURygoN.balanceOf.call(addressvOJhazI, {from: accounts[5]});
		const uintjaMFTN9 = await ANRXTokengURygoN.balanceOf.call(addressFELgAXE, {from: accounts[4]});
		const boolR1xQvNm = await ANRXTokengURygoN.transferFrom.call(addressrAKh0rO, addressWP5H4r, uintqm8qbBX, {from: accounts[3]});
		const uintL1geXXm = await ANRXTokengURygoN.totalSupply.call({from: accounts[2]});
		const uintbk8zimt = await ANRXTokengURygoN.allowance.call(addressNd7XjBS, addressGYw21PX, {from: accounts[2]});

		assert.equal(boolR1xQvNm, true)
		assert.equal(uintL1geXXm, BigInt("439"))
		assert.equal(uintL2k76vh, BigInt("0"))
		assert.equal(uintbk8zimt, BigInt("0"))
		assert.equal(uintjaMFTN9, BigInt("439"))
	});

	it('test for ANRXToken', async () => {
		const uintVpeL0ml = BigInt("465")
		const stringq1e7juo = "kOFhIaYbc6caH2Ew9O3eqjJs9GFPlBUnxfiOxlJSLeWChq1maDt7hTYXVwi1y7DC9W9pdXbptpnkrX3iMLD20Nv6A86oPs"
		const stringIzmSE8B = "ylU97igwDaGnR2qqsGsKRVcZFLfvy0GcQokq9fN2WaRFhvExtTVXFZksAQgMFbAc"
		const uintQ9UeRZ = BigInt("1093")
		const ANRXTokenggtnMn = await ANRXToken.new(uintVpeL0ml, stringq1e7juo, stringIzmSE8B, uintQ9UeRZ, {from: accounts[2]});
		const uintaPgbAXL = BigInt("1039")
		const addressKcwS9dI = accounts[3]
		const uintaGa0cq = BigInt("1776")
		const addressZuBHLOC = accounts[2]
		const addressURRinit = accounts[0]
//		const uintKuZ3BNp = await ANRXTokenggtnMn.issue.call(uintaPgbAXL, {from: accounts[1]});
//		const addresslU0YsV9 = await ANRXTokenggtnMn.deprecate.call(addressKcwS9dI, {from: accounts[2]});
//		const boolvujTPAK = await ANRXTokenggtnMn.transferFrom.call(addressURRinit, addressZuBHLOC, uintaGa0cq, {from: accounts[4]});

		await expect(ANRXTokenggtnMn.issue.call(uintaPgbAXL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintsIsC8nP = BigInt("1787")
		const stringeJn8jfE = "qcO0a9SuhIsCPhGVzRsDiremJhiVlG7OgsxjiX2CjooRzYpvXhrjplFrFE"
		const stringP7TWQVp = "zUpn2tkFjJEDhXUBLUqeb9Az4kAop7ut22VShUDYzvPoZlIRn2qmP9PwkAqOjUR1j5ODGh19H4l8ISHIgzb"
		const uintE9h5v0f = BigInt("1411")
		const ANRXTokenIc129dN = await ANRXToken.new(uintsIsC8nP, stringeJn8jfE, stringP7TWQVp, uintE9h5v0f, {from: accounts[1]});
		const addressj38Mw8c = accounts[0]
		const uintx8wW395 = BigInt("542")
		const addresskQ7hqxg = accounts[2]
		const uintHABYA8P = BigInt("1043")
		const uintfozsCAq = await ANRXTokenIc129dN.balanceOf.call(addressj38Mw8c, {from: accounts[2]});
		const boolLTQsOk = await ANRXTokenIc129dN.transfer.call(addresskQ7hqxg, uintx8wW395, {from: accounts[1]});
		const uintpMssbO1 = await ANRXTokenIc129dN.totalSupply.call({from: accounts[4]});
		const uintxYVKESF = await ANRXTokenIc129dN.redeem.call(uintHABYA8P, {from: accounts[1]});

		assert.equal(boolLTQsOk, true)
		assert.equal(uintfozsCAq, BigInt("0"))
		assert.equal(uintpMssbO1, BigInt("1787"))
	});

	it('test for ANRXToken', async () => {
		const uintNy2ZBG = BigInt("1105")
		const stringD0JbGbS = "xOwUHfnd8WOBJbxA2NUzzdJFOJ782WGthvYgYbcdXNVDNxTk9eRFSo4YCHYV"
		const stringL0ACDzj = "wzevx9THCODeEBaexG5Ml23HH9jCCLqalBDMsbLLTrUlepInNzytVSeBcw8h3CdAx7UE8WhyIYT5oYfCVX4nA8oN"
		const uintDOOuG2 = BigInt("1872")
		const ANRXToken1gFEx1 = await ANRXToken.new(uintNy2ZBG, stringD0JbGbS, stringL0ACDzj, uintDOOuG2, {from: accounts[0]});
		const addressSUWEQIV = "0x0000000000000000000000000000000000000001"
		const addressvetjuc = accounts[4]
		const uintpYFK59C = BigInt("1543")
		const addressDdNHYJr = accounts[1]
		const addressWnTCUp4 = accounts[1]
		const addressP7iCzT = accounts[4]
		const uintqxoCgkR = await ANRXToken1gFEx1.allowance.call(addressvetjuc, addressSUWEQIV, {from: accounts[4]});
		const boolaoPPla = await ANRXToken1gFEx1.approve.call(addressDdNHYJr, uintpYFK59C, {from: accounts[4]});
		const uintANlo6P8 = await ANRXToken1gFEx1.allowance.call(addressP7iCzT, addressWnTCUp4, {from: accounts[5]});

		assert.equal(boolaoPPla, true)
		assert.equal(uintANlo6P8, BigInt("0"))
		assert.equal(uintqxoCgkR, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintW1l0v3 = BigInt("566")
		const stringhQKElhm = "UV29SmstVLqFJp"
		const stringSmHM2NS = "LKMRxkNNKEsHSEJ4YCUOREeSe12uH111V79kbwIlBksfLyPXcR05OH6OUyl2SAQB4g1lE3B28zLCr"
		const uintGL9E2k = BigInt("400")
		const ANRXTokenJMfcDbo = await ANRXToken.new(uintW1l0v3, stringhQKElhm, stringSmHM2NS, uintGL9E2k, {from: accounts[4]});
		const uintBZwNBR = BigInt("432")
		const addressBy9m6Fb = accounts[2]
		const addressq8kVa1l = accounts[3]
		const uintvG2fkEX = BigInt("224")
		const addressWBzsm6g = accounts[5]
		const addressGyjHE92 = accounts[2]
		const addressFXrGSEo = accounts[2]
		const boolVxjaf2N = await ANRXTokenJMfcDbo.approve.call(addressBy9m6Fb, uintBZwNBR, {from: accounts[5]});
		const addressX9jpeP = await ANRXTokenJMfcDbo.deprecate.call(addressq8kVa1l, {from: accounts[4]});
//		const boolpc6tL7B = await ANRXTokenJMfcDbo.transferFrom.call(addressGyjHE92, addressWBzsm6g, uintvG2fkEX, {from: accounts[4]});
//		const addressMm9VjG = await ANRXTokenJMfcDbo.deprecate.call(addressFXrGSEo, {from: accounts[0]});

		assert.equal(boolVxjaf2N, true)
		await expect(ANRXTokenJMfcDbo.transferFrom.call(addressGyjHE92, addressWBzsm6g, uintvG2fkEX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintACYJEuf = BigInt("695")
		const stringBPsFNAD = "eiMjGcRjtQEgu9hIosiOEvvz2rEkqTHTZxxUgRtVcO4oGlQFHC2yDf4PGI2dtAbyJEsPQpnpUg9HFEopER7sxH1orPzT"
		const stringeRRwKB = "hjWACPWNVsLzxoGMIXnfpNoTgZpR3SEiVDQLaGiB1D9XR"
		const uintBEUzaB7 = BigInt("1249")
		const ANRXTokenBbE86F = await ANRXToken.new(uintACYJEuf, stringBPsFNAD, stringeRRwKB, uintBEUzaB7, {from: accounts[3]});
		const uintnCEgQ28 = BigInt("734")
		const addressfzy3f1o = accounts[2]
		const uintVi6Y20u = BigInt("607")
		const uintAmvaM63 = BigInt("771")
		const uintjyNDWv = BigInt("854")
		const addressEvB0CQ5 = accounts[1]
		const uintpFqtcsb = await ANRXTokenBbE86F.issue.call(uintnCEgQ28, {from: accounts[3]});
//		const addressl2l4vQr = await ANRXTokenBbE86F.deprecate.call(addressfzy3f1o, {from: accounts[1]});
//		const uintpPEneDT = await ANRXTokenBbE86F.issue.call(uintVi6Y20u, {from: accounts[1]});
//		const uintGi7Gtgv = await ANRXTokenBbE86F.setParams.call(uintjyNDWv, uintAmvaM63, {from: accounts[2]});
//		const addressAPtix2J = await ANRXTokenBbE86F.deprecate.call(addressEvB0CQ5, {from: accounts[2]});

		await expect(ANRXTokenBbE86F.deprecate.call(addressfzy3f1o, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintTqmhxAR = BigInt("1703")
		const stringK0IvLpc = "WAf4oaJxTcUlhxFeOiybmo3ESIlFvGek0gku647"
		const stringd4w51x0 = "9LkM"
		const uintoY4eOkP = BigInt("1504")
		const ANRXTokenpqfB0cf = await ANRXToken.new(uintTqmhxAR, stringK0IvLpc, stringd4w51x0, uintoY4eOkP, {from: accounts[3]});
		const uintYSdFv9D = BigInt("1625")
		const uintfEbo07T = BigInt("895")
		const addresswCKICBd = accounts[0]
		const addressRUr9Pzs = "0x0000000000000000000000000000000000000001"
//		const uintiIDy93 = await ANRXTokenpqfB0cf.setParams.call(uintfEbo07T, uintYSdFv9D, {from: accounts[3]});
//		const uintD2cad5X = await ANRXTokenpqfB0cf.balanceOf.call(addresswCKICBd, {from: accounts[2]});
//		const addressdgZmNVI = await ANRXTokenpqfB0cf.deprecate.call(addressRUr9Pzs, {from: accounts[5]});

		await expect(ANRXTokenpqfB0cf.setParams.call(uintfEbo07T, uintYSdFv9D, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintX89XG0 = BigInt("784")
		const stringLmjT8T = "hJsE0w3cHP"
		const stringR9y98o9 = "3nUD61ndjpuYn6MDlbXbHhmBkAfrc4SqKlG5XkXTSwLcitEwClYJDXjKvXENm"
		const uintXv5w5Z = BigInt("1799")
		const ANRXTokenm7XZMjW = await ANRXToken.new(uintX89XG0, stringLmjT8T, stringR9y98o9, uintXv5w5Z, {from: "0x0000000000000000000000000000000000000001"});
		const uintcPAVBbc = BigInt("393")
		const uinto2fT2Ok = BigInt("991")
		const uintUZvRfH = BigInt("800")
		const addressJlFgZEY = accounts[0]
		const uintyiKcvDU = await ANRXTokenm7XZMjW.issue.call(uintcPAVBbc, {from: accounts[0]});
		const uintT1O0IzH = await ANRXTokenm7XZMjW.totalSupply.call({from: accounts[3]});
		const uintdje7Z1 = await ANRXTokenm7XZMjW.issue.call(uinto2fT2Ok, {from: accounts[4]});
		const booleZdI1vr = await ANRXTokenm7XZMjW.approve.call(addressJlFgZEY, uintUZvRfH, {from: accounts[4]});
	});
})