const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringMBeY2uL = "ZrI7xhoNKN29BXHVQU7KWVd3JpQe74VK"
		const stringxcvtf3L = "UrBHaVCuPcILaSMEULGBLIagz7UdF6yCPYGJ"
		const uintYLe4wv = BigInt("971")
		const FinalHih5ekK = await Final.new(stringMBeY2uL, stringxcvtf3L, uintYLe4wv, {from: "0x0000000000000000000000000000000000000001"});
		const uintuP7EPa6 = BigInt("1588")
		const addressuqpbO2 = accounts[2]
		const addressEvL6Ze1 = accounts[2]
		const boolCgl56xY = await FinalHih5ekK.approve.call(addressuqpbO2, uintuP7EPa6, {from: "0x0000000000000000000000000000000000000001"});
		const uint8SGgiKTK = await FinalHih5ekK.decimals.call({from: accounts[4]});
		const uintQTTVEhX = await FinalHih5ekK.balanceOf.call(addressEvL6Ze1, {from: accounts[3]});
	});

	it('test for Final', async () => {
		const stringaq8TS3f = "4z1KIA8JNQ"
		const stringrclG4bY = "YqLwGvwk4Fx0Q142cnVTI7"
		const uintZInZBf = BigInt("36")
		const FinalnzmjLgJ = await Final.new(stringaq8TS3f, stringrclG4bY, uintZInZBf, {from: accounts[2]});
		const uintVrAmSV7 = BigInt("897")
		const addressS4OAjKy = accounts[4]
		const uintjtcctnA = BigInt("1913")
		const addressQhJPP3R = accounts[3]
		const uintHxACGHc = BigInt("1342")
		const addressiB79IyH = accounts[4]
		const uint8NjxIFVH = await FinalnzmjLgJ.decimals.call({from: accounts[3]});
		const stringhhr7HQf = await FinalnzmjLgJ.symbol.call({from: accounts[1]});
		const boolOvUIdUH = await FinalnzmjLgJ.approve.call(addressS4OAjKy, uintVrAmSV7, {from: accounts[3]});
		const boollFEtstd = await FinalnzmjLgJ.approve.call(addressQhJPP3R, uintjtcctnA, {from: accounts[0]});
//		const booltXfNHCh = await FinalnzmjLgJ.increaseAllowance.call(addressiB79IyH, uintHxACGHc, {from: accounts[2]});

		assert.equal(boolOvUIdUH, true)
		assert.equal(boollFEtstd, true)
		assert.equal(stringhhr7HQf, "YqLwGvwk4Fx0Q142cnVTI7")
		assert.equal(uint8NjxIFVH, BigInt("18"))
		await expect(FinalnzmjLgJ.increaseAllowance.call(addressiB79IyH, uintHxACGHc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringw8nbzjP = "nLLs7HftYMDSAgH5n3GSzHIZ2D3e41SeYY2MdB8TifysjvSjQ4sutgw2NkXfIJCPl3Dtt4MReEVE5vx5Y3juWMQ"
		const stringItF8C2 = "bD32RX5rVBssi7AELJ15ckYzn7gC"
		const uintXoHhfOd = BigInt("162")
		const Final7gQl2h = await Final.new(stringw8nbzjP, stringItF8C2, uintXoHhfOd, {from: accounts[3]});
		const uintoEk3M5z = BigInt("922")
		const addresshQtmDJQ = "0x0000000000000000000000000000000000000001"
		const uintM38bm0 = BigInt("522")
		const addressnDtoxg1 = accounts[4]
		const addresswRxP6rC = accounts[1]
//		const booleQWuQp2 = await Final7gQl2h.transfer.call(addresshQtmDJQ, uintoEk3M5z, {from: accounts[4]});
//		const boolKj7EhLw = await Final7gQl2h.transferFrom.call(addresswRxP6rC, addressnDtoxg1, uintM38bm0, {from: accounts[1]});

		await expect(Final7gQl2h.transfer.call(addresshQtmDJQ, uintoEk3M5z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringbQ1H2N = "1yqz"
		const stringdcYPIv = "gT4taNxmBOrZEuCXSQFcKd"
		const uinto8vjf5J = BigInt("380")
		const FinalCIdERNA = await Final.new(stringbQ1H2N, stringdcYPIv, uinto8vjf5J, {from: accounts[4]});
		const uintJwKRBob = BigInt("1111")
		const addresswiJtjY = accounts[0]
		const uintkUbL8In = BigInt("1580")
		const addressLn5f7Hb = accounts[0]
		const uintwpJUFnC = BigInt("1373")
		const addressst0SZDL = accounts[5]
		const addresstXtTDGK = accounts[5]
		const uintnIL1iqo = BigInt("898")
		const addresspiVlCvl = accounts[5]
		const addressFltyCiw = accounts[0]
		const addressskmxOMr = accounts[1]
//		const booli7Or27v = await FinalCIdERNA.approveAndCall.call(addresswiJtjY, uintJwKRBob, {from: accounts[5]});
//		const bool5QatMQ = await FinalCIdERNA.approve.call(addressLn5f7Hb, uintkUbL8In, {from: accounts[3]});
//		const boolOgvmKm = await FinalCIdERNA.transferFrom.call(addresstXtTDGK, addressst0SZDL, uintwpJUFnC, {from: accounts[5]});
//		const boolRT1uh9 = await FinalCIdERNA.transferFrom.call(addressFltyCiw, addresspiVlCvl, uintnIL1iqo, {from: accounts[0]});
//		const uintmuEqs6A = await FinalCIdERNA.balanceOf.call(addressskmxOMr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FinalCIdERNA.approveAndCall.call(addresswiJtjY, uintJwKRBob, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringT8vJnPl = "AuKeufitFXffz57d6"
		const stringif2b4U = "XvLcxWEjtd0g759jYI8g24X2MB166fwu7q"
		const uintFsrVseO = BigInt("1716")
		const FinalFq1uBfj = await Final.new(stringT8vJnPl, stringif2b4U, uintFsrVseO, {from: accounts[2]});
		const uinthfD8t0n = BigInt("1604")
		const addresszyHx1xH = accounts[2]
		const uintuiG6q2Q = BigInt("1548")
		const addresslXvRrA = accounts[0]
		const stringOYY5CuJ = await FinalFq1uBfj.name.call({from: accounts[2]});
//		const boolrPVZEqv = await FinalFq1uBfj.transfer.call(addresszyHx1xH, uinthfD8t0n, {from: accounts[0]});
//		const uint80AVNSy = await FinalFq1uBfj.decimals.call({from: accounts[3]});
//		const boolbhC6i40 = await FinalFq1uBfj.approve.call(addresslXvRrA, uintuiG6q2Q, {from: accounts[0]});

		assert.equal(stringOYY5CuJ, "AuKeufitFXffz57d6")
		await expect(FinalFq1uBfj.transfer.call(addresszyHx1xH, uinthfD8t0n, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringQYhbbP = "Mo7BpU1PBhdjTkfoiajggE8UkN1X0ikoZHFz"
		const stringOZsMaRI = "sv2qP4fqnUcIgJX5swpJJGW2qpPppjwjzTwIGuR4EERmuszrUUWd"
		const uintp0uTvsO = BigInt("96")
		const FinalJqOTjMC = await Final.new(stringQYhbbP, stringOZsMaRI, uintp0uTvsO, {from: accounts[1]});
		const addressUr16A90 = accounts[1]
		const addresshDuEvvZ = accounts[5]
		const uintQcRjJgu = BigInt("950")
		const addressiyZDVFC = accounts[2]
		const stringmgfgbjH = await FinalJqOTjMC.name.call({from: "0x0000000000000000000000000000000000000001"});
		const stringMajTid9 = await FinalJqOTjMC.symbol.call({from: accounts[0]});
		const uintaVv8hG = await FinalJqOTjMC.balanceOf.call(addressUr16A90, {from: accounts[0]});
		const uint8sSqmRIg = await FinalJqOTjMC.decimals.call({from: accounts[5]});
		const boolgwEt0U = await FinalJqOTjMC.transferownership.call(addresshDuEvvZ, {from: accounts[1]});
		const uintMx93a1q = await FinalJqOTjMC.totalSupply.call({from: accounts[4]});
//		const boolFiA2ne1 = await FinalJqOTjMC.approveAndCall.call(addressiyZDVFC, uintQcRjJgu, {from: accounts[2]});

		assert.equal(boolgwEt0U, true)
		assert.equal(stringMajTid9, "sv2qP4fqnUcIgJX5swpJJGW2qpPppjwjzTwIGuR4EERmuszrUUWd")
		assert.equal(stringmgfgbjH, "Mo7BpU1PBhdjTkfoiajggE8UkN1X0ikoZHFz")
		assert.equal(uint8sSqmRIg, BigInt("18"))
		assert.equal(uintMx93a1q, BigInt("96000000000000000000"))
		assert.equal(uintaVv8hG, BigInt("96000000000000000000"))
		await expect(FinalJqOTjMC.approveAndCall.call(addressiyZDVFC, uintQcRjJgu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringQYhbbP = "Mo7BpU1PBhdjTkfoiajggE8UkN1X0ikoZHFz"
		const stringOZsMaRI = "sv2qP4fqnUcIgJX5swpJJGW2qpPppjwjzTwIGuR4EERmuszrUUWd"
		const uintlWYD8sb = BigInt("96")
		const FinalJqOTjMC = await Final.new(stringQYhbbP, stringOZsMaRI, uintlWYD8sb, {from: accounts[1]});
		const uintPpDFcm = BigInt("1725")
		const addressHUvZZYu = accounts[3]
		const uintfOg57J = BigInt("991")
		const addressGfQpFbX = accounts[0]
		const uintdL6u6O1 = BigInt("2045")
		const addressPV6jAv7 = "0x0000000000000000000000000000000000000001"
		const uintlPVqiZz = BigInt("1054")
		const addresscN4Cii = accounts[5]
		const addresst74Ri0x = accounts[0]
		const uintvENMuLn = BigInt("835")
		const addressFl9K760 = accounts[1]
		const uintkRtJiQY = BigInt("950")
		const addressKJiDFQZ = accounts[2]
		const stringNp82Dd9 = await FinalJqOTjMC.symbol.call({from: accounts[2]});
		const uint8Zjth90V = await FinalJqOTjMC.decimals.call({from: accounts[2]});
		const booldNRHb5e = await FinalJqOTjMC.approve.call(addressHUvZZYu, uintPpDFcm, {from: accounts[3]});
		const boolA3mZZV3 = await FinalJqOTjMC.transfer.call(addressGfQpFbX, uintfOg57J, {from: accounts[1]});
		const boolKI73ERG = await FinalJqOTjMC.approveAndCall.call(addressPV6jAv7, uintdL6u6O1, {from: accounts[1]});
		const stringmgfgbjH = await FinalJqOTjMC.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolOjmGp4b = await FinalJqOTjMC.approve.call(addresscN4Cii, uintlPVqiZz, {from: accounts[2]});
		const uintMx93a1q = await FinalJqOTjMC.totalSupply.call({from: accounts[4]});
		const uintkWihb8n = await FinalJqOTjMC.balanceOf.call(addresst74Ri0x, {from: accounts[1]});
		const boolUTRYYKH = await FinalJqOTjMC.approve.call(addressFl9K760, uintvENMuLn, {from: accounts[4]});
//		const boolFiA2ne1 = await FinalJqOTjMC.approveAndCall.call(addressKJiDFQZ, uintkRtJiQY, {from: accounts[2]});
//		const stringsoZm1A = await FinalJqOTjMC.symbol.call({from: accounts[3]});

		assert.equal(boolA3mZZV3, true)
		assert.equal(boolKI73ERG, true)
		assert.equal(boolOjmGp4b, true)
		assert.equal(boolUTRYYKH, true)
		assert.equal(booldNRHb5e, true)
		assert.equal(stringNp82Dd9, "sv2qP4fqnUcIgJX5swpJJGW2qpPppjwjzTwIGuR4EERmuszrUUWd")
		assert.equal(stringmgfgbjH, "Mo7BpU1PBhdjTkfoiajggE8UkN1X0ikoZHFz")
		assert.equal(uint8Zjth90V, BigInt("18"))
		assert.equal(uintMx93a1q, BigInt("96000000000000000000"))
		assert.equal(uintkWihb8n, BigInt("0"))
		await expect(FinalJqOTjMC.approveAndCall.call(addressKJiDFQZ, uintkRtJiQY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})