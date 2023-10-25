const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintm71G7VE = BigInt("1394")
		const stringZaL3dqu = "t11E9kntaQqEil7icEsKpTj184ccPyUdNzOMZSxKZuh7cvPTkeJ3czzRxio37H7IOZB1yLmk5"
		const stringk1D6oDl = "gTeOwydwaAESmaE9ltgnz82ueyeKsfDsCEN7mkrRbyBD6juYoasGdcU5alwunEkp4adgopXXZt6"
		const INSgmOSpHo = await INS.new(uintm71G7VE, stringZaL3dqu, stringk1D6oDl, {from: accounts[2]});
		const uintUR9jBLC = BigInt("2025")
		const addressgwha2iH = accounts[0]
		const addresswBzFW2P = accounts[2]
		const byte2EMDQs = "0x170e0a0e1516110e17081c02011a12061708"
		const uintSxDoikR = BigInt("1700")
		const addressilacfdx = accounts[4]
		const uintlHx2CRU = BigInt("1390")
		const addressA42J3tL = accounts[0]
		const boolhRTOhgD = await INSgmOSpHo.transferFrom.call(addresswBzFW2P, addressgwha2iH, uintUR9jBLC, {from: accounts[0]});
		const boolFFZFy3 = await INSgmOSpHo.approveAndCall.call(addressilacfdx, uintSxDoikR, byte2EMDQs, {from: accounts[4]});
		const boolnIe1Rx1 = await INSgmOSpHo.burnFrom.call(addressA42J3tL, uintlHx2CRU, {from: accounts[3]});

		await expect(INSgmOSpHo.transferFrom.call(addresswBzFW2P, addressgwha2iH, uintUR9jBLC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintPpAn9Wx = BigInt("1215")
		const stringWtfCShp = "hs4thXlj4l7pGLwli2jSjRzr4HSzBn4MXxrPMYNKAwSSZ7T7NroOtivwpCUq3LZxAbqrGP5RYE4Myq3BusXdC7Uke3XK"
		const stringv8pTlvN = "Li5GtHjXaYGCRI5GUto4reairh3LjVETQdArXWC6FEs3tofTtgsCFweNX3StSshPzI7QS6UqOJH"
		const INStQeUMbv = await INS.new(uintPpAn9Wx, stringWtfCShp, stringv8pTlvN, {from: accounts[2]});
		const uinthGqauPz = BigInt("1512")
		const uinta4qZf3 = BigInt("362")
		const addressPJlDxMr = accounts[3]
		const uintdU0rOs = BigInt("328")
		const addressJYjIia3 = accounts[0]
		const bytebahgzDo = "0x1a0105100f1b16051f"
		const uintmPpUf1N = BigInt("2026")
		const addressC9JiMy = accounts[2]
		const boolg1gFky2 = await INStQeUMbv.burn.call(uinthGqauPz, {from: accounts[4]});
		const boolkdQGkhO = await INStQeUMbv.approve.call(addressPJlDxMr, uinta4qZf3, {from: "0x0000000000000000000000000000000000000001"});
		const boolDSF7k8X = await INStQeUMbv.approve.call(addressJYjIia3, uintdU0rOs, {from: accounts[1]});
		const boolCkczD3H = await INStQeUMbv.approveAndCall.call(addressC9JiMy, uintmPpUf1N, bytebahgzDo, {from: accounts[2]});

		await expect(INStQeUMbv.burn.call(uinthGqauPz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintwo5hyKR = BigInt("1811")
		const stringJjEm827 = "kK3Gj8pehmF2iqSfZPpsG7UK9CSbBBhILGlgWBoF75Cs9NcM4mprkHIkEFYD8kj9ySmsyu6pieQU9noJEWmJYvFPTMpgLO"
		const stringukNtOJd = "WsN2TuVt7l4JIiRUdqVjlV8T4Vpb2mfwFXI5AWanXpjzqYwTu51tT1qbtETTnxBvHlo"
		const INSezaEOB2 = await INS.new(uintwo5hyKR, stringJjEm827, stringukNtOJd, {from: accounts[4]});
		const uintSMzbnZF = BigInt("2011")
		const addressnBqvctS = accounts[1]
		const byteJnXOqom = "0x17151a042015"
		const uintruiXIUq = BigInt("1629")
		const addressg5d4u8n = accounts[1]
		const uint0o91Xl = BigInt("1216")
		const addressQy0aZp = accounts[0]
		const addressDcrO25y = accounts[0]
		const uintLTWDmL = BigInt("1121")
		const addressLtFa7sD = "0x0000000000000000000000000000000000000001"
		const addressALZQxij = accounts[3]
		const uinttA9Pz8E = BigInt("1688")
		const addressC1oXn9o = accounts[1]
		const boolXGwcBSs = await INSezaEOB2.approve.call(addressnBqvctS, uintSMzbnZF, {from: accounts[0]});
		const bool8qQeme = await INSezaEOB2.approveAndCall.call(addressg5d4u8n, uintruiXIUq, byteJnXOqom, {from: accounts[5]});
		const booltCNREv = await INSezaEOB2.transferFrom.call(addressDcrO25y, addressQy0aZp, uint0o91Xl, {from: accounts[1]});
		const boolebZreuc = await INSezaEOB2.transferFrom.call(addressALZQxij, addressLtFa7sD, uintLTWDmL, {from: accounts[4]});
		const boolCuEVHvo = await INSezaEOB2.transfer.call(addressC1oXn9o, uinttA9Pz8E, {from: accounts[0]});

		assert.equal(boolXGwcBSs, true)
		await expect(INSezaEOB2.approveAndCall.call(addressg5d4u8n, uintruiXIUq, byteJnXOqom, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintzsc0jB = BigInt("276")
		const stringvzD4hoz = "gxOvfc0lVKREob3"
		const stringlVuvCux = "7aRS2pkH5E2ADXpqZ1nucNohND7FA8iX3QQqe6gbdzD9fKhAYMVHLi2p4T2VZgSrKrrCW4x93ItlEtPWSr22m"
		const INSmj8szCj = await INS.new(uintzsc0jB, stringvzD4hoz, stringlVuvCux, {from: accounts[0]});
		const uintfonvXlU = BigInt("1472")
		const addressv4HJb7 = accounts[5]
		const uintbsEwb05 = BigInt("493")
		const uintGupvMm1 = BigInt("1603")
		const bytez7AkcET = "0x1717"
		const uintkdCngRb = BigInt("1129")
		const addressyWJvC5C = "0x0000000000000000000000000000000000000001"
		const byteNDKfrJK = "0x0213"
		const uintTekWhLp = BigInt("1657")
		const addresshXkRO0B = accounts[4]
		const boolklSryvq = await INSmj8szCj.transfer.call(addressv4HJb7, uintfonvXlU, {from: accounts[0]});
		const bool3Ia12J = await INSmj8szCj.burn.call(uintbsEwb05, {from: accounts[2]});
		const boollc8UJBR = await INSmj8szCj.burn.call(uintGupvMm1, {from: accounts[1]});
		const boolqAzNG6a = await INSmj8szCj.approveAndCall.call(addressyWJvC5C, uintkdCngRb, bytez7AkcET, {from: accounts[2]});
		const bool7HjfZw = await INSmj8szCj.approveAndCall.call(addresshXkRO0B, uintTekWhLp, byteNDKfrJK, {from: accounts[0]});

		assert.equal(boolklSryvq, true)
		await expect(INSmj8szCj.burn.call(uintbsEwb05, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintFRXljbF = BigInt("938")
		const stringl8wfZZ = "skBi6gJVpJ"
		const stringD3X1Xp2 = "Wdj2Y8MCCiGxR5DCLetdxagb93bAiWSUsMy6P36RrHBOIAKvOrig4NGESfO36x5ALSG6V41QD1Q7maa"
		const INShqSHMBv = await INS.new(uintFRXljbF, stringl8wfZZ, stringD3X1Xp2, {from: accounts[2]});
		const uintmKPPeLI = BigInt("498")
		const addressPOJid73 = accounts[2]
		const uintMKd9wgs = BigInt("805")
		const addressLjbo95Q = accounts[1]
		const uintMb99TVg = BigInt("878")
		const uintQtbXgg = BigInt("1727")
		const addressBtrGTWs = accounts[3]
		const boolWiqKqre = await INShqSHMBv.burnFrom.call(addressPOJid73, uintmKPPeLI, {from: accounts[2]});
		const boolSB0yxXH = await INShqSHMBv.transfer.call(addressLjbo95Q, uintMKd9wgs, {from: accounts[4]});
		const boolEaxqNyw = await INShqSHMBv.burn.call(uintMb99TVg, {from: accounts[4]});
		const boolfkLjDvC = await INShqSHMBv.approve.call(addressBtrGTWs, uintQtbXgg, {from: accounts[5]});

		await expect(INShqSHMBv.burnFrom.call(addressPOJid73, uintmKPPeLI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintBX5mwc = BigInt("1394")
		const stringZaL3dqu = "t11E9kntaQqEil7icEsKpTj184ccPyUdNzOMZSxKZuh7cvPTkeJ3czzRxio37H7IOZB1yLmk5"
		const stringk1D6oDl = "gTeOwydwaAESmaE9ltgnz82ueyeKsfDsCEN7mkrRbyBD6juYoasGdcU5alwunEkp4adgopXXZt6"
		const INSgmOSpHo = await INS.new(uintBX5mwc, stringZaL3dqu, stringk1D6oDl, {from: accounts[2]});
		const uintWlmIoI = BigInt("1779")
		const uintnaO6uQ5 = BigInt("2025")
		const addressuy0Xqjx = accounts[0]
		const addressRh7GtOA = accounts[3]
		const bools75AhPf = await INSgmOSpHo.burn.call(uintWlmIoI, {from: accounts[2]});
		const boolhRTOhgD = await INSgmOSpHo.transferFrom.call(addressRh7GtOA, addressuy0Xqjx, uintnaO6uQ5, {from: accounts[0]});

		assert.equal(bools75AhPf, true)
		await expect(INSgmOSpHo.transferFrom.call(addressRh7GtOA, addressuy0Xqjx, uintnaO6uQ5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintIQJGIrE = BigInt("594")
		const stringdXAy3OT = "poKWnzQQdtzrLnYngNJN58l7YP4FgjLEmrioEYT4khcXWj"
		const stringBRfphyg = "ce6NKQopCVKfpycaXAec21L4HpYpveap2LbxqTNAYXNd9c8QElWW4v6BG4LMeYEOj2NvtpAnAfd8"
		const INSbMpBVPA = await INS.new(uintIQJGIrE, stringdXAy3OT, stringBRfphyg, {from: "0x0000000000000000000000000000000000000001"});
		const bytejayatKZ = "0x09180d021a"
		const uintgqXEIGU = BigInt("1337")
		const addresst8wW8i = accounts[1]
		const uintscXS5Ks = BigInt("396")
		const addressfJjdkEd = accounts[4]
		const uintuWBD5dG = BigInt("1331")
		const addressPp2b5AY = accounts[4]
		const uintRAFUXEr = BigInt("1039")
		const addressX4yBOZ = accounts[4]
		const addresshRhbhV3 = accounts[3]
		const boolSnnukI2 = await INSbMpBVPA.approveAndCall.call(addresst8wW8i, uintgqXEIGU, bytejayatKZ, {from: accounts[1]});
		const boolF3NIqaU = await INSbMpBVPA.approve.call(addressfJjdkEd, uintscXS5Ks, {from: accounts[3]});
		const boolOOzzXgV = await INSbMpBVPA.transfer.call(addressPp2b5AY, uintuWBD5dG, {from: accounts[1]});
		const boolcKvRA88 = await INSbMpBVPA.transferFrom.call(addresshRhbhV3, addressX4yBOZ, uintRAFUXEr, {from: accounts[1]});
	});

	it('test for INS', async () => {
		const uintPQHsedR = BigInt("938")
		const stringl8wfZZ = "skBi6gJVpJ"
		const stringD3X1Xp2 = "Wdj2Y8MCCiGxR5DCLetdxagb93bAiWSUsMy6P36RrHBOIAKvOrig4NGESfO36x5ALSG6V41QD1Q7maa"
		const INShqSHMBv = await INS.new(uintPQHsedR, stringl8wfZZ, stringD3X1Xp2, {from: accounts[2]});
		const uintz3LNLT8 = BigInt("1201")
		const addressvCgoRTb = accounts[2]
		const uintnMbqXHK = BigInt("0")
		const addresspBVBr99 = accounts[0]
		const addressti7X0Kc = accounts[1]
		const uintU4Rr6ZZ = BigInt("1740")
		const addressNDw69OV = accounts[4]
		const boolimD9gId = await INShqSHMBv.approve.call(addressvCgoRTb, uintz3LNLT8, {from: accounts[5]});
		const boolYawmHhN = await INShqSHMBv.transferFrom.call(addressti7X0Kc, addresspBVBr99, uintnMbqXHK, {from: accounts[3]});
		const boolfkLjDvC = await INShqSHMBv.approve.call(addressNDw69OV, uintU4Rr6ZZ, {from: accounts[5]});

		assert.equal(boolYawmHhN, true)
		assert.equal(boolfkLjDvC, true)
		assert.equal(boolimD9gId, true)
	});
})