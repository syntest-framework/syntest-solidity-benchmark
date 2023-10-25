const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintuE3Xaue = BigInt("1364")
		const string1OHV1H = "R5CUjfBBUk4e0gIjnU"
		const stringDsW6rj0 = "MsbmyPZ82uA8K"
		const uintpkMIHFL = BigInt("1270")
		const TetherTokenKOK6Eq = await TetherToken.new(uintuE3Xaue, string1OHV1H, stringDsW6rj0, uintpkMIHFL, {from: "0x0000000000000000000000000000000000000001"});
		const addressypG3cuA = accounts[3]
		const addressODTx5DY = accounts[5]
		const uintv6twq3W = BigInt("1562")
		const addressDVaxH8Q = "0x0000000000000000000000000000000000000001"
		const addressYqolrgW = accounts[3]
		const uintGecaf8P = await TetherTokenKOK6Eq.allowance.call(addressODTx5DY, addressypG3cuA, {from: accounts[2]});
		const uintWX1EgVS = await TetherTokenKOK6Eq.issue.call(uintv6twq3W, {from: accounts[4]});
		const uintw9gMT9i = await TetherTokenKOK6Eq.allowance.call(addressYqolrgW, addressDVaxH8Q, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TetherToken', async () => {
		const uintW122lIL = BigInt("989")
		const stringSbG5Pzh = "8iFs1O37PqtG7gRTNmxmIz244UK"
		const stringkVbWzWo = "lvi99FPEslGTDVhg3OwaSX0yvYXhU1w8YAdO0lLLcZjeLa0T56RInK3tbnu5ONcmoMpBCkka1EFXkXYvDNenfU2xLC"
		const uintrTdDXE0 = BigInt("622")
		const TetherTokenL3VVIkO = await TetherToken.new(uintW122lIL, stringSbG5Pzh, stringkVbWzWo, uintrTdDXE0, {from: accounts[0]});
		const uintJlfLlOi = BigInt("546")
		const addressDphdRW5 = "0x0000000000000000000000000000000000000001"
		const addressynaxe48 = accounts[5]
		const uintAxIf6gt = BigInt("1359")
		const addressRoTX0qp = accounts[1]
		const addressLFxYAc = accounts[1]
		const addressSi0Xhh = accounts[1]
		const addressvuHIMK = await TetherTokenL3VVIkO.approve.call(addressDphdRW5, uintJlfLlOi, {from: accounts[4]});
		const uintbbh4WMk = await TetherTokenL3VVIkO.balanceOf.call(addressynaxe48, {from: "0x0000000000000000000000000000000000000001"});
		const uintv4KMDBs = await TetherTokenL3VVIkO.totalSupply.call({from: accounts[1]});
//		const addressYTeUR9 = await TetherTokenL3VVIkO.transfer.call(addressRoTX0qp, uintAxIf6gt, {from: accounts[3]});
//		const addressAlAma4d = await TetherTokenL3VVIkO.deprecate.call(addressLFxYAc, {from: accounts[0]});
//		const uintWYdHvS9 = await TetherTokenL3VVIkO.balanceOf.call(addressSi0Xhh, {from: accounts[3]});

		assert.equal(uintbbh4WMk, BigInt("0"))
		assert.equal(uintv4KMDBs, BigInt("989"))
		await expect(TetherTokenL3VVIkO.transfer.call(addressRoTX0qp, uintAxIf6gt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintX5Esv3u = BigInt("1714")
		const stringL4hnIak = "FPR1Hc3xqkU3FQr5Pd9SX3o7jTfDFTeGjPxYlUeCklE6vzWEu"
		const stringc4ziMIc = "qzUaA"
		const uintdl4RKDG = BigInt("1457")
		const TetherTokenWGrG6K3 = await TetherToken.new(uintX5Esv3u, stringL4hnIak, stringc4ziMIc, uintdl4RKDG, {from: accounts[2]});
		const addressj61a3l0 = accounts[3]
		const addressDSbmtts = accounts[1]
		const addresspRzWkux = accounts[3]
		const addressYMHmubk = accounts[0]
		const addressGpmR85t = accounts[2]
		const uintByaWtVF = await TetherTokenWGrG6K3.allowance.call(addressDSbmtts, addressj61a3l0, {from: accounts[2]});
		const uintGanPoI = await TetherTokenWGrG6K3.allowance.call(addressYMHmubk, addresspRzWkux, {from: accounts[3]});
		const addressOyYki4U = await TetherTokenWGrG6K3.deprecate.call(addressGpmR85t, {from: accounts[2]});

		assert.equal(uintByaWtVF, BigInt("0"))
		assert.equal(uintGanPoI, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uintC0eioSB = BigInt("304")
		const stringg1ZT1Lm = "O8rQeGAWB"
		const stringTVYMBd2 = "8btLdFuDSFXSa4HaX1IJ"
		const uintItS249g = BigInt("509")
		const TetherTokenUOOulJr = await TetherToken.new(uintC0eioSB, stringg1ZT1Lm, stringTVYMBd2, uintItS249g, {from: accounts[5]});
		const uintVNslLux = BigInt("1123")
		const addressz4WKXR3 = accounts[0]
		const addressJCczF1f = accounts[1]
		const uintTm1cJ88 = BigInt("1084")
//		const addressziEIqVC = await TetherTokenUOOulJr.transferFrom.call(addressJCczF1f, addressz4WKXR3, uintVNslLux, {from: accounts[3]});
//		const uintxDp48C2 = await TetherTokenUOOulJr.redeem.call(uintTm1cJ88, {from: accounts[0]});
//		const uintJsWBW5C = await TetherTokenUOOulJr.totalSupply.call({from: accounts[2]});

		await expect(TetherTokenUOOulJr.transferFrom.call(addressJCczF1f, addressz4WKXR3, uintVNslLux, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintxRQlRTc = BigInt("463")
		const stringA4OiFNT = "XiPVPB8kgYvQG"
		const stringcgcSs7Z = "xyeRSbgR8DChL4tv245ler7eUe6rxybpv44y"
		const uintC4eKVih = BigInt("1151")
		const TetherTokenPJ7cplh = await TetherToken.new(uintxRQlRTc, stringA4OiFNT, stringcgcSs7Z, uintC4eKVih, {from: accounts[3]});
		const uintg2upddh = BigInt("1718")
		const addressdHgeRyQ = accounts[4]
		const address2V9WEQ = accounts[2]
		const addresscd3drM7 = accounts[3]
		const uintu76gzjK = BigInt("750")
		const addressTTgTVJ = accounts[4]
		const addressTkPNAM1 = accounts[4]
		const addresshy2TxlT = accounts[4]
		const addressoQeW6n = accounts[1]
		const addressr4l4PQR = await TetherTokenPJ7cplh.approve.call(addressdHgeRyQ, uintg2upddh, {from: accounts[2]});
		const uinthV46JkU = await TetherTokenPJ7cplh.allowance.call(addresscd3drM7, address2V9WEQ, {from: accounts[4]});
//		const uintlNODUVr = await TetherTokenPJ7cplh.redeem.call(uintu76gzjK, {from: accounts[3]});
//		const addressbvje9LJ = await TetherTokenPJ7cplh.deprecate.call(addressTTgTVJ, {from: accounts[0]});
//		const uintJVTexhk = await TetherTokenPJ7cplh.balanceOf.call(addressTkPNAM1, {from: accounts[0]});
//		const uinthOLBSa = await TetherTokenPJ7cplh.allowance.call(addressoQeW6n, addresshy2TxlT, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uinthV46JkU, BigInt("0"))
		await expect(TetherTokenPJ7cplh.redeem.call(uintu76gzjK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintKXRyt0s = BigInt("519")
		const stringEEHDjTq = "W8nyfILoGfEWxRJC1kaLVS5xSeXk2AdCGXiM6jTj9hufUxNplAiPOrZjKb3TCleBMqp8Ep6qXCHSky1Hi2Vp86P8YKz"
		const stringW6exUYg = "xRYmAj45tVCIJejWiuwVklXS8QuW9LdbmStLKlGxfk"
		const uintTqovgAW = BigInt("1115")
		const TetherTokenIy54dZu = await TetherToken.new(uintKXRyt0s, stringEEHDjTq, stringW6exUYg, uintTqovgAW, {from: accounts[1]});
		const uintp5Ludpz = BigInt("252")
		const uintGpHr8Gk = BigInt("855")
//		const uintj0LSSAJ = await TetherTokenIy54dZu.setParams.call(uintGpHr8Gk, uintp5Ludpz, {from: accounts[3]});
//		const uintyy7F74X = await TetherTokenIy54dZu.totalSupply.call({from: accounts[4]});

		await expect(TetherTokenIy54dZu.setParams.call(uintGpHr8Gk, uintp5Ludpz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintjEo4XpH = BigInt("324")
		const string4f86MY = "7gX0BOPQ"
		const stringDttARH = "5HVVuuyDEvKcirAOaVgPWz"
		const uintTSIa5YC = BigInt("1411")
		const TetherTokenQmxpGp = await TetherToken.new(uintjEo4XpH, string4f86MY, stringDttARH, uintTSIa5YC, {from: accounts[2]});
		const uintBpHwLfC = BigInt("1016")
		const addressfRmgWgH = accounts[2]
		const addressJCDcIJ = accounts[3]
		const uintL9cJbZY = BigInt("1506")
		const uintArQK5py = BigInt("2018")
//		const uintuacBH91 = await TetherTokenQmxpGp.issue.call(uintBpHwLfC, {from: accounts[4]});
//		const uintzlD1uPp = await TetherTokenQmxpGp.totalSupply.call({from: accounts[3]});
//		const uintEzTnTwD = await TetherTokenQmxpGp.allowance.call(addressJCDcIJ, addressfRmgWgH, {from: accounts[5]});
//		const uintuDovr4 = await TetherTokenQmxpGp.issue.call(uintL9cJbZY, {from: accounts[3]});
//		const uintftaXN2V = await TetherTokenQmxpGp.issue.call(uintArQK5py, {from: accounts[2]});

		await expect(TetherTokenQmxpGp.issue.call(uintBpHwLfC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintDzECgLb = BigInt("519")
		const stringEEHDjTq = "W8nyfILoGfEWxRJC1kaLVS5xSeXk2AdCGXiM6jTj9hufUxNplAiPOrZjKb3TCleBMqp8Ep6qXCHSky1Hi2Vp86P8YKz"
		const stringW6exUYg = "xRYmAj45tVCIJejWiuwVklXS8QuW9LdbmStLKlGxfk"
		const uintMf8lOrB = BigInt("1115")
		const TetherTokenIy54dZu = await TetherToken.new(uintDzECgLb, stringEEHDjTq, stringW6exUYg, uintMf8lOrB, {from: accounts[1]});
		const uinttVKYy0q = BigInt("1357")
		const uintMqdJwN = BigInt("1722")
		const uintobs3MkC = BigInt("1238")
		const addressTWFqsGf = accounts[2]
		const addresscp5fxBC = accounts[4]
		const addressng0oPPR = accounts[1]
		const uintE9hJMw = BigInt("122")
		const uintKxYJgvE = BigInt("940")
//		const uintCNPqiZY = await TetherTokenIy54dZu.setParams.call(uintMqdJwN, uinttVKYy0q, {from: accounts[1]});
//		const uintpiDraK = await TetherTokenIy54dZu.totalSupply.call({from: accounts[0]});
//		const addressfBJCqel = await TetherTokenIy54dZu.approve.call(addressTWFqsGf, uintobs3MkC, {from: accounts[0]});
//		const uintFQlATKP = await TetherTokenIy54dZu.balanceOf.call(addresscp5fxBC, {from: accounts[3]});
//		const uintqnCkNL2 = await TetherTokenIy54dZu.balanceOf.call(addressng0oPPR, {from: accounts[5]});
//		const uintyy7F74X = await TetherTokenIy54dZu.totalSupply.call({from: accounts[4]});
//		const uintSpK3qdg = await TetherTokenIy54dZu.setParams.call(uintKxYJgvE, uintE9hJMw, {from: accounts[4]});

		await expect(TetherTokenIy54dZu.setParams.call(uintMqdJwN, uinttVKYy0q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uint7YFh4U = BigInt("336")
		const stringczfvI6 = "hnwiOhOBKkYptDNb"
		const stringDAPZTp5 = "QlcQEEAy52bkK"
		const uintBVJ0phB = BigInt("1742")
		const TetherTokenTi1ZzjD = await TetherToken.new(uint7YFh4U, stringczfvI6, stringDAPZTp5, uintBVJ0phB, {from: accounts[2]});
		const uintHciUoCc = BigInt("168")
		const uintPvGdEJ = BigInt("1816")
		const addressO7q5wvu = accounts[0]
		const uintIh0pd58 = await TetherTokenTi1ZzjD.redeem.call(uintHciUoCc, {from: accounts[2]});
		const uintwhK0Cbv = await TetherTokenTi1ZzjD.totalSupply.call({from: accounts[5]});
		const addressRwph0zL = await TetherTokenTi1ZzjD.approve.call(addressO7q5wvu, uintPvGdEJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintwhK0Cbv, BigInt("336"))
	});

	it('test for TetherToken', async () => {
		const uintSwLEOg = BigInt("1024")
		const stringl4JRiKl = "IrNzeOP4YIr0OKba5IZmUySJJbmESYaMFA9flrrxOPL2ljsl7p3iipH6T7GPQOg1lXDnK1ZvI"
		const stringUHI7aQE = "u8kXh8NkdphvWhHmDPBXb4JaYg21iCteyO7lKHwiHaK8vMfPRUZIOQ0fLx1eXqzNV3JN3AGFuoij6e"
		const uintoKHn0H6 = BigInt("1574")
		const TetherTokenNWH6VHB = await TetherToken.new(uintSwLEOg, stringl4JRiKl, stringUHI7aQE, uintoKHn0H6, {from: accounts[3]});
		const addressnMnHUug = "0x0000000000000000000000000000000000000001"
		const uintgzHnSSN = BigInt("655")
		const uintIQ7DC0X = BigInt("1551")
		const addressitw9Lrl = "0x0000000000000000000000000000000000000001"
		const addressMabiWaA = accounts[0]
		const uintrGiJNkJ = await TetherTokenNWH6VHB.balanceOf.call(addressnMnHUug, {from: accounts[1]});
		const uintXkcz5nG = await TetherTokenNWH6VHB.issue.call(uintgzHnSSN, {from: accounts[3]});
//		const uintgLPeQiq = await TetherTokenNWH6VHB.issue.call(uintIQ7DC0X, {from: accounts[4]});
//		const uint4dOlZp = await TetherTokenNWH6VHB.allowance.call(addressMabiWaA, addressitw9Lrl, {from: accounts[3]});

		assert.equal(uintrGiJNkJ, BigInt("0"))
		await expect(TetherTokenNWH6VHB.issue.call(uintIQ7DC0X, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})