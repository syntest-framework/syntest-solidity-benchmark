const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintPswhTnN = BigInt("265")
		const stringgx7SPeX = "MVWpFNvUNeQ4UevUuY6iWyaKT8J8b7RFEesuqJXFD8obifhzusdys4mQCuJUGIYhmWY3pBWRRS"
		const stringxu8et0P = "kfWqXALdVGA"
		const uintCh0ugAi = BigInt("613")
		const ANRXTokenFIESWAh = await ANRXToken.new(uintPswhTnN, stringgx7SPeX, stringxu8et0P, uintCh0ugAi, {from: accounts[3]});
		const addressmuH7wTs = accounts[3]
		const uintLOGHH8S = BigInt("773")
		const addressAaEcqlB = accounts[0]
		const addresszdcBIu6 = "0x0000000000000000000000000000000000000001"
		const addressFsDUua = accounts[0]
//		const addressCXNDETJ = await ANRXTokenFIESWAh.deprecate.call(addressmuH7wTs, {from: accounts[0]});
//		const uintybwJF1 = await ANRXTokenFIESWAh.issue.call(uintLOGHH8S, {from: accounts[3]});
//		const addressjQ4DnFG = await ANRXTokenFIESWAh.deprecate.call(addressAaEcqlB, {from: accounts[2]});
//		const addressMqnFowh = await ANRXTokenFIESWAh.deprecate.call(addresszdcBIu6, {from: "0x0000000000000000000000000000000000000001"});
//		const uintfDjQm1i = await ANRXTokenFIESWAh.totalSupply.call({from: accounts[0]});
//		const addressX0u7Bxr = await ANRXTokenFIESWAh.deprecate.call(addressFsDUua, {from: accounts[2]});

		await expect(ANRXTokenFIESWAh.deprecate.call(addressmuH7wTs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintGUks7L = BigInt("1074")
		const stringMZ9YsER = "6n7Mto1FVxuQARwgluzXIlRMin79pVQTIJzqr2a74H4JiAnzoQkdpvrNEOVWleMrEHK37MGM6i8bU4j7B2yGo5Ed632ogeBJX"
		const stringHUYRz6a = "XSbLQitV34XdJqLz6osJQ5pwTzqFF8qn6x"
		const uint8u5QMX = BigInt("672")
		const ANRXTokengb60TJl = await ANRXToken.new(uintGUks7L, stringMZ9YsER, stringHUYRz6a, uint8u5QMX, {from: accounts[3]});
		const uintTtYKRCm = BigInt("1589")
		const addressNOINa0x = "0x0000000000000000000000000000000000000001"
		const addressa9fOoWe = accounts[4]
		const boolPONVru = await ANRXTokengb60TJl.approve.call(addressNOINa0x, uintTtYKRCm, {from: accounts[1]});
		const uintea8kZS = await ANRXTokengb60TJl.balanceOf.call(addressa9fOoWe, {from: accounts[2]});

		assert.equal(boolPONVru, true)
		assert.equal(uintea8kZS, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintyXJf87c = BigInt("1218")
		const stringAPjfLwh = "VFswbnqMJkaTPoZ1v6dLB6egE6X7XdzJdRw4RkJk9dGvBuIHEqrvUzURlurpcbPV7KK58qOm6Hb3WyAXqXaPGjQCyY2pIb1"
		const stringQVBIEeh = "DMPvtAppMppOQXJK6PFQjJdg3uf1Tm7sXj6LbKJFVYCY3XPyWJWTtS4gfkS"
		const uintfgNFBN = BigInt("389")
		const ANRXTokenE00fzib = await ANRXToken.new(uintyXJf87c, stringAPjfLwh, stringQVBIEeh, uintfgNFBN, {from: accounts[1]});
		const uintq6J7EMp = BigInt("1371")
		const addressxpdBDKP = accounts[1]
		const uintltzmS64 = BigInt("2001")
		const address0RcQMO = "0x0000000000000000000000000000000000000001"
		const addressLXPTBV = accounts[1]
		const uintrIwWbBJ = BigInt("157")
		const uintUL6JvvP = BigInt("166")
		const uintBWWQ3tb = BigInt("1848")
		const uintthzMG1U = BigInt("1155")
		const boolW2Xu9w3 = await ANRXTokenE00fzib.approve.call(addressxpdBDKP, uintq6J7EMp, {from: accounts[0]});
//		const boolfncgBJc = await ANRXTokenE00fzib.transferFrom.call(addressLXPTBV, address0RcQMO, uintltzmS64, {from: accounts[4]});
//		const uintWF1Aoo0 = await ANRXTokenE00fzib.redeem.call(uintrIwWbBJ, {from: accounts[0]});
//		const uintClXvCQ2 = await ANRXTokenE00fzib.setParams.call(uintBWWQ3tb, uintUL6JvvP, {from: accounts[1]});
//		const uintBCZgX8A = await ANRXTokenE00fzib.issue.call(uintthzMG1U, {from: accounts[2]});

		assert.equal(boolW2Xu9w3, true)
		await expect(ANRXTokenE00fzib.transferFrom.call(addressLXPTBV, address0RcQMO, uintltzmS64, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintYxiw86 = BigInt("426")
		const stringEFxQEf7 = "3iC7awnIY3cIQRhUXZB2"
		const stringwlpohem = "BzIN4Prx2ckq4QjLe2T2pzRbTzXrix1GphOkpT6WwELdmaPt8enZVXgONSRvdN2gkUH0IDmNp6EuMBcmtxYea5cJA8"
		const uintrBQ9sDi = BigInt("1806")
		const ANRXTokensX3Urh = await ANRXToken.new(uintYxiw86, stringEFxQEf7, stringwlpohem, uintrBQ9sDi, {from: accounts[4]});
		const addresstjoDU5Z = accounts[2]
		const uintxLulG6a = BigInt("58")
		const uintTL8DZ1M = BigInt("1633")
		const uintgMekj7 = await ANRXTokensX3Urh.totalSupply.call({from: accounts[2]});
		const uintsEcdMdb = await ANRXTokensX3Urh.balanceOf.call(addresstjoDU5Z, {from: accounts[1]});
		const uintJy8zCu4 = await ANRXTokensX3Urh.totalSupply.call({from: accounts[4]});
//		const uintIGZpkX5 = await ANRXTokensX3Urh.setParams.call(uintTL8DZ1M, uintxLulG6a, {from: accounts[1]});

		assert.equal(uintJy8zCu4, BigInt("426"))
		assert.equal(uintgMekj7, BigInt("426"))
		assert.equal(uintsEcdMdb, BigInt("0"))
		await expect(ANRXTokensX3Urh.setParams.call(uintTL8DZ1M, uintxLulG6a, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintlQfqPZh = BigInt("598")
		const stringzPSoNjC = "XVxz2xKWqzLg9zAseBHqhmINtJN93mEdYiDrCtQvSSuMeOEoWty1lUpa2miIf"
		const stringhUXI4MQ = "PhzzxzQI91JAWigBq25akCYkf1wXdXTdou2KEfe5HS2psPUKe6CcFND3jWsEgi8ePV6jotyg4PtB"
		const uintne3C2zW = BigInt("59")
		const ANRXTokenLH4MUgR = await ANRXToken.new(uintlQfqPZh, stringzPSoNjC, stringhUXI4MQ, uintne3C2zW, {from: "0x0000000000000000000000000000000000000001"});
		const uintuAcfy36 = BigInt("1438")
		const addressujZVlWm = accounts[2]
		const uintKstG3n9 = BigInt("741")
		const boolX7NfqQ = await ANRXTokenLH4MUgR.approve.call(addressujZVlWm, uintuAcfy36, {from: accounts[2]});
		const uintPGnxbd4 = await ANRXTokenLH4MUgR.issue.call(uintKstG3n9, {from: accounts[1]});
	});

	it('test for ANRXToken', async () => {
		const uintBJV7jpS = BigInt("606")
		const stringyTqw7Y4 = "FCnpb1fF0qPnBxfV04kb08arDpvCPJOTQGL8eezuiFk5G5we8MgzECtJnvmyupANW4YmneYfwaNlEIlQ"
		const stringHtqPLJZ = "A8MVLJLCVaxJOEIPN0AtmNu603jHxmqD1ZRrbRIMtr2rlO7RfMqIEvs"
		const uintvsBSywi = BigInt("585")
		const ANRXTokenCpaiuXR = await ANRXToken.new(uintBJV7jpS, stringyTqw7Y4, stringHtqPLJZ, uintvsBSywi, {from: accounts[3]});
		const uintJxnJsFi = BigInt("286")
		const addressnyshfAt = accounts[2]
		const addressBCzhV9i = accounts[2]
		const addressIACei61 = accounts[4]
		const addressc765YVS = accounts[3]
		const addressjvaQiYt = accounts[1]
		const addresszwn5xeQ = accounts[2]
		const uinttCdAKts = BigInt("240")
		const addressh2GPDY2 = accounts[4]
		const boolNPlARIM = await ANRXTokenCpaiuXR.approve.call(addressnyshfAt, uintJxnJsFi, {from: accounts[5]});
		const uintEkC2y4V = await ANRXTokenCpaiuXR.balanceOf.call(addressBCzhV9i, {from: accounts[0]});
		const uintcYIvZ09 = await ANRXTokenCpaiuXR.balanceOf.call(addressIACei61, {from: "0x0000000000000000000000000000000000000001"});
		const uintJHfRrtr = await ANRXTokenCpaiuXR.balanceOf.call(addressc765YVS, {from: accounts[1]});
		const uintLIc1p2e = await ANRXTokenCpaiuXR.allowance.call(addresszwn5xeQ, addressjvaQiYt, {from: accounts[5]});
		const boolC2MHQQB = await ANRXTokenCpaiuXR.approve.call(addressh2GPDY2, uinttCdAKts, {from: accounts[1]});

		assert.equal(boolC2MHQQB, true)
		assert.equal(boolNPlARIM, true)
		assert.equal(uintEkC2y4V, BigInt("0"))
		assert.equal(uintJHfRrtr, BigInt("606"))
		assert.equal(uintLIc1p2e, BigInt("0"))
		assert.equal(uintcYIvZ09, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintWU1HxVg = BigInt("1074")
		const stringMZ9YsER = "6n7Mto1FVxuQARwgluzXIlRMin79pVQTIJzqr2a74H4JiAnzoQkdpvrNEOVWleMrEHK37MGM6i8bU4j7B2yGo5Ed632ogeBJX"
		const stringHUYRz6a = "XSbLQitV34XdJqLz6osJQ5pwTzqFF8qn6x"
		const uintGJPARdl = BigInt("672")
		const ANRXTokengb60TJl = await ANRXToken.new(uintWU1HxVg, stringMZ9YsER, stringHUYRz6a, uintGJPARdl, {from: accounts[3]});
		const uintmrvG05 = BigInt("1880")
		const addressHJJtVHV = accounts[0]
		const address7D9ArH = accounts[1]
		const uintPFpw8Dj = BigInt("1589")
		const addressW822YR8 = "0x0000000000000000000000000000000000000002"
//		const boolSIg3sy = await ANRXTokengb60TJl.transfer.call(addressHJJtVHV, uintmrvG05, {from: accounts[4]});
//		const addressZjHVJAx = await ANRXTokengb60TJl.deprecate.call(address7D9ArH, {from: accounts[0]});
//		const boolPONVru = await ANRXTokengb60TJl.approve.call(addressW822YR8, uintPFpw8Dj, {from: accounts[1]});

		await expect(ANRXTokengb60TJl.transfer.call(addressHJJtVHV, uintmrvG05, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintkFQ9cma = BigInt("1074")
		const stringMZ9YsER = "6n7Mto1FVxuQARwgluzXIlRMin79pVQTIJzqr2a74H4JiAnzoQkdpvrNEOVWleMrEHK37MGM6i8bU4j7B2yGo5Ed632ogeBJX"
		const stringHUYRz6a = "XSbLQitV34XdJqLz6osJQ5pwTzqFF8qn6x"
		const uintqbLja1 = BigInt("672")
		const ANRXTokengb60TJl = await ANRXToken.new(uintkFQ9cma, stringMZ9YsER, stringHUYRz6a, uintqbLja1, {from: accounts[3]});
		const uinteUnV2P = BigInt("1589")
		const addressxhPYzux = "0x0000000000000000000000000000000000000001"
		const uintyfjFJv = BigInt("1535")
		const boolPONVru = await ANRXTokengb60TJl.approve.call(addressxhPYzux, uinteUnV2P, {from: accounts[1]});
//		const uintEJLu3Ls = await ANRXTokengb60TJl.redeem.call(uintyfjFJv, {from: accounts[3]});

		assert.equal(boolPONVru, true)
		await expect(ANRXTokengb60TJl.redeem.call(uintyfjFJv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintxF6HLv = BigInt("1850")
		const stringWLCRENp = "9xYBQ8f4q4kX0w7eGXByeVVeaF5gLw6HzgsTavYr9YgCVgh5T4MqfVs"
		const stringVSarM8I = "ynGwL7H64F8bk1x"
		const uintf7OEaLR = BigInt("184")
		const ANRXTokenZxJAkP = await ANRXToken.new(uintxF6HLv, stringWLCRENp, stringVSarM8I, uintf7OEaLR, {from: accounts[4]});
		const uintnRP2HJ8 = BigInt("1556")
		const addressg5TqROV = accounts[0]
		const uintnP3e9g1 = BigInt("1370")
		const uintqrUGMvI = BigInt("1073")
		const uintQB9CbYD = BigInt("342")
		const addressBjqHAfa = accounts[1]
		const addressIOOjhuj = accounts[1]
		const uinta6hk3EZ = await ANRXTokenZxJAkP.issue.call(uintnRP2HJ8, {from: accounts[4]});
//		const addressmxr8waD = await ANRXTokenZxJAkP.deprecate.call(addressg5TqROV, {from: "0x0000000000000000000000000000000000000001"});
//		const uintmhYt966 = await ANRXTokenZxJAkP.issue.call(uintnP3e9g1, {from: accounts[3]});
//		const uintjq6Repr = await ANRXTokenZxJAkP.totalSupply.call({from: accounts[4]});
//		const uintP5gGPu = await ANRXTokenZxJAkP.setParams.call(uintQB9CbYD, uintqrUGMvI, {from: accounts[1]});
//		const uintzJW2qN4 = await ANRXTokenZxJAkP.allowance.call(addressIOOjhuj, addressBjqHAfa, {from: accounts[0]});

		await expect(ANRXTokenZxJAkP.deprecate.call(addressg5TqROV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintsxy9o3h = BigInt("1074")
		const stringMZ9YsER = "6n7Mto1FVxuQARwgluzXIlRMin79pVQTIJzqr2a74H4JiAnzoQkdpvrNEOVWleMrEHK37MGM6i8bU4j7B2yGo5Ed632ogeBJX"
		const stringHUYRz6a = "XSbLQitV34XdJqLz6osJQ5pwTzqFF8qn6x"
		const uint6CbPJs = BigInt("672")
		const ANRXTokengb60TJl = await ANRXToken.new(uintsxy9o3h, stringMZ9YsER, stringHUYRz6a, uint6CbPJs, {from: accounts[3]});
		const addressnUZTDxm = accounts[1]
		const addressTyV3Xbb = accounts[0]
		const addressaCSFp1c = accounts[4]
		const addressVJSEfXY = accounts[5]
		const addressz52sqOT = await ANRXTokengb60TJl.deprecate.call(addressnUZTDxm, {from: accounts[3]});
		const uintrfegsVG = await ANRXTokengb60TJl.allowance.call(addressaCSFp1c, addressTyV3Xbb, {from: accounts[2]});
		const uintea8kZS = await ANRXTokengb60TJl.balanceOf.call(addressVJSEfXY, {from: accounts[2]});

		assert.equal(uintea8kZS, BigInt("0"))
		assert.equal(uintrfegsVG, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintHtg5g6r = BigInt("1074")
		const stringMZ9YsER = "6n7Mto1FVxuQARwgluzXIlRMin79pVQTIJzqr2a74H4JiAnzoQkdpvrNEOVWleMrEHK37MGM6i8bU4j7B2yGo5Ed632ogeBJX"
		const stringHUYRz6a = "XSbLQitV34XdJqLz6osJQ5pwTzqFF8qn6x"
		const uintZRyHv2 = BigInt("672")
		const ANRXTokengb60TJl = await ANRXToken.new(uintHtg5g6r, stringMZ9YsER, stringHUYRz6a, uintZRyHv2, {from: accounts[3]});
		const uintIkb98lP = BigInt("974")
		const addressNyYWjGJ = accounts[2]
		const uinteJhdxVe = BigInt("81")
		const uintlVNlsmC = BigInt("613")
		const addressnrShnuR = accounts[5]
		const addressFB42yot = accounts[2]
		const uintXEKWTgf = BigInt("1589")
		const addressf4IUKDd = "0x0000000000000000000000000000000000000001"
		const addressq4y0UA = "0x0000000000000000000000000000000000000000"
		const uintKFg9xtj = BigInt("1984")
		const addressloG2u4E = accounts[3]
		const addressPwD8TK = accounts[2]
		const addresspiWp0c = accounts[3]
		const uintpWKAiJ = BigInt("689")
		const addressqL0SjOP = accounts[0]
		const uintNsfoqmw = BigInt("1368")
		const addresstVT8wdp = accounts[5]
		const addressGyyfJ1n = accounts[4]
		const uintTJoFcj = BigInt("624")
		const addressfaDLQMH = accounts[0]
		const addressn5IRoaA = accounts[4]
		const uintbhTflxg = BigInt("509")
		const uintnV30jZq = BigInt("1651")
		const boolWeyj3PC = await ANRXTokengb60TJl.approve.call(addressNyYWjGJ, uintIkb98lP, {from: accounts[1]});
//		const uintooYbxCF = await ANRXTokengb60TJl.setParams.call(uintlVNlsmC, uinteJhdxVe, {from: accounts[3]});
//		const uinte35qs8c = await ANRXTokengb60TJl.allowance.call(addressFB42yot, addressnrShnuR, {from: accounts[3]});
//		const boolPONVru = await ANRXTokengb60TJl.approve.call(addressf4IUKDd, uintXEKWTgf, {from: accounts[1]});
//		const uintMU12Z1L = await ANRXTokengb60TJl.balanceOf.call(addressq4y0UA, {from: accounts[3]});
//		const boolULCtkUz = await ANRXTokengb60TJl.transfer.call(addressloG2u4E, uintKFg9xtj, {from: accounts[4]});
//		const uintjRwfoQc = await ANRXTokengb60TJl.allowance.call(addresspiWp0c, addressPwD8TK, {from: accounts[2]});
//		const boolKZvSKic = await ANRXTokengb60TJl.transfer.call(addressqL0SjOP, uintpWKAiJ, {from: accounts[0]});
//		const boolfpZHa1J = await ANRXTokengb60TJl.transferFrom.call(addressGyyfJ1n, addresstVT8wdp, uintNsfoqmw, {from: accounts[0]});
//		const boolu3QfgXR = await ANRXTokengb60TJl.transferFrom.call(addressn5IRoaA, addressfaDLQMH, uintTJoFcj, {from: accounts[2]});
//		const uintgxtIIH6 = await ANRXTokengb60TJl.redeem.call(uintbhTflxg, {from: accounts[3]});
//		const uintrEtLjQq = await ANRXTokengb60TJl.redeem.call(uintnV30jZq, {from: accounts[0]});

		assert.equal(boolWeyj3PC, true)
		await expect(ANRXTokengb60TJl.setParams.call(uintlVNlsmC, uinteJhdxVe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})