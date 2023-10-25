const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintWRrB0EX = BigInt("1292")
		const stringoSpwgRu = "xGNanRiI2Kj9n2LrOZ54MFeQNY9jze7LlzNuc1iwvgjQz412LOm0AGGTpB07"
		const stringNZxa9pS = "XP"
		const MARVELCOINIUMAeCA = await MARVELCOIN.new(uintWRrB0EX, stringoSpwgRu, stringNZxa9pS, {from: accounts[1]});
		const uinttwtuC5 = BigInt("1401")
		const addressbU9pn8 = accounts[0]
		const uintShtuCLh = BigInt("1823")
		const addressT3DuZpG = "0x0000000000000000000000000000000000000001"
		const byter1pSZsS = "0x0716021b16"
		const uintUeQC5ea = BigInt("400")
		const addressshiONBd = accounts[3]
		const uintTikYhUn = BigInt("395")
		const addressgUG2xrz = accounts[2]
		const addressPgb7RZ5 = accounts[2]
//		const boolQjt7Gmu = await MARVELCOINIUMAeCA.transfer.call(addressbU9pn8, uinttwtuC5, {from: accounts[3]});
//		const boolX5U6twu = await MARVELCOINIUMAeCA.burnFrom.call(addressT3DuZpG, uintShtuCLh, {from: accounts[0]});
//		const boolcrU4juf = await MARVELCOINIUMAeCA.approveAndCall.call(addressshiONBd, uintUeQC5ea, byter1pSZsS, {from: accounts[5]});
//		const booli0vCNBO = await MARVELCOINIUMAeCA.transferFrom.call(addressPgb7RZ5, addressgUG2xrz, uintTikYhUn, {from: accounts[4]});

		await expect(MARVELCOINIUMAeCA.transfer.call(addressbU9pn8, uinttwtuC5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintV1T1HAd = BigInt("4")
		const stringyorZVWf = "g7l7depuEWqsdolSKPES4ACAwzFqEy74tnmO2Adg0PNJy9SwQPv6R2658vRoAOb"
		const stringO6u8s0x = "afR"
		const MARVELCOINevNWTue = await MARVELCOIN.new(uintV1T1HAd, stringyorZVWf, stringO6u8s0x, {from: accounts[3]});
		const uint0vJy9z = BigInt("186")
		const addressY13G6eH = accounts[2]
		const uintAvtw68b = BigInt("1106")
		const addressHvhHZeq = accounts[3]
		const uinttJg2v6 = BigInt("1853")
		const uintD8ckWaI = BigInt("1681")
		const uintIvgTrYc = BigInt("2007")
		const addressLv7ZfVR = accounts[0]
		const boolCvQjend = await MARVELCOINevNWTue.approve.call(addressY13G6eH, uint0vJy9z, {from: accounts[4]});
		const boolJIr1xc = await MARVELCOINevNWTue.approve.call(addressHvhHZeq, uintAvtw68b, {from: accounts[3]});
//		const boolMUKnQsf = await MARVELCOINevNWTue.burn.call(uinttJg2v6, {from: accounts[0]});
//		const boolG2dl2SK = await MARVELCOINevNWTue.burn.call(uintD8ckWaI, {from: accounts[3]});
//		const boolTygpDvP = await MARVELCOINevNWTue.transfer.call(addressLv7ZfVR, uintIvgTrYc, {from: accounts[3]});

		assert.equal(boolCvQjend, true)
		assert.equal(boolJIr1xc, true)
		await expect(MARVELCOINevNWTue.burn.call(uinttJg2v6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintUH8fLse = BigInt("1285")
		const stringH4ZCEJv = "dyd47yqhWgEllMolM53k9r5QWwpKBY"
		const stringAmmYD33 = "fg08PlZt8xvIXdc3Y4zh9Rc7tzgLMk4cHvXnNhHv5mMurdJfPhMPvnJj1rssp4uivUmaMDrfe9uiS9DWyejgw"
		const MARVELCOINZifBjYN = await MARVELCOIN.new(uintUH8fLse, stringH4ZCEJv, stringAmmYD33, {from: accounts[1]});
		const uintuPt7w8w = BigInt("814")
		const address9w7cVb = accounts[5]
		const addressYf5qIBy = accounts[4]
		const bytekyXck7E = "0x0d0e151a1810121d070a081b181f041b"
		const uintdjzde01 = BigInt("324")
		const addressdvVC3GL = accounts[3]
		const uint0khxDY = BigInt("69")
		const addresspYgdGCB = accounts[5]
		const uintXlicFpf = BigInt("1259")
		const addressl1F9ZSN = accounts[2]
		const byteHk5i1BE = "0x170a16031308030c191d1a1c0e131a010c09100e0d061d06020b1e06091d061d"
		const uintAXFBfgg = BigInt("1672")
		const addressxSi0Lly = accounts[0]
//		const boolzGGtvtU = await MARVELCOINZifBjYN.transferFrom.call(addressYf5qIBy, address9w7cVb, uintuPt7w8w, {from: accounts[0]});
//		const booluFIUmk7 = await MARVELCOINZifBjYN.approveAndCall.call(addressdvVC3GL, uintdjzde01, bytekyXck7E, {from: accounts[0]});
//		const boolJzEtmBq = await MARVELCOINZifBjYN.burnFrom.call(addresspYgdGCB, uint0khxDY, {from: accounts[2]});
//		const boolvQoD2Sr = await MARVELCOINZifBjYN.approve.call(addressl1F9ZSN, uintXlicFpf, {from: accounts[3]});
//		const booljh6PLX = await MARVELCOINZifBjYN.approveAndCall.call(addressxSi0Lly, uintAXFBfgg, byteHk5i1BE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MARVELCOINZifBjYN.transferFrom.call(addressYf5qIBy, address9w7cVb, uintuPt7w8w, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintXut22r1 = BigInt("795")
		const stringVNsArIG = "LCsviiJ3Sg4dzMYS6WXRtPZBYu7Qlwq03f4E5uM5Jwr5gjH7UGE1zdJMuepn"
		const stringlwEm0eJ = "E5QLXtwCXmwFd5w9Ls4xLLEzQfCQP36Ia9HQbHh9zGuJbRMHOnVuebLD7qU6r2x6I6rj9igegRP9"
		const MARVELCOINagc8toS = await MARVELCOIN.new(uintXut22r1, stringVNsArIG, stringlwEm0eJ, {from: accounts[3]});
		const byteQ0arhZg = "0x200307140303150c06201a0d1807090702101a09091809171b071f1211"
		const uintCqsU0MS = BigInt("179")
		const addressC5oGD5K = accounts[0]
		const uintD93ESID = BigInt("1609")
//		const boolOvMlo2G = await MARVELCOINagc8toS.approveAndCall.call(addressC5oGD5K, uintCqsU0MS, byteQ0arhZg, {from: accounts[1]});
//		const boolARSEeC = await MARVELCOINagc8toS.burn.call(uintD93ESID, {from: accounts[2]});

		await expect(MARVELCOINagc8toS.approveAndCall.call(addressC5oGD5K, uintCqsU0MS, byteQ0arhZg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintedhOomv = BigInt("1895")
		const stringpkSpXiX = "dkc6s7yvh1TDasyKcD5zbvKiFYg5mHAS1Tt"
		const stringNHjldbE = "AkuFNe1jHyI4m6G0OTKjr8fk272GwU5FVhY5ybguzssdKLv4kJJk8cQff"
		const MARVELCOINouTwbIo = await MARVELCOIN.new(uintedhOomv, stringpkSpXiX, stringNHjldbE, {from: accounts[1]});
		const uinttlugQqS = BigInt("307")
		const addresszigRv1e = accounts[0]
		const uintKRSPVsd = BigInt("971")
		const addressXykTZid = accounts[4]
		const uintqRV7APh = BigInt("17")
		const addressvfN5Bmq = accounts[3]
		const uintOGGE56T = BigInt("1873")
		const uintCmSXmjw = BigInt("29")
		const addressykAp3Kq = accounts[3]
		const uintuYGYVFf = BigInt("1553")
		const addressN57tiAr = accounts[0]
		const addressKB6oC9d = accounts[1]
		const boolzETTXco = await MARVELCOINouTwbIo.approve.call(addresszigRv1e, uinttlugQqS, {from: accounts[2]});
		const boolYpnmpxD = await MARVELCOINouTwbIo.transfer.call(addressXykTZid, uintKRSPVsd, {from: accounts[1]});
		const boolbNDHSGT = await MARVELCOINouTwbIo.approve.call(addressvfN5Bmq, uintqRV7APh, {from: accounts[0]});
		const boolg9zv508 = await MARVELCOINouTwbIo.burn.call(uintOGGE56T, {from: accounts[1]});
//		const bool7Zf4d9 = await MARVELCOINouTwbIo.transfer.call(addressykAp3Kq, uintCmSXmjw, {from: "0x0000000000000000000000000000000000000001"});
//		const boolMJosmBe = await MARVELCOINouTwbIo.transferFrom.call(addressKB6oC9d, addressN57tiAr, uintuYGYVFf, {from: accounts[1]});

		assert.equal(boolYpnmpxD, true)
		assert.equal(boolbNDHSGT, true)
		assert.equal(boolg9zv508, true)
		assert.equal(boolzETTXco, true)
		await expect(MARVELCOINouTwbIo.transfer.call(addressykAp3Kq, uintCmSXmjw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintmfX7vhB = BigInt("1045")
		const stringvoCSbuI = "TfGsIkLySfpkW4J8X2zWSUqkEhZWsAdABHkWBgSaENHbsezoO8awuL5EcB7iDyIoQlUmuSc4kxt"
		const stringIBgijgS = "9dhUd8LSPMVQxLYftOzSAOqISj2xYKdFL1xh3DwjButNqVC58kHAc8PBkWbBpI6hw"
		const MARVELCOINI92G10 = await MARVELCOIN.new(uintmfX7vhB, stringvoCSbuI, stringIBgijgS, {from: accounts[1]});
		const uintRachZCc = BigInt("1672")
		const addressu3ja9O = "0x0000000000000000000000000000000000000001"
		const bytes1lKd74 = "0x15001e1e1e12150d181301070c"
		const uintXhCYyY8 = BigInt("1189")
		const addressrRJhRiz = accounts[3]
		const uintG7ZbQGe = BigInt("1514")
		const addresscPDhchL = accounts[5]
//		const boolctrzMrd = await MARVELCOINI92G10.burnFrom.call(addressu3ja9O, uintRachZCc, {from: accounts[2]});
//		const boolQW8sw8 = await MARVELCOINI92G10.approveAndCall.call(addressrRJhRiz, uintXhCYyY8, bytes1lKd74, {from: accounts[2]});
//		const boolJBinGid = await MARVELCOINI92G10.approve.call(addresscPDhchL, uintG7ZbQGe, {from: accounts[2]});

		await expect(MARVELCOINI92G10.burnFrom.call(addressu3ja9O, uintRachZCc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintlP2ZQFI = BigInt("1435")
		const stringbM2ySo1 = "N1Ex12HwZOexTU"
		const stringQPnC4em = "ARvwSVyLBIv8GQz1CX3dVmDt8dp8XhxrSRwkA2yemuE0oDY4fsSOoVw4j85zgNRMgFmDB6y9xqTKTWsrBEkfVtCd3e"
		const MARVELCOINnz4sxI9 = await MARVELCOIN.new(uintlP2ZQFI, stringbM2ySo1, stringQPnC4em, {from: "0x0000000000000000000000000000000000000001"});
		const byteL7TOUeK = "0x0e0f0f111b"
		const uintOnzlN5Z = BigInt("1692")
		const addressDxgUzhP = accounts[2]
		const uintx073nIj = BigInt("829")
		const addressw7jnOLB = accounts[3]
		const addressKMPzoYy = accounts[0]
		const uintt6OAghW = BigInt("794")
		const addresswz5fPqR = accounts[2]
		const uintG5KimlP = BigInt("1108")
		const addressJVyfJuj = accounts[5]
		const uintMSr3RN = BigInt("863")
		const addressLjoHRMp = accounts[1]
		const addresszsYIj7g = accounts[4]
		const boolgyBVoWS = await MARVELCOINnz4sxI9.approveAndCall.call(addressDxgUzhP, uintOnzlN5Z, byteL7TOUeK, {from: accounts[1]});
		const boolCFE6XPc = await MARVELCOINnz4sxI9.transferFrom.call(addressKMPzoYy, addressw7jnOLB, uintx073nIj, {from: accounts[2]});
		const boolKgn5gxb = await MARVELCOINnz4sxI9.approve.call(addresswz5fPqR, uintt6OAghW, {from: accounts[3]});
		const boolI2kMf0J = await MARVELCOINnz4sxI9.transfer.call(addressJVyfJuj, uintG5KimlP, {from: accounts[2]});
		const boolU8uoDX = await MARVELCOINnz4sxI9.transferFrom.call(addresszsYIj7g, addressLjoHRMp, uintMSr3RN, {from: accounts[0]});
	});

	it('test for MARVELCOIN', async () => {
		const uintS6MNdTg = BigInt("1366")
		const stringdS8sZwu = "RNw1bibbvKzwBnPL"
		const stringMlWjvXu = "EAn2h2aP9qc3GJiBxd3wyLDXxnkrcNTkS8G4KAIVmxiz6D4ahcTUZHWNVTOF"
		const MARVELCOINXBvYdSJ = await MARVELCOIN.new(uintS6MNdTg, stringdS8sZwu, stringMlWjvXu, {from: accounts[1]});
		const uintgrOjkVH = BigInt("1660")
		const uintXGsEDbo = BigInt("78")
		const addressXzpRPon = accounts[1]
		const bytePfD3EeR = "0x0209"
		const uintVqed8EE = BigInt("246")
		const addressJCkcQq = accounts[0]
		const bytewalOF4d = "0x16061c1d1f050807190310040a1a1d0e151e1b0f060b0106151401121b"
		const uintI9VcpPk = BigInt("201")
		const addressBQxvRCh = "0x0000000000000000000000000000000000000001"
		const uinte75J6t = BigInt("895")
		const address0RrK2n = accounts[0]
		const uintFnO4OCm = BigInt("1139")
		const boolKZCgbSA = await MARVELCOINXBvYdSJ.burn.call(uintgrOjkVH, {from: accounts[1]});
//		const boolVblTlN3 = await MARVELCOINXBvYdSJ.burnFrom.call(addressXzpRPon, uintXGsEDbo, {from: accounts[4]});
//		const boolJuFHaKV = await MARVELCOINXBvYdSJ.approveAndCall.call(addressJCkcQq, uintVqed8EE, bytePfD3EeR, {from: accounts[5]});
//		const booldMN6q1N = await MARVELCOINXBvYdSJ.approveAndCall.call(addressBQxvRCh, uintI9VcpPk, bytewalOF4d, {from: accounts[5]});
//		const boolTs8q0Ug = await MARVELCOINXBvYdSJ.approve.call(address0RrK2n, uinte75J6t, {from: accounts[0]});
//		const boolqvteHCU = await MARVELCOINXBvYdSJ.burn.call(uintFnO4OCm, {from: accounts[0]});

		assert.equal(boolKZCgbSA, true)
		await expect(MARVELCOINXBvYdSJ.burnFrom.call(addressXzpRPon, uintXGsEDbo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})