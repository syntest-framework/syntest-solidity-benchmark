const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressD9p1l2 = accounts[5]
		const addressAtqbhPT = accounts[5]
		const QuickTokenydHjYkV = await QuickToken.new(addressD9p1l2, addressAtqbhPT, {from: accounts[0]});
		const addressB48LTJ = accounts[0]
		const addressUnC3gL2 = accounts[1]
		const addressWDAq4t = accounts[1]
		const uinto54qnDa = await QuickTokenydHjYkV.allowance.call(addressUnC3gL2, addressB48LTJ, {from: accounts[4]});
		const uintfwxpcof = await QuickTokenydHjYkV.balanceOf.call(addressWDAq4t, {from: accounts[1]});

		assert.equal(uintfwxpcof, BigInt("0"))
		assert.equal(uinto54qnDa, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressAcArgim = accounts[0]
		const addressOi6zhwe = accounts[4]
		const QuickTokenwjrsPO = await QuickToken.new(addressAcArgim, addressOi6zhwe, {from: accounts[3]});
		const uintcnjNzXA = BigInt("1299")
		const addressAi39oi4 = accounts[1]
		const addressP4g2Q9h = accounts[2]
		const uintfCPLaYU = BigInt("1621")
		const addressZrx5E3K = accounts[3]
		const addresswmjNU8x = accounts[3]
		const addresskxttxHI = accounts[1]
		const addressq5qG2zu = accounts[2]
		const uintk97AwSk = BigInt("324")
		const addresspcIDNjv = accounts[3]
		const boolKiURbf = await QuickTokenwjrsPO.transferFrom.call(addressP4g2Q9h, addressAi39oi4, uintcnjNzXA, {from: accounts[3]});
		const boolq6dggDF = await QuickTokenwjrsPO.transferFrom.call(addresswmjNU8x, addressZrx5E3K, uintfCPLaYU, {from: accounts[4]});
		const uintVul3cP4 = await QuickTokenwjrsPO.allowance.call(addressq5qG2zu, addresskxttxHI, {from: accounts[2]});
		const boolOcrJogk = await QuickTokenwjrsPO.approve.call(addresspcIDNjv, uintk97AwSk, {from: accounts[2]});

		await expect(QuickTokenwjrsPO.transferFrom.call(addressP4g2Q9h, addressAi39oi4, uintcnjNzXA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressVvjwUOr = accounts[2]
		const addressPmoBdDp = accounts[2]
		const QuickTokenoKiWY1t = await QuickToken.new(addressVvjwUOr, addressPmoBdDp, {from: accounts[1]});
		const uintwKShmzW = BigInt("110")
		const addressgrXjKKL = accounts[4]
		const uinttzaDAR6 = BigInt("735")
		const addressalkJbha = accounts[4]
		const addressjNizdCe = accounts[4]
		const address4m81N3 = accounts[2]
		const boolAcb5FUU = await QuickTokenoKiWY1t.transfer.call(addressgrXjKKL, uintwKShmzW, {from: accounts[4]});
		const bool5SmqGG = await QuickTokenoKiWY1t.approve.call(addressalkJbha, uinttzaDAR6, {from: accounts[3]});
		const uintQKbACOU = await QuickTokenoKiWY1t.allowance.call(address4m81N3, addressjNizdCe, {from: accounts[5]});

		await expect(QuickTokenoKiWY1t.transfer.call(addressgrXjKKL, uintwKShmzW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressEjQAmd = accounts[4]
		const addressW9ahpMS = accounts[4]
		const QuickTokenxJ0YCcp = await QuickToken.new(addressEjQAmd, addressW9ahpMS, {from: "0x0000000000000000000000000000000000000001"});
		const addressnw6swrq = accounts[4]
		const addressYdxokGC = accounts[4]
		const addressDDiz9kH = accounts[3]
		const uintjABcgjo = BigInt("1432")
		const addressCtx2gGR = accounts[5]
		const addresswZXjohK = accounts[0]
		const addressPMmI6LQ = accounts[3]
		const uintQIPSUFT = BigInt("1415")
		const addressuRRtihI = accounts[4]
		const addresseymHXzl = accounts[0]
		const uintrv9gJEd = BigInt("194")
		const address3XkV24 = accounts[0]
		const uintyu4r3UX = await QuickTokenxJ0YCcp.balanceOf.call(addressnw6swrq, {from: accounts[2]});
		const uintqqpdvtJ = await QuickTokenxJ0YCcp.allowance.call(addressDDiz9kH, addressYdxokGC, {from: accounts[0]});
		const boolA7oghR = await QuickTokenxJ0YCcp.approve.call(addressCtx2gGR, uintjABcgjo, {from: accounts[1]});
		const uintSEC6JkA = await QuickTokenxJ0YCcp.allowance.call(addressPMmI6LQ, addresswZXjohK, {from: accounts[3]});
		const boolSuGvoNM = await QuickTokenxJ0YCcp.transferFrom.call(addresseymHXzl, addressuRRtihI, uintQIPSUFT, {from: accounts[4]});
		const boolylKUZm = await QuickTokenxJ0YCcp.transfer.call(address3XkV24, uintrv9gJEd, {from: accounts[3]});
	});

	it('test for QuickToken', async () => {
		const addressk4bZvW1 = accounts[0]
		const addressqYj44R = accounts[0]
		const QuickTokenXSK9uO8 = await QuickToken.new(addressk4bZvW1, addressqYj44R, {from: accounts[1]});
		const addressWuScnol = accounts[3]
		const uint6esRDk = BigInt("1973")
		const addressn90aKhc = accounts[5]
		const uintRLVdcs9 = await QuickTokenXSK9uO8.balanceOf.call(addressWuScnol, {from: "0x0000000000000000000000000000000000000001"});
		const boolKfM3jfp = await QuickTokenXSK9uO8.approve.call(addressn90aKhc, uint6esRDk, {from: accounts[1]});

		assert.equal(boolKfM3jfp, true)
		assert.equal(uintRLVdcs9, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressKyjJMCu = "0x0000000000000000000000000000000000000001"
		const addressK7HIR9 = accounts[4]
		const QuickTokenMX5Tjaa = await QuickToken.new(addressKyjJMCu, addressK7HIR9, {from: accounts[2]});
		const addressULjkLJQ = accounts[3]
		const uintAAvESwT = BigInt("1862")
		const addressx3bJqxV = accounts[0]
		const uintRGn6jKl = BigInt("1096")
		const addresszQb0jo = accounts[4]
		const uintsR80p56 = BigInt("1268")
		const addressr0U8Y6W = accounts[1]
		const uintjs3VvBh = BigInt("466")
		const addressBUzEqSL = accounts[1]
		const uintz8usOqu = BigInt("1969")
		const addressDG2ctH = accounts[1]
		const addressTN6n6HE = accounts[3]
		const uintgMBc2fu = await QuickTokenMX5Tjaa.balanceOf.call(addressULjkLJQ, {from: accounts[3]});
		const addresspE3XJn = await QuickTokenMX5Tjaa.mint.call(addressx3bJqxV, uintAAvESwT, {from: accounts[3]});
		const boolXaU2Nyq = await QuickTokenMX5Tjaa.transfer.call(addresszQb0jo, uintRGn6jKl, {from: accounts[5]});
		const addressn6G2xs = await QuickTokenMX5Tjaa.mint.call(addressr0U8Y6W, uintsR80p56, {from: accounts[0]});
		const boolw2dxGAE = await QuickTokenMX5Tjaa.approve.call(addressBUzEqSL, uintjs3VvBh, {from: accounts[2]});
		const boolV7IEmoY = await QuickTokenMX5Tjaa.transferFrom.call(addressTN6n6HE, addressDG2ctH, uintz8usOqu, {from: accounts[4]});

		assert.equal(uintgMBc2fu, BigInt("0"))
		await expect(QuickTokenMX5Tjaa.mint.call(addressx3bJqxV, uintAAvESwT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressaTbO29a = accounts[3]
		const addressonkH9zf = accounts[0]
		const QuickTokennkNo70O = await QuickToken.new(addressaTbO29a, addressonkH9zf, {from: accounts[4]});
		const addressBvoqbpJ = accounts[3]
		const addressW4y2NJW = accounts[5]
		const addresszuIFkWv = accounts[3]
		const addressoPttNyw = accounts[5]
		const uintIJwmer = await QuickTokennkNo70O.balanceOf.call(addressBvoqbpJ, {from: accounts[0]});
		const uintMH24H1r = await QuickTokennkNo70O.allowance.call(addresszuIFkWv, addressW4y2NJW, {from: accounts[2]});
		const addressyCKv6aK = await QuickTokennkNo70O.setMinter.call(addressoPttNyw, {from: accounts[0]});

		assert.equal(uintIJwmer, BigInt("2000000000000"))
		assert.equal(uintMH24H1r, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressPXYVamT = accounts[5]
		const addressiXB2Evp = accounts[5]
		const QuickTokenydHjYkV = await QuickToken.new(addressPXYVamT, addressiXB2Evp, {from: accounts[0]});
		const addressJ4jzJxc = accounts[1]
		const addressu8Cqlaq = accounts[2]
		const uintfwxpcof = await QuickTokenydHjYkV.balanceOf.call(addressJ4jzJxc, {from: accounts[1]});
		const addressdPeoAyG = await QuickTokenydHjYkV.setMinter.call(addressu8Cqlaq, {from: accounts[0]});

		assert.equal(uintfwxpcof, BigInt("0"))
		await expect(QuickTokenydHjYkV.setMinter.call(addressu8Cqlaq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresspxUiB4 = accounts[0]
		const addressMLeQObZ = accounts[0]
		const QuickTokenXSK9uO8 = await QuickToken.new(addresspxUiB4, addressMLeQObZ, {from: accounts[1]});
		const addressxGAiCX3 = accounts[0]
		const uintOXmY7UC = BigInt("101")
		const addressR5mBtUx = accounts[0]
		const uinttXt9tLx = BigInt("293")
		const addressIwN4WnT = accounts[5]
		const uintRLVdcs9 = await QuickTokenXSK9uO8.balanceOf.call(addressxGAiCX3, {from: "0x0000000000000000000000000000000000000001"});
		const addresssTNujD = await QuickTokenXSK9uO8.mint.call(addressR5mBtUx, uintOXmY7UC, {from: accounts[0]});
		const boolKfM3jfp = await QuickTokenXSK9uO8.approve.call(addressIwN4WnT, uinttXt9tLx, {from: accounts[1]});

		assert.equal(boolKfM3jfp, true)
		assert.equal(uintRLVdcs9, BigInt("2000000000000"))
	});

	it('test for QuickToken', async () => {
		const addressFyFKJa = accounts[0]
		const addressBNAwsmL = accounts[0]
		const QuickTokenXSK9uO8 = await QuickToken.new(addressFyFKJa, addressBNAwsmL, {from: accounts[1]});
		const uintlyR3lZi = BigInt("139")
		const addressJlD7yIK = accounts[0]
		const uintLZGxIHu = BigInt("1815")
		const addressbV1MVol = "0x0000000000000000000000000000000000000001"
		const addressT0ACii6 = accounts[0]
		const uintUu0xkfS = BigInt("293")
		const addressgoyA1MP = accounts[4]
		const uintPiNypO = BigInt("43")
		const addressHME4k4M = accounts[0]
		const addressRfWvgud = accounts[2]
		const addressw8PV0ZU = accounts[4]
		const uintE5hOCmF = BigInt("1519")
		const addressJdJhuAe = accounts[1]
		const uintXpAOG8a = BigInt("1645")
		const addressQky9oS = "0x0000000000000000000000000000000000000000"
		const addresskpfr9dH = accounts[5]
		const addresssTNujD = await QuickTokenXSK9uO8.mint.call(addressJlD7yIK, uintlyR3lZi, {from: accounts[0]});
		const boolrjuUlSW = await QuickTokenXSK9uO8.approve.call(addressbV1MVol, uintLZGxIHu, {from: accounts[4]});
		const uintzNYZ2n9 = await QuickTokenXSK9uO8.balanceOf.call(addressT0ACii6, {from: accounts[5]});
		const boolKfM3jfp = await QuickTokenXSK9uO8.approve.call(addressgoyA1MP, uintUu0xkfS, {from: accounts[1]});
		const boologRo2v = await QuickTokenXSK9uO8.approve.call(addressHME4k4M, uintPiNypO, {from: accounts[5]});
		const uintRDoyP8s = await QuickTokenXSK9uO8.allowance.call(addressw8PV0ZU, addressRfWvgud, {from: accounts[0]});
		const boolEdS1HtS = await QuickTokenXSK9uO8.approve.call(addressJdJhuAe, uintE5hOCmF, {from: accounts[1]});
		const boolZFtS6W = await QuickTokenXSK9uO8.transfer.call(addressQky9oS, uintXpAOG8a, {from: accounts[2]});
		const addressVQAJ8Uq = await QuickTokenXSK9uO8.setMinter.call(addresskpfr9dH, {from: accounts[2]});

		assert.equal(boolEdS1HtS, true)
		assert.equal(boolKfM3jfp, true)
		assert.equal(boologRo2v, true)
		assert.equal(boolrjuUlSW, true)
		assert.equal(uintRDoyP8s, BigInt("0"))
		assert.equal(uintzNYZ2n9, BigInt("2000000000000"))
		await expect(QuickTokenXSK9uO8.transfer.call(addressQky9oS, uintXpAOG8a, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressxK2NOFU = accounts[0]
		const addressVufoIZj = accounts[0]
		const QuickTokenXSK9uO8 = await QuickToken.new(addressxK2NOFU, addressVufoIZj, {from: accounts[1]});
		const uintqy21uqh = BigInt("293")
		const addressvnD5zID = accounts[0]
		const uintoH7cgk2 = BigInt("33")
		const addressisCIGQf = accounts[3]
		const uintsIvcmom = BigInt("1364")
		const addresseQkakfS = "0x0000000000000000000000000000000000000000"
		const uintrIuyjDA = BigInt("1642")
		const addressKCjtXsC = "0x0000000000000000000000000000000000000001"
		const uintkAZFZ3R = BigInt("140")
		const addressutjN3K = "0x0000000000000000000000000000000000000001"
		const addressaurp5oP = accounts[1]
		const addressS8arhQ4 = accounts[0]
		const uintvhF2s2h = BigInt("1922")
		const addressStNp4qC = accounts[1]
		const addressPF1GAZu = accounts[3]
		const addressoAxteM6 = accounts[6]
		const uintNAfH2K0 = BigInt("1185")
		const addressTvhE7n2 = accounts[2]
		const uintRGKvTfZ = BigInt("17")
		const addressBxHwlWU = accounts[0]
		const boolKfM3jfp = await QuickTokenXSK9uO8.approve.call(addressvnD5zID, uintqy21uqh, {from: accounts[1]});
		const boologRo2v = await QuickTokenXSK9uO8.approve.call(addressisCIGQf, uintoH7cgk2, {from: accounts[5]});
		const addressCbkY6Xq = await QuickTokenXSK9uO8.mint.call(addresseQkakfS, uintsIvcmom, {from: accounts[0]});
		const boolZFtS6W = await QuickTokenXSK9uO8.transfer.call(addressKCjtXsC, uintrIuyjDA, {from: accounts[2]});
		const boolPX4Q1WW = await QuickTokenXSK9uO8.transferFrom.call(addressaurp5oP, addressutjN3K, uintkAZFZ3R, {from: accounts[2]});
		const addressMrLOgkI = await QuickTokenXSK9uO8.setMinter.call(addressS8arhQ4, {from: accounts[4]});
		const boolU6Jerh3 = await QuickTokenXSK9uO8.approve.call(addressStNp4qC, uintvhF2s2h, {from: accounts[2]});
		const uintiZM2cMH = await QuickTokenXSK9uO8.balanceOf.call(addressPF1GAZu, {from: accounts[4]});
		const addressVQAJ8Uq = await QuickTokenXSK9uO8.setMinter.call(addressoAxteM6, {from: accounts[2]});
		const boolALN73ap = await QuickTokenXSK9uO8.transfer.call(addressTvhE7n2, uintNAfH2K0, {from: accounts[1]});
		const addressMQmKDug = await QuickTokenXSK9uO8.mint.call(addressBxHwlWU, uintRGKvTfZ, {from: accounts[2]});

		assert.equal(boolKfM3jfp, true)
		assert.equal(boologRo2v, true)
		await expect(QuickTokenXSK9uO8.mint.call(addresseQkakfS, uintsIvcmom, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})