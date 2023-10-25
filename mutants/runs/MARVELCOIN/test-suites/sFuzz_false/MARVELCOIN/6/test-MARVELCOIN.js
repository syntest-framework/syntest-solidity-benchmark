const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintwKnmJua = BigInt("1662")
		const stringLhae9jM = ""
		const stringa7KuWwH = "l8xLOgxmvsCF0KggyvFQtSuGiBG5ER9mnUTWtDiP0QWIzTTC7GQgnvEeWtB5"
		const MARVELCOINoDCaAi = await MARVELCOIN.new(uintwKnmJua, stringLhae9jM, stringa7KuWwH, {from: accounts[3]});
		const byteGgjhYUC = "0x1e1c170f141d101809011e190f07090b061c11110d160b10080f0e1b"
		const uintMVkVbHE = BigInt("475")
		const addressTt5TMEl = accounts[0]
		const bytensJkpSM = "0x011b1c06150c0c1d0109170a0905150b1f030406090b05130f"
		const uintHdJpWJA = BigInt("195")
		const addressDVpk0VR = accounts[0]
		const uinthCYbrTQ = BigInt("205")
		const addressyiFtKUW = accounts[2]
		const boolZ9Jhh9f = await MARVELCOINoDCaAi.approveAndCall.call(addressTt5TMEl, uintMVkVbHE, byteGgjhYUC, {from: accounts[4]});
		const boolqqKxlwG = await MARVELCOINoDCaAi.approveAndCall.call(addressDVpk0VR, uintHdJpWJA, bytensJkpSM, {from: accounts[1]});
		const boolbQULGBB = await MARVELCOINoDCaAi.approve.call(addressyiFtKUW, uinthCYbrTQ, {from: accounts[0]});

		await expect(MARVELCOINoDCaAi.approveAndCall.call(addressTt5TMEl, uintMVkVbHE, byteGgjhYUC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintmwZEMON = BigInt("1320")
		const stringSwoepwI = "5ERxLTN4AKRXfULtyYTVMHr"
		const stringlm7ZsIF = "svi5zsjsa9gBggZOcItnrINQ6EYW9FAQhHJ9VfrFgG5fg0BHe4zvFT2iQ5YRjQ"
		const MARVELCOINT7hK5rw = await MARVELCOIN.new(uintmwZEMON, stringSwoepwI, stringlm7ZsIF, {from: accounts[3]});
		const uintTpNYFRW = BigInt("235")
		const addressqNu5Ed1 = accounts[1]
		const uintTIA9ZQl = BigInt("1227")
		const addressJV6q3sx = accounts[1]
		const addresspd1o5Tq = accounts[1]
		const byteeyA2e6y = "0x0c140c170a"
		const uintr4eUuzx = BigInt("478")
		const address9ZZl3C = accounts[2]
		const boold4n0oLZ = await MARVELCOINT7hK5rw.transfer.call(addressqNu5Ed1, uintTpNYFRW, {from: accounts[0]});
		const boolCpG6gzs = await MARVELCOINT7hK5rw.transferFrom.call(addresspd1o5Tq, addressJV6q3sx, uintTIA9ZQl, {from: accounts[3]});
		const boolW7LMw4e = await MARVELCOINT7hK5rw.approveAndCall.call(address9ZZl3C, uintr4eUuzx, byteeyA2e6y, {from: accounts[0]});

		await expect(MARVELCOINT7hK5rw.transfer.call(addressqNu5Ed1, uintTpNYFRW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintu4WqHlE = BigInt("179")
		const stringxRmM712 = "8WTUbA0dyeQrgmoLIstKEyb9vWAt8rOd4KCg3Q"
		const stringuNQnZgo = "fQVz66CwuqrbQFVodnwGwyu9awvbKBIxoyIeEwGKVJ69rUJb6yrSILMzmU1eyYEOFreQj66"
		const MARVELCOINLwMafP5 = await MARVELCOIN.new(uintu4WqHlE, stringxRmM712, stringuNQnZgo, {from: accounts[3]});
		const uintRc6AvNk = BigInt("909")
		const addressMbHWWXB = accounts[1]
		const uintN1nhVbX = BigInt("718")
		const addressIjBEY1J = accounts[4]
		const addressmZpcB0n = accounts[4]
		const boolM6QJ28U = await MARVELCOINLwMafP5.transfer.call(addressMbHWWXB, uintRc6AvNk, {from: accounts[3]});
		const boolIMWbYV = await MARVELCOINLwMafP5.transferFrom.call(addressmZpcB0n, addressIjBEY1J, uintN1nhVbX, {from: accounts[3]});

		assert.equal(boolM6QJ28U, true)
		await expect(MARVELCOINLwMafP5.transferFrom.call(addressmZpcB0n, addressIjBEY1J, uintN1nhVbX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintA9A6Un1 = BigInt("1762")
		const stringLG65PcV = "zPcDgJDx8wSaTiDSdOs2jTuQ1uXNhbxzQ6EQulu28y0oJht3GF8QT7rpexCSwOAkRX3w0ltH7h8Ih0WpS6R4QwcXEpgfM5T44j"
		const stringc7pV4yC = "hE588kUz5RTJ8mAccZLWpwQXIjr4Zy9SbLdHw7OgPRWqBFeYOl4pMaR6"
		const MARVELCOINQFprYzg = await MARVELCOIN.new(uintA9A6Un1, stringLG65PcV, stringc7pV4yC, {from: accounts[0]});
		const uintqApK2b6 = BigInt("408")
		const uinttrtUrh = BigInt("828")
		const addressw5xLXwO = accounts[2]
		const boolhuTnTYs = await MARVELCOINQFprYzg.burn.call(uintqApK2b6, {from: "0x0000000000000000000000000000000000000001"});
		const bool5QTkWw = await MARVELCOINQFprYzg.transfer.call(addressw5xLXwO, uinttrtUrh, {from: accounts[3]});

		await expect(MARVELCOINQFprYzg.burn.call(uintqApK2b6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintjQvF13r = BigInt("1289")
		const stringeszPvI5 = "166nIl1EwCcfyjJbKaSfYpIBkOoQ4SCKAr1Ky4IXO5kErR7ozoA34mmBFGIdhWLNBJrKjk"
		const stringXuMU4tb = "b3J"
		const MARVELCOINLPs9ey9 = await MARVELCOIN.new(uintjQvF13r, stringeszPvI5, stringXuMU4tb, {from: accounts[3]});
		const uintys8cW2W = BigInt("541")
		const addressp3DxCfF = accounts[4]
		const uintUHPUooO = BigInt("1974")
		const addressKDqJF3C = accounts[3]
		const boolxEO0M8L = await MARVELCOINLPs9ey9.burnFrom.call(addressp3DxCfF, uintys8cW2W, {from: accounts[4]});
		const boolhgPHdjc = await MARVELCOINLPs9ey9.approve.call(addressKDqJF3C, uintUHPUooO, {from: accounts[0]});

		await expect(MARVELCOINLPs9ey9.burnFrom.call(addressp3DxCfF, uintys8cW2W, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintlOQ1UJ = BigInt("1855")
		const stringRHJMUpc = "M1hLW9A6MP5Wg0aR7Tqg6LR56JUw7RPjdW8s1RM2QoV5RwviQuQ81HWuWYzQ6zPmFh5Dd15HIzI4QGCF1z3knRw9"
		const stringLxfeTad = "6aAfPnXnwMavTDmPp8rD82zBF2Lv"
		const MARVELCOIN85IMP8 = await MARVELCOIN.new(uintlOQ1UJ, stringRHJMUpc, stringLxfeTad, {from: "0x0000000000000000000000000000000000000001"});
		const bytelJPGyyx = "0x16021805150d1511131103201c01200d0a071c03051d"
		const uintoCoRIVp = BigInt("195")
		const addressWQpbvwU = accounts[4]
		const uinthNOmrF7 = BigInt("457")
		const addressVw9pdgM = accounts[4]
		const addressNxQbtff = accounts[4]
		const uintcdYts2C = BigInt("1851")
		const booloy7SXyy = await MARVELCOIN85IMP8.approveAndCall.call(addressWQpbvwU, uintoCoRIVp, bytelJPGyyx, {from: accounts[0]});
		const boolztSrMFQ = await MARVELCOIN85IMP8.transferFrom.call(addressNxQbtff, addressVw9pdgM, uinthNOmrF7, {from: accounts[3]});
		const boolQDPk0NQ = await MARVELCOIN85IMP8.burn.call(uintcdYts2C, {from: accounts[3]});
	});
})