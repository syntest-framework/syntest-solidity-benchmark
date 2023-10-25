const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringig2Ae7g = "a1U5JNUbMBeSfkbr7S9Om4tfes8awhmTcbiFJu3cFTIyZ7HJCyDfwUT8bLkEnVSau1DFEiuOxLq5Rv0kih"
		const stringJHDsbd = "518KnFI54PqMn99j7NOkyLDa1ug7SUzeDPhoZjkPGXhv38zp03faqISsdBtyNEk31QQIadXRK"
		const uintDvDVjTb = BigInt("1084")
		const RexonamPEyDzt = await Rexona.new(stringig2Ae7g, stringJHDsbd, uintDvDVjTb, {from: accounts[4]});
		const uintWc4YTHd = BigInt("1533")
		const addressIWDUJGs = "0x0000000000000000000000000000000000000001"
		const uintshSNG2o = BigInt("1572")
		const addressDHg9JiB = accounts[4]
		const uintoBMwwmd = BigInt("1256")
		const addressLiLPCf = accounts[0]
		const addressDx8NcfL = accounts[4]
		const boolg8P0zUx = await RexonamPEyDzt.approve.call(addressIWDUJGs, uintWc4YTHd, {from: accounts[4]});
//		const boolFnNkIsN = await RexonamPEyDzt.approveAndCall.call(addressDHg9JiB, uintshSNG2o, {from: accounts[3]});
//		const boolgKrZ27Y = await RexonamPEyDzt.transferFrom.call(addressDx8NcfL, addressLiLPCf, uintoBMwwmd, {from: accounts[4]});

		assert.equal(boolg8P0zUx, true)
		await expect(RexonamPEyDzt.approveAndCall.call(addressDHg9JiB, uintshSNG2o, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringPl6C4a = "ia0VqVHyY1AhnavrgS4vutTYS4ysC7r4g8jBNPUHakJPjyW1b5z7LAxMy6wlJMsc6wa1Mj8Gmadi6Id0f8Dm3qilumEjwek3"
		const stringJRkvY9K = "FVBof5aTiQsOaQqbJGM6Hsj7z7az4gn90BjqJ28"
		const uintxYnHqRK = BigInt("397")
		const RexonaRrxFA5P = await Rexona.new(stringPl6C4a, stringJRkvY9K, uintxYnHqRK, {from: accounts[3]});
		const uintu12EKuj = BigInt("310")
		const addressYOwHFBf = accounts[1]
		const uintKjvN7iw = BigInt("387")
		const addressQOMBijE = accounts[3]
		const addressmALu7dy = accounts[0]
		const uintXQDVPFb = BigInt("633")
		const addressqGCeKpG = accounts[1]
		const addressyiE14sB = accounts[2]
		const boolQkwsaCZ = await RexonaRrxFA5P.approve.call(addressYOwHFBf, uintu12EKuj, {from: accounts[3]});
//		const boolvh7SWV1 = await RexonaRrxFA5P.transferFrom.call(addressmALu7dy, addressQOMBijE, uintKjvN7iw, {from: accounts[2]});
//		const boolChfk5z1 = await RexonaRrxFA5P.transferFrom.call(addressyiE14sB, addressqGCeKpG, uintXQDVPFb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolQkwsaCZ, true)
		await expect(RexonaRrxFA5P.transferFrom.call(addressmALu7dy, addressQOMBijE, uintKjvN7iw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringQ1o9hc9 = "GiMixxHEDUOD0xsEcmBz2MXbOiKJrMVPsAjTJc4TRQ5DBa9Oj6M6Bj4lI6lJLbDg4PEZYPkY7BhscOehpBaABJ8X"
		const stringdKFtpO9 = "Ei"
		const uintwamxNVK = BigInt("1437")
		const RexonacmKnj6A = await Rexona.new(stringQ1o9hc9, stringdKFtpO9, uintwamxNVK, {from: accounts[0]});
		const addressz21bG2y = accounts[4]
		const uintezjY5Kx = BigInt("142")
		const addressrmk24fS = accounts[3]
		const uintfryM8O4 = BigInt("1481")
		const addressb7vV74 = accounts[2]
		const uintHp0tkLF = BigInt("1821")
		const addressjYQ9Yu0 = accounts[1]
//		const boolm3lmZ2M = await RexonacmKnj6A.transferownership.call(addressz21bG2y, {from: accounts[1]});
//		const boolUBQVApa = await RexonacmKnj6A.transfer.call(addressrmk24fS, uintezjY5Kx, {from: accounts[0]});
//		const boolbXU5dIH = await RexonacmKnj6A.approve.call(addressb7vV74, uintfryM8O4, {from: accounts[2]});
//		const boolAoJAYrQ = await RexonacmKnj6A.approveAndCall.call(addressjYQ9Yu0, uintHp0tkLF, {from: accounts[4]});

		await expect(RexonacmKnj6A.transferownership.call(addressz21bG2y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringviRnhW1 = "fbxCLv9zaktw8W40HhLw5I56AGhyathjR458KALml0qUEhpHd"
		const string5g59GN = "hngCNX1BlGVhD7yr1ekg3t7gdAc1azo2wX4qyFbwQZwg5UrovXOLgm36Htxj"
		const uintvcF1Bol = BigInt("666")
		const RexonagdlV32h = await Rexona.new(stringviRnhW1, string5g59GN, uintvcF1Bol, {from: "0x0000000000000000000000000000000000000001"});
		const uinto9y3cz = BigInt("1506")
		const addresskKedMT5 = "0x0000000000000000000000000000000000000001"
		const uinttzhE5u6 = BigInt("909")
		const addresslrH9yD7 = accounts[4]
		const uintJrFJPO2 = BigInt("724")
		const addressT0pKlGJ = accounts[3]
		const addressM7HzedA = accounts[3]
		const uintYbywNA4 = BigInt("1141")
		const addressI3JVkdp = accounts[0]
		const uinthXIJeiG = BigInt("487")
		const addresspVWwxdk = accounts[4]
		const address6Hko5z = accounts[3]
		const boolN33AUPm = await RexonagdlV32h.approve.call(addresskKedMT5, uinto9y3cz, {from: accounts[3]});
		const boolWqRUSvU = await RexonagdlV32h.approveAndCall.call(addresslrH9yD7, uinttzhE5u6, {from: accounts[4]});
		const boolyb0iOQm = await RexonagdlV32h.transferFrom.call(addressM7HzedA, addressT0pKlGJ, uintJrFJPO2, {from: "0x0000000000000000000000000000000000000001"});
		const boolSoCqOTE = await RexonagdlV32h.approve.call(addressI3JVkdp, uintYbywNA4, {from: accounts[4]});
		const boolSjLIbnu = await RexonagdlV32h.transferFrom.call(address6Hko5z, addresspVWwxdk, uinthXIJeiG, {from: accounts[2]});
	});

	it('test for Rexona', async () => {
		const stringi6tn2eM = "PWoWpV2y5TbX3azAmhAMMSA1DJM"
		const stringKtV2nlz = "F75fbqA79VFSnBM7pQyuaqhmn5piDJWuwAYrBJsOlshloG5ENnWOnX4B1eRnUsSCf"
		const uintUYKJ2h = BigInt("1740")
		const RexonaAi0LDy = await Rexona.new(stringi6tn2eM, stringKtV2nlz, uintUYKJ2h, {from: accounts[1]});
		const uintAxvD3H9 = BigInt("1569")
		const addressRWa2a0l = accounts[1]
		const address0gdTwW = accounts[4]
		const uintkRJ3Kr0 = BigInt("1141")
		const addressBqHZOME = accounts[1]
//		const boolfTo2qBi = await RexonaAi0LDy.transferFrom.call(address0gdTwW, addressRWa2a0l, uintAxvD3H9, {from: accounts[4]});
//		const booli0lpJSr = await RexonaAi0LDy.approveAndCall.call(addressBqHZOME, uintkRJ3Kr0, {from: accounts[5]});

		await expect(RexonaAi0LDy.transferFrom.call(address0gdTwW, addressRWa2a0l, uintAxvD3H9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringgIUamec = "bRPVc2wqdqYsuv69Kvb9yepOg"
		const stringlbA2eln = "mhSclz99fV1OaWnEJg8wugazfdT8rOxC5wAHMI8ML5j"
		const uintFXPMEFi = BigInt("1639")
		const RexonabYfUmbK = await Rexona.new(stringgIUamec, stringlbA2eln, uintFXPMEFi, {from: accounts[4]});
		const uintnFfBFn = BigInt("1649")
		const addresscfQ8O8y = accounts[2]
		const uintOtKmr8f = BigInt("828")
		const addressnSspcxk = accounts[1]
		const uintDmyi5sO = BigInt("1976")
		const addressJ6SYkV8 = accounts[4]
		const uintklAavMr = BigInt("761")
		const addressRSYCDl6 = accounts[2]
		const addressDFO931m = accounts[4]
		const uintZezGpp = BigInt("1194")
		const addressV4mToRb = accounts[3]
		const bool6UcZ0A = await RexonabYfUmbK.approve.call(addresscfQ8O8y, uintnFfBFn, {from: accounts[3]});
//		const boolHg67Frp = await RexonabYfUmbK.transfer.call(addressnSspcxk, uintOtKmr8f, {from: accounts[0]});
//		const boolb7EjjGs = await RexonabYfUmbK.approveAndCall.call(addressJ6SYkV8, uintDmyi5sO, {from: accounts[0]});
//		const boolT2eR4WD = await RexonabYfUmbK.transferFrom.call(addressDFO931m, addressRSYCDl6, uintklAavMr, {from: accounts[4]});
//		const boolPd3EgYx = await RexonabYfUmbK.approveAndCall.call(addressV4mToRb, uintZezGpp, {from: accounts[4]});

		assert.equal(bool6UcZ0A, true)
		await expect(RexonabYfUmbK.transfer.call(addressnSspcxk, uintOtKmr8f, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringi6tn2eM = "PWoWpV2y5TbX3azAmhAMMSA1DJM"
		const stringKtV2nlz = "F75fbqA79VFSnBM7pQyuaqhmn5piDJWuwAYrBJsOlshloG5ENnWOnX4B1eRnUsSCf"
		const uintM3km3jX = BigInt("1740")
		const RexonaAi0LDy = await Rexona.new(stringi6tn2eM, stringKtV2nlz, uintM3km3jX, {from: accounts[1]});
		const uintvP6hKhZ = BigInt("759")
		const addressgJmKgTk = accounts[3]
		const uintk0KVsGQ = BigInt("1553")
		const addressIRTBcKW = accounts[4]
		const addressJ1mln37 = accounts[3]
		const boolvEnRNw = await RexonaAi0LDy.approveAndCall.call(addressgJmKgTk, uintvP6hKhZ, {from: accounts[1]});
//		const boolhH3dqN6 = await RexonaAi0LDy.transfer.call(addressIRTBcKW, uintk0KVsGQ, {from: accounts[5]});
//		const boole4v4yan = await RexonaAi0LDy.transferownership.call(addressJ1mln37, {from: accounts[3]});

		assert.equal(boolvEnRNw, true)
		await expect(RexonaAi0LDy.transfer.call(addressIRTBcKW, uintk0KVsGQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringig2Ae7g = "a1U5JNUbMBeSfkbr7S9Om4tfes8awhmTcbiFJu3cFTIyZ7HJCyDfwUT8bLkEnVSau1DFEiuOxLq5Rv0kih"
		const stringJHDsbd = "518KnFI54PqMn99j7NOkyLDa1ug7SUzeDPhoZjkPGXhv38zp03faqISsdBtyNEk31QQIadXRK"
		const uintQPW4WMj = BigInt("1084")
		const RexonamPEyDzt = await Rexona.new(stringig2Ae7g, stringJHDsbd, uintQPW4WMj, {from: accounts[4]});
		const uintpPW0oK = BigInt("1533")
		const addressfCjviJz = "0x00000000000000000000000000000000000000-1"
		const uintA5FKckB = BigInt("1155")
		const addressUTjUE2x = accounts[0]
		const uintVU4uUq3 = BigInt("2036")
		const addresskQd92l = accounts[0]
		const uintRwOJg4T = BigInt("141")
		const addressanFwnq = accounts[5]
		const uintJnv5FeH = BigInt("432")
		const addressrPBKTd9 = accounts[5]
		const uintJdNXMOz = BigInt("1572")
		const addressKwMXCVl = accounts[4]
//		const boolg8P0zUx = await RexonamPEyDzt.approve.call(addressfCjviJz, uintpPW0oK, {from: accounts[4]});
//		const boolBw5KKzC = await RexonamPEyDzt.approveAndCall.call(addressUTjUE2x, uintA5FKckB, {from: "0x0000000000000000000000000000000000000001"});
//		const boolUm3mjdn = await RexonamPEyDzt.transfer.call(addresskQd92l, uintVU4uUq3, {from: accounts[0]});
//		const boolX5rhihF = await RexonamPEyDzt.approve.call(addressanFwnq, uintRwOJg4T, {from: accounts[4]});
//		const boolcuGfnzy = await RexonamPEyDzt.approveAndCall.call(addressrPBKTd9, uintJnv5FeH, {from: accounts[4]});
//		const boolFnNkIsN = await RexonamPEyDzt.approveAndCall.call(addressKwMXCVl, uintJdNXMOz, {from: accounts[3]});

		await expect(RexonamPEyDzt.approve.call(addressfCjviJz, uintpPW0oK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringi6tn2eM = "PWoWpV2y5TbX3azAmhAMMSA1DJM"
		const stringKtV2nlz = "F75fbqA79VFSnBM7pQyuaqhmn5piDJWuwAYrBJsOlshloG5ENnWOnX4B1eRnUsSCf"
		const uintGu2qVfd = BigInt("1740")
		const RexonaAi0LDy = await Rexona.new(stringi6tn2eM, stringKtV2nlz, uintGu2qVfd, {from: accounts[1]});
		const addresss1vEXoF = accounts[1]
		const addressOawF2J = accounts[0]
		const addressJx1rOnX = accounts[3]
		const uintn5LzM5s = BigInt("701")
		const addressS0l4gFB = accounts[1]
		const addresspXLvnBS = accounts[2]
		const boolhT83qOm = await RexonaAi0LDy.transferownership.call(addresss1vEXoF, {from: accounts[1]});
//		const boolPjVd5Cq = await RexonaAi0LDy.transferownership.call(addressOawF2J, {from: accounts[3]});
//		const boole4v4yan = await RexonaAi0LDy.transferownership.call(addressJx1rOnX, {from: accounts[3]});
//		const boolb1UHRJA = await RexonaAi0LDy.transferFrom.call(addresspXLvnBS, addressS0l4gFB, uintn5LzM5s, {from: accounts[0]});

		assert.equal(boolhT83qOm, true)
		await expect(RexonaAi0LDy.transferownership.call(addressOawF2J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringi6tn2eM = "PWoWpV2y5TbX3azAmhAMMSA1DJM"
		const stringKtV2nlz = "F75fbqA79VFSnBM7pQyuaqhmn5piDJWuwAYrBJsOlshloG5ENnWOnX4B1eRnUsSCf"
		const uintv1lOXI = BigInt("1740")
		const RexonaAi0LDy = await Rexona.new(stringi6tn2eM, stringKtV2nlz, uintv1lOXI, {from: accounts[1]});
		const uintc3966UW = BigInt("0")
		const addressXwyQgAR = accounts[0]
		const uintSQxY5OY = BigInt("91")
		const addressT8r7fNk = accounts[3]
		const boolfAD44ZX = await RexonaAi0LDy.transfer.call(addressXwyQgAR, uintc3966UW, {from: accounts[2]});
		const boolvEnRNw = await RexonaAi0LDy.approveAndCall.call(addressT8r7fNk, uintSQxY5OY, {from: accounts[1]});

		assert.equal(boolfAD44ZX, true)
		assert.equal(boolvEnRNw, true)
	});

	it('test for Rexona', async () => {
		const stringi6tn2eM = "PWoWpV2y5TbX3azAmhAMMSA1DJM"
		const stringKtV2nlz = "F75fbqA79VFSnBM7pQyuaqhmn5piDJWuwAYrBJsOlshloG5ENnWOnX4B1eRnUsSCf"
		const uintv8pF5Ec = BigInt("1740")
		const RexonaAi0LDy = await Rexona.new(stringi6tn2eM, stringKtV2nlz, uintv8pF5Ec, {from: accounts[1]});
		const uintl1vH6nm = BigInt("1116")
		const addressNx7g8l7 = accounts[2]
		const uintKY64hMe = BigInt("0")
		const addressMp3VkIm = accounts[3]
		const uintqw5uUz = BigInt("1102")
		const addressgSnKROd = accounts[1]
		const boolS7ylTo = await RexonaAi0LDy.approve.call(addressNx7g8l7, uintl1vH6nm, {from: accounts[3]});
		const boolvEnRNw = await RexonaAi0LDy.approveAndCall.call(addressMp3VkIm, uintKY64hMe, {from: accounts[1]});
		const boolZOmFye7 = await RexonaAi0LDy.approve.call(addressgSnKROd, uintqw5uUz, {from: accounts[5]});

		assert.equal(boolS7ylTo, true)
		assert.equal(boolZOmFye7, true)
		assert.equal(boolvEnRNw, true)
	});
})