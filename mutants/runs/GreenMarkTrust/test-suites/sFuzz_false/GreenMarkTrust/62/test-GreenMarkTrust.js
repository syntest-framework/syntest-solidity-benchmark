const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintBOtnf87 = BigInt("278")
		const stringjkdAIne = "zvSbfEExkjgnxWauawMloQ6ezp1M2iwkk6S21sOKTY3CkIi"
		const stringrgwycRn = "2iWeaQznm4U4DJ6EQ6OvLnopLuzbH5EcUQAwCcsiiGAHvw7456qA8zods2uvTLEVcpUClKpzR1ANvbaqCKvmM6Yb"
		const GreenMarkTrustL11FTgC = await GreenMarkTrust.new(uintBOtnf87, stringjkdAIne, stringrgwycRn, {from: accounts[4]});
		const uintYvOYDgH = BigInt("1738")
		const addressAUjsB9 = accounts[2]
		const uintfPDRTwf = BigInt("1102")
		const addressYHjhyvl = accounts[0]
		const boolBwLBoO5 = await GreenMarkTrustL11FTgC.burnFrom.call(addressAUjsB9, uintYvOYDgH, {from: accounts[2]});
		const boolrEopeRy = await GreenMarkTrustL11FTgC.approve.call(addressYHjhyvl, uintfPDRTwf, {from: accounts[0]});

		await expect(GreenMarkTrustL11FTgC.burnFrom.call(addressAUjsB9, uintYvOYDgH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintoNY56m = BigInt("642")
		const stringvYKKP0g = "eDrECe6dJ7v1KGAdQdKMJuPd1ZyF5YFNHtFQSAJgIWQ7iEgdn"
		const stringRdgqfYb = "4lT2labfuRbMoPdO4qpg5ILrhfVpGLujq008iBXNnvjf6g3ZrLQRhkp9T5QEBqiXzS2Kfrs1m5bxlw7aysqvOX"
		const GreenMarkTrusthW5xUKp = await GreenMarkTrust.new(uintoNY56m, stringvYKKP0g, stringRdgqfYb, {from: accounts[2]});
		const uintXp5HWmF = BigInt("528")
		const addressCN6bZC = accounts[2]
		const addressKLxADe8 = "0x0000000000000000000000000000000000000001"
		const uintwlQbbgf = BigInt("1047")
		const addressCJB6kbb = accounts[1]
		const boolUVsh5fY = await GreenMarkTrusthW5xUKp.transferFrom.call(addressKLxADe8, addressCN6bZC, uintXp5HWmF, {from: accounts[4]});
		const boolbzqShum = await GreenMarkTrusthW5xUKp.transfer.call(addressCJB6kbb, uintwlQbbgf, {from: accounts[4]});

		await expect(GreenMarkTrusthW5xUKp.transferFrom.call(addressKLxADe8, addressCN6bZC, uintXp5HWmF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintLSCQH5Z = BigInt("416")
		const stringgQ5JYXm = "OnyneQJBNRoHTPBvNH5UYHKi1gCHAYrANOIWNpaUfp2HV6ycGq4hLPP7vNhUEHl7H1xUxQ2bA9LffhnahAJMMPsX2fjX"
		const stringLWhx5oc = "eIhicgv72H2MT3BsPeVggaNdPOZkfZtwVCV3SwMv92Gqp2xH05BaoGw2rbqkjwuY2KTzkHQP7a7NDb5ON72YGSrWc"
		const GreenMarkTrustFe9uQk5 = await GreenMarkTrust.new(uintLSCQH5Z, stringgQ5JYXm, stringLWhx5oc, {from: accounts[4]});
		const uintFzDqvc = BigInt("1955")
		const uintpqi4U81 = BigInt("176")
		const uintAF2P8Lt = BigInt("760")
		const addressQZM2u4z = accounts[4]
		const addresszve8MlU = accounts[4]
		const bytet11ldaq = "0x061a100d1e010d110e1918131f041f150c"
		const uintgnpcXVz = BigInt("891")
		const addressz4XtAL3 = accounts[2]
		const bool1lY41U = await GreenMarkTrustFe9uQk5.burn.call(uintFzDqvc, {from: accounts[2]});
		const boolFQI1JuB = await GreenMarkTrustFe9uQk5.burn.call(uintpqi4U81, {from: accounts[0]});
		const boolDGlziI = await GreenMarkTrustFe9uQk5.transferFrom.call(addresszve8MlU, addressQZM2u4z, uintAF2P8Lt, {from: accounts[2]});
		const boolMn8xtcY = await GreenMarkTrustFe9uQk5.approveAndCall.call(addressz4XtAL3, uintgnpcXVz, bytet11ldaq, {from: accounts[3]});

		await expect(GreenMarkTrustFe9uQk5.burn.call(uintFzDqvc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintIH4QI3M = BigInt("295")
		const stringBkMzyLR = "8wX"
		const stringcyC1mMq = "DxKxa2BWYuiwEDrjQeXE9ivS"
		const GreenMarkTrustcSdfsZV = await GreenMarkTrust.new(uintIH4QI3M, stringBkMzyLR, stringcyC1mMq, {from: accounts[0]});
		const uintdg1MIQ = BigInt("1443")
		const addressPAfQnjQ = accounts[1]
		const uint2QVsjo = BigInt("1726")
		const uintTjs04WT = BigInt("706")
		const addressjO1G3X4 = accounts[1]
		const uinthMHMJE = BigInt("1257")
		const addressJPXpB7e = accounts[1]
		const boolWIvuD1X = await GreenMarkTrustcSdfsZV.transfer.call(addressPAfQnjQ, uintdg1MIQ, {from: accounts[4]});
		const boolR7ULuRu = await GreenMarkTrustcSdfsZV.burn.call(uint2QVsjo, {from: accounts[0]});
		const boolspRm0C0 = await GreenMarkTrustcSdfsZV.burnFrom.call(addressjO1G3X4, uintTjs04WT, {from: accounts[0]});
		const boolrJm4ppW = await GreenMarkTrustcSdfsZV.approve.call(addressJPXpB7e, uinthMHMJE, {from: accounts[1]});

		await expect(GreenMarkTrustcSdfsZV.transfer.call(addressPAfQnjQ, uintdg1MIQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintTSbUSpr = BigInt("1945")
		const stringW7NyEJb = "ccmNYfByzWlc1CB4F7P8g80qBGCeGywwuYnDTRiyTgZHBTm9HikNThNzCc4xEX4I1bBdOoawgUmMwlLcyDh5pMgz9jLfmb2"
		const stringLmVRyCC = "1HaVy2"
		const GreenMarkTrustSzz4Cse = await GreenMarkTrust.new(uintTSbUSpr, stringW7NyEJb, stringLmVRyCC, {from: accounts[2]});
		const bytejlWtTVY = "0x1701080a1e090904021409010d031f180407111917"
		const uintc59GYyh = BigInt("1258")
		const addresssZzfgcL = accounts[3]
		const uintRutRNld = BigInt("1859")
		const addressFFQAFMa = accounts[3]
		const boolctRCYx = await GreenMarkTrustSzz4Cse.approveAndCall.call(addresssZzfgcL, uintc59GYyh, bytejlWtTVY, {from: accounts[2]});
		const boolibyZ2Td = await GreenMarkTrustSzz4Cse.burnFrom.call(addressFFQAFMa, uintRutRNld, {from: accounts[2]});

		await expect(GreenMarkTrustSzz4Cse.approveAndCall.call(addresssZzfgcL, uintc59GYyh, bytejlWtTVY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintH9lpide = BigInt("990")
		const stringasXI8KQ = "v4EzBHqAeOh5IfH"
		const stringJLnGTj1 = "OsIZ4UdzgPR7sOhZjCV1Rqhx6YbxjYtCI1MmQj4oBQ33xAql8uZNRJJeXo7214RAdEmkGKTPlV3WG4KzV"
		const GreenMarkTrusttakjO38 = await GreenMarkTrust.new(uintH9lpide, stringasXI8KQ, stringJLnGTj1, {from: "0x0000000000000000000000000000000000000001"});
		const uintoDisJPV = BigInt("1256")
		const addressEkNP0ew = accounts[4]
		const uintNIVbJ3V = BigInt("1903")
		const addressMcDS1ov = accounts[0]
		const addressJGlk9dr = accounts[5]
		const uintOvI5oBf = BigInt("1216")
		const byteua5vK43 = "0x120902131616"
		const uintPuAFe38 = BigInt("288")
		const address6L8vrU = accounts[2]
		const uintFh44zDJ = BigInt("1761")
		const addressBA6ltJ = accounts[3]
		const booljqeRVva = await GreenMarkTrusttakjO38.burnFrom.call(addressEkNP0ew, uintoDisJPV, {from: accounts[5]});
		const boolZqg88nL = await GreenMarkTrusttakjO38.transferFrom.call(addressJGlk9dr, addressMcDS1ov, uintNIVbJ3V, {from: accounts[1]});
		const boolD4dXoze = await GreenMarkTrusttakjO38.burn.call(uintOvI5oBf, {from: accounts[3]});
		const bool0D8SyQ = await GreenMarkTrusttakjO38.approveAndCall.call(address6L8vrU, uintPuAFe38, byteua5vK43, {from: accounts[4]});
		const boolr2hVzOk = await GreenMarkTrusttakjO38.approve.call(addressBA6ltJ, uintFh44zDJ, {from: accounts[2]});
	});
})