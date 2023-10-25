const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintU68H6kM = BigInt("1514")
		const stringrTwM1Pv = "LqmCJlifRNisGyCaBCxRhMzbQgorlHOtGG1TjaA"
		const stringRc3IlY = "uvtgodzf0aStuflIRz"
		const uintfTiz6Qh = BigInt("1052")
		const TetherTokenTJllUP5 = await TetherToken.new(uintU68H6kM, stringrTwM1Pv, stringRc3IlY, uintfTiz6Qh, {from: accounts[1]});
		const uintSIaIsbb = BigInt("35")
		const addressESw2CTH = accounts[1]
		const addressZAHcSZz = "0x0000000000000000000000000000000000000001"
		const uintTxrW16Q = BigInt("419")
		const addressTvRQ9ka = accounts[1]
		const addressYOiPw7a = accounts[4]
		const uintCBdJyQZ = BigInt("1009")
		const addresspz7FZ51 = accounts[0]
		const addressVK6B8VM = accounts[1]
		const uintJHmOYxx = BigInt("1879")
		const uintTI3hrVO = BigInt("1297")
		const addresse9tTWXE = accounts[1]
		const addresshvbZvO = accounts[2]
//		const addressbX9AFO9 = await TetherTokenTJllUP5.transferFrom.call(addressZAHcSZz, addressESw2CTH, uintSIaIsbb, {from: accounts[1]});
//		const addressXjgkJ4H = await TetherTokenTJllUP5.transferFrom.call(addressYOiPw7a, addressTvRQ9ka, uintTxrW16Q, {from: accounts[3]});
//		const addressn6z3qF = await TetherTokenTJllUP5.transferFrom.call(addressVK6B8VM, addresspz7FZ51, uintCBdJyQZ, {from: accounts[2]});
//		const uintu5LfDR = await TetherTokenTJllUP5.redeem.call(uintJHmOYxx, {from: accounts[2]});
//		const addressGHxjBct = await TetherTokenTJllUP5.transferFrom.call(addresshvbZvO, addresse9tTWXE, uintTI3hrVO, {from: accounts[5]});

		await expect(TetherTokenTJllUP5.transferFrom.call(addressZAHcSZz, addressESw2CTH, uintSIaIsbb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintzm7NPrW = BigInt("1047")
		const stringfGevipK = "1wzMFjEtI8zYIs7"
		const stringVlNIzGB = "18KmTpoSwe7wDtYEBALr9xyO0hoDC2bylg0cUPTRO3"
		const uintroQ8Mr1 = BigInt("1228")
		const TetherTokenAmbwZkb = await TetherToken.new(uintzm7NPrW, stringfGevipK, stringVlNIzGB, uintroQ8Mr1, {from: "0x0000000000000000000000000000000000000001"});
		const uintQbcQ9xt = BigInt("525")
		const addressoWQkvQ = accounts[0]
		const uint8Ule9x = BigInt("980")
		const uintLrCjatP = BigInt("1615")
		const uintBd2U2xU = BigInt("199")
		const addressi1T38S4 = await TetherTokenAmbwZkb.transfer.call(addressoWQkvQ, uintQbcQ9xt, {from: accounts[2]});
		const uintm9YSuJV = await TetherTokenAmbwZkb.setParams.call(uintLrCjatP, uint8Ule9x, {from: accounts[1]});
		const uintYdIBdxL = await TetherTokenAmbwZkb.redeem.call(uintBd2U2xU, {from: accounts[3]});
	});

	it('test for TetherToken', async () => {
		const uintLRSVPgT = BigInt("1303")
		const stringdJhsKWs = "PnYLaIGwBrCkJi5xaeunL6GKbRQw8veioRBBn8rB9FsNUT48cPNEeD8NETJWkQsWXmEKD0NWBb"
		const stringCccyJDb = "uy0PIbWQ2EsYFu9N1OWH0PG3J"
		const uintbHNPFLo = BigInt("965")
		const TetherTokenjHlgoop = await TetherToken.new(uintLRSVPgT, stringdJhsKWs, stringCccyJDb, uintbHNPFLo, {from: accounts[5]});
		const addressKNurYIu = accounts[3]
		const address8dZIsG = accounts[0]
		const uintR9wYYE = BigInt("290")
		const uintIkZ8w5F = await TetherTokenjHlgoop.balanceOf.call(addressKNurYIu, {from: accounts[0]});
//		const addressinVqzC1 = await TetherTokenjHlgoop.deprecate.call(address8dZIsG, {from: accounts[3]});
//		const uintMyxoNMh = await TetherTokenjHlgoop.issue.call(uintR9wYYE, {from: accounts[0]});

		assert.equal(uintIkZ8w5F, BigInt("0"))
		await expect(TetherTokenjHlgoop.deprecate.call(address8dZIsG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintL0OpsN4 = BigInt("90")
		const stringnL2114X = "eS1HMLC5QqEx1WGX3RSywQa8n1I5mQlA32jmK44I3sRP25aObqaaPcLDVoxGj9WQlp9olRkvwmxEvxf7rhn45jnklHjBAHYwaSu"
		const stringKs0u92k = "C0V2WJ4KHELai6ee1Fx0FAT3clipTE9tyZmmXo0Hv42BTdMlq5a8pczGnOzN0h5TtiKREQgpfHE35FCFsqm7Dz"
		const uintm6di2n = BigInt("424")
		const TetherTokeneQ1GZV = await TetherToken.new(uintL0OpsN4, stringnL2114X, stringKs0u92k, uintm6di2n, {from: accounts[2]});
		const uintHFIRo6 = BigInt("1361")
		const addressXz7Fvys = "0x0000000000000000000000000000000000000001"
		const uintH1nqQJh = BigInt("851")
		const uintyfjbqE0 = BigInt("481")
		const uintB3Q9LqB = await TetherTokeneQ1GZV.issue.call(uintHFIRo6, {from: accounts[2]});
		const uintWi85Y3n = await TetherTokeneQ1GZV.balanceOf.call(addressXz7Fvys, {from: "0x0000000000000000000000000000000000000001"});
//		const uintMj1R6IM = await TetherTokeneQ1GZV.setParams.call(uintyfjbqE0, uintH1nqQJh, {from: accounts[5]});

		assert.equal(uintWi85Y3n, BigInt("0"))
		await expect(TetherTokeneQ1GZV.setParams.call(uintyfjbqE0, uintH1nqQJh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintjvSB1Tk = BigInt("1024")
		const stringY1eBgsl = "kZg3PYcE60aJTM44zmwUUx4nONyMbwHowuPorOlS6qnSr6oT40AA7jNVEOzindRnyQRNKqNon9bN2JRiRcy5Ec"
		const stringB3CNO6e = "J8LRGHA7"
		const uintvuLRWeZ = BigInt("948")
		const TetherTokentqcd9cY = await TetherToken.new(uintjvSB1Tk, stringY1eBgsl, stringB3CNO6e, uintvuLRWeZ, {from: accounts[4]});
		const addresstDc6xxh = "0x0000000000000000000000000000000000000001"
		const addressgkNv0Yl = "0x0000000000000000000000000000000000000001"
		const uintX5dNlG7 = BigInt("733")
		const uintBFq2bXd = BigInt("918")
		const uintOGqWmLg = await TetherTokentqcd9cY.allowance.call(addressgkNv0Yl, addresstDc6xxh, {from: accounts[0]});
		const uintsiNyXtD = await TetherTokentqcd9cY.totalSupply.call({from: accounts[0]});
//		const uintLPOHcVo = await TetherTokentqcd9cY.redeem.call(uintX5dNlG7, {from: accounts[1]});
//		const uintyv4W2s = await TetherTokentqcd9cY.issue.call(uintBFq2bXd, {from: accounts[0]});

		assert.equal(uintOGqWmLg, BigInt("0"))
		assert.equal(uintsiNyXtD, BigInt("1024"))
		await expect(TetherTokentqcd9cY.redeem.call(uintX5dNlG7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintmGHBo0R = BigInt("1303")
		const stringdJhsKWs = "PnYLaIGwBrCkJi5xaeunL6GKbRQw8veioRBBn8rB9FsNUT48cPNEeD8NETJWkQsWXmEKD0NWBb"
		const stringCccyJDb = "uy0PIbWQ2EsYFu9N1OWH0PG3J"
		const uinttDHkW9a = BigInt("965")
		const TetherTokenjHlgoop = await TetherToken.new(uintmGHBo0R, stringdJhsKWs, stringCccyJDb, uinttDHkW9a, {from: accounts[5]});
		const addressS96bFJ7 = accounts[3]
		const uintRQmicTm = BigInt("241")
		const addressSRcGLrw = accounts[4]
		const uintqV4cSEj = BigInt("290")
		const uintIkZ8w5F = await TetherTokenjHlgoop.balanceOf.call(addressS96bFJ7, {from: accounts[0]});
		const addressHesjhsw = await TetherTokenjHlgoop.approve.call(addressSRcGLrw, uintRQmicTm, {from: "0x0000000000000000000000000000000000000001"});
//		const uintMyxoNMh = await TetherTokenjHlgoop.issue.call(uintqV4cSEj, {from: accounts[0]});

		assert.equal(uintIkZ8w5F, BigInt("0"))
		await expect(TetherTokenjHlgoop.issue.call(uintqV4cSEj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uint3UKFhO = BigInt("1303")
		const stringdJhsKWs = "PnYLaIGwBrCkJi5xaeunL6GKbRQw8veioRBBn8rB9FsNUT48cPNEeD8NETJWkQsWXmEKD0NWBb"
		const stringCccyJDb = "uy0PIbWQ2EsYFu9N1OWH0PG3J"
		const uintvW6kOq4 = BigInt("965")
		const TetherTokenjHlgoop = await TetherToken.new(uint3UKFhO, stringdJhsKWs, stringCccyJDb, uintvW6kOq4, {from: accounts[5]});
		const addressm8Jg4o6 = accounts[3]
		const uintr4gA9kT = BigInt("678")
		const addressf08NTia = accounts[2]
		const uintV4I3XZr = BigInt("241")
		const addresstx8thjv = accounts[4]
		const uintIkZ8w5F = await TetherTokenjHlgoop.balanceOf.call(addressm8Jg4o6, {from: accounts[0]});
//		const addressAUuhzKB = await TetherTokenjHlgoop.transfer.call(addressf08NTia, uintr4gA9kT, {from: accounts[1]});
//		const addressHesjhsw = await TetherTokenjHlgoop.approve.call(addresstx8thjv, uintV4I3XZr, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintIkZ8w5F, BigInt("0"))
		await expect(TetherTokenjHlgoop.transfer.call(addressf08NTia, uintr4gA9kT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})