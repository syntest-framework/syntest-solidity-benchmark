const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringPZElbq1 = "40p18yQxfMygpkKdUHrKjFU5lV2SzghAEPEvvW56B"
		const stringPss3hhp = "Oof4UwvqkABzGr9vAaGuQfKeSpqAi5YDxJObTaGnkA7dJbe1BuLYDmLMVeXBCl2XeNYVmJKl3GugJrzUNpNREOPIilyG"
		const uintbrO0qU2 = BigInt("1404")
		const WOLFVYjsbP6 = await WOLF.new(stringPZElbq1, stringPss3hhp, uintbrO0qU2, {from: accounts[2]});
		const uintzMGY7nP = BigInt("1736")
		const addresskRVRSkp = accounts[1]
		const uint4IcOon = BigInt("1376")
		const addressdbTDEVP = accounts[5]
		const uintLHJfOTl = BigInt("188")
		const addressSV1Xrp0 = accounts[1]
		const boolZvJdGpK = await WOLFVYjsbP6.transfer.call(addresskRVRSkp, uintzMGY7nP, {from: accounts[2]});
		const boolUGlMbe7 = await WOLFVYjsbP6.transfer.call(addressdbTDEVP, uint4IcOon, {from: accounts[3]});
		const bool1RMcwO = await WOLFVYjsbP6.approve.call(addressSV1Xrp0, uintLHJfOTl, {from: accounts[4]});

		assert.equal(boolZvJdGpK, true)
		await expect(WOLFVYjsbP6.transfer.call(addressdbTDEVP, uint4IcOon, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringsQsOWc = "YnwREshewcO0lkUxy8ddNGQjoNcuAu9cGl4fiNXEZ2TnDjdi6Qtg3HPh82o5AwiKsT6DGORsriYoye1PYWrx4ol0IKiFk9rtof"
		const stringaW5BE9w = "lhf9s771U6l7WNoxuBdpNDOTqrKSEIEDJFFYIBM4jbib6l4LEYin4hFGDv6l8wwElBEn3eAa6MNFZkz26hNgURraex"
		const uintPp0iGxA = BigInt("1829")
		const WOLFDlCi7WE = await WOLF.new(stringsQsOWc, stringaW5BE9w, uintPp0iGxA, {from: accounts[0]});
		const uintbtHNgC4 = BigInt("948")
		const addressvxydNnn = accounts[1]
		const uintXrcF8O2 = BigInt("366")
		const addressldcPhIn = accounts[2]
		const addressqYvZvRU = accounts[2]
		const uintuShYsvy = BigInt("360")
		const addressvZNKeZ8 = accounts[0]
		const addresspNlgy9Z = accounts[4]
		const boolOCHItwj = await WOLFDlCi7WE.approveAndCall.call(addressvxydNnn, uintbtHNgC4, {from: accounts[5]});
		const boolJjtLYqs = await WOLFDlCi7WE.approveAndCall.call(addressldcPhIn, uintXrcF8O2, {from: accounts[4]});
		const boolxG5VZL0 = await WOLFDlCi7WE.transferownership.call(addressqYvZvRU, {from: accounts[3]});
		const boolZ92Efdu = await WOLFDlCi7WE.transferFrom.call(addresspNlgy9Z, addressvZNKeZ8, uintuShYsvy, {from: accounts[2]});

		await expect(WOLFDlCi7WE.approveAndCall.call(addressvxydNnn, uintbtHNgC4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringczRTLf = "zcQ0lwUp78fKYLsLDK2yyteWXttj6xsuHSiBXdtsCYfVxY9sOehOb9df2emA6kMM4PE2rY7qRV65jEKNqfSJ"
		const stringAmYjyqm = "9fBluXfTtm17QPuBJAlxtQyXkNCt01lKwwhRjgR3kaU4rwMeEyg0o3is1QDT2Q5vtzeys8DQR8jpDQAl505m31S"
		const uintj7ZwknA = BigInt("1028")
		const WOLFmyNsv6T = await WOLF.new(stringczRTLf, stringAmYjyqm, uintj7ZwknA, {from: accounts[2]});
		const uintnFCKLJ = BigInt("963")
		const addressP9HwV2m = accounts[4]
		const uintatSGZEu = BigInt("328")
		const addressQmrt9UG = accounts[5]
		const uintcoH8CnT = BigInt("1717")
		const addressMdRvGR5 = accounts[2]
		const addresshRRIobQ = accounts[0]
		const uintReS3Wb = BigInt("178")
		const addresszxMRoIZ = accounts[1]
		const bool37uVVT = await WOLFmyNsv6T.approveAndCall.call(addressP9HwV2m, uintnFCKLJ, {from: accounts[2]});
		const boolVQEwqyk = await WOLFmyNsv6T.approve.call(addressQmrt9UG, uintatSGZEu, {from: accounts[0]});
		const boolkmukZnf = await WOLFmyNsv6T.transferFrom.call(addresshRRIobQ, addressMdRvGR5, uintcoH8CnT, {from: accounts[4]});
		const boolF4tI6pW = await WOLFmyNsv6T.transfer.call(addresszxMRoIZ, uintReS3Wb, {from: accounts[4]});

		assert.equal(bool37uVVT, true)
		assert.equal(boolVQEwqyk, true)
		await expect(WOLFmyNsv6T.transferFrom.call(addresshRRIobQ, addressMdRvGR5, uintcoH8CnT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringRdAPFJ = "qgA6pNnQeC8MYVzf9YG1SopJ31H2rfkTIg8JSKzPW1Y"
		const stringIdpZRDA = "oj7WSa7a77REaOmx5myhcfw2sqrpxp0PouOyiIKTWjyQMgiUeRU5V7f"
		const uinteOY9JRx = BigInt("1361")
		const WOLFgc145de = await WOLF.new(stringRdAPFJ, stringIdpZRDA, uinteOY9JRx, {from: "0x0000000000000000000000000000000000000001"});
		const uintjId86tB = BigInt("1187")
		const addresshj9bGp8 = accounts[3]
		const addresswCSQvlD = accounts[2]
		const uintyuZJTe1 = BigInt("1238")
		const addressvopaUAo = accounts[3]
		const uintu308hpg = BigInt("1589")
		const addressPayLPN = "0x0000000000000000000000000000000000000001"
		const addressTHOw4AN = accounts[1]
		const uintmGXk3Hn = BigInt("60")
		const addressTRPwLD = accounts[4]
		const addresswrpqqWy = accounts[1]
		const boolxbEyyaO = await WOLFgc145de.transferFrom.call(addresswCSQvlD, addresshj9bGp8, uintjId86tB, {from: "0x0000000000000000000000000000000000000001"});
		const boolJbgVLdB = await WOLFgc145de.approveAndCall.call(addressvopaUAo, uintyuZJTe1, {from: accounts[1]});
		const boolvqXdXQh = await WOLFgc145de.transferFrom.call(addressTHOw4AN, addressPayLPN, uintu308hpg, {from: accounts[4]});
		const boolvBlHaJm = await WOLFgc145de.transferFrom.call(addresswrpqqWy, addressTRPwLD, uintmGXk3Hn, {from: accounts[5]});
	});

	it('test for WOLF', async () => {
		const string2XZIO5 = "PKlqAOc5rV2MO1FkcNE6GQf9QE3ts4rpVXb3YlLuL"
		const stringtjfP84n = "g"
		const uintuITYkl = BigInt("603")
		const WOLFfkkRT8 = await WOLF.new(string2XZIO5, stringtjfP84n, uintuITYkl, {from: accounts[2]});
		const uintMAylv1R = BigInt("795")
		const addressNSOmrbW = accounts[3]
		const uintwvif4RE = BigInt("1226")
		const addressNosaXJw = accounts[4]
		const addressLTiZplD = accounts[3]
		const boolal1GwdK = await WOLFfkkRT8.approve.call(addressNSOmrbW, uintMAylv1R, {from: accounts[5]});
		const boolHbQ4g6F = await WOLFfkkRT8.approve.call(addressNosaXJw, uintwvif4RE, {from: accounts[3]});
		const boolisaLp2e = await WOLFfkkRT8.transferownership.call(addressLTiZplD, {from: accounts[1]});

		assert.equal(boolHbQ4g6F, true)
		assert.equal(boolal1GwdK, true)
		await expect(WOLFfkkRT8.transferownership.call(addressLTiZplD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringrdSN4W6 = "ne7f76pK8OtbnhsnVop7kOsFUzdceXTkxVI91mgOjtM7Uprfv2Dxl"
		const stringYhK4ApJ = "Z"
		const uinta4sferv = BigInt("1021")
		const WOLFfq0LHeQ = await WOLF.new(stringrdSN4W6, stringYhK4ApJ, uinta4sferv, {from: accounts[4]});
		const uintXnXN0S9 = BigInt("98")
		const addressyHiEz0p = accounts[4]
		const uintr18ETTA = BigInt("0")
		const addressgivnFny = accounts[5]
		const boolEqYmHLL = await WOLFfq0LHeQ.approve.call(addressyHiEz0p, uintXnXN0S9, {from: accounts[4]});
		const boolpJ6RqN = await WOLFfq0LHeQ.transfer.call(addressgivnFny, uintr18ETTA, {from: accounts[0]});

		assert.equal(boolEqYmHLL, true)
		assert.equal(boolpJ6RqN, true)
	});

	it('test for WOLF', async () => {
		const string2XZIO5 = "PKlqAOc5rV2MO1FkcNE6GQf9QE3ts4rpVXb3YlLuL"
		const stringtjfP84n = "g"
		const uintIW6FxIj = BigInt("603")
		const WOLFfkkRT8 = await WOLF.new(string2XZIO5, stringtjfP84n, uintIW6FxIj, {from: accounts[2]});
		const addressIdP2zKi = accounts[4]
		const addressh05mnFi = accounts[1]
		const addressLrCjIwY = accounts[3]
		const boolWUR97k2 = await WOLFfkkRT8.transferownership.call(addressIdP2zKi, {from: accounts[2]});
		const boolcMCyouL = await WOLFfkkRT8.transferownership.call(addressh05mnFi, {from: accounts[4]});
		const boolisaLp2e = await WOLFfkkRT8.transferownership.call(addressLrCjIwY, {from: accounts[1]});

		assert.equal(boolWUR97k2, true)
		await expect(WOLFfkkRT8.transferownership.call(addressh05mnFi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringSX90Id0 = "6hXDMAeXBZyP"
		const stringq0v91RJ = "VUvL1oVhyhcOEtat0lc8PlP9OnqLe7ShaoWsd8oqZ8apTodB7RVTkzmjgl"
		const uintcFaWLng = BigInt("1895")
		const WOLFptr6kdE = await WOLF.new(stringSX90Id0, stringq0v91RJ, uintcFaWLng, {from: accounts[4]});
		const uintsB071a8 = BigInt("83")
		const addressb4vYpbq = accounts[2]
		const uintdruqqxh = BigInt("0")
		const addressSy7HpmE = "0x0000000000000000000000000000000000000001"
		const uintThwCUqr = BigInt("26")
		const addresszD1cqSU = accounts[1]
		const uintV0pSoWk = BigInt("318")
		const addressSfGafwL = accounts[5]
		const addressmoopC8h = accounts[3]
		const uintJ4VAJSU = BigInt("1356")
		const addressA4y3K7m = accounts[5]
		const addresswdBPBUg = accounts[3]
		const uintUSrJofL = BigInt("24")
		const addressEwr6E1H = accounts[0]
		const uintl1iG3F3 = BigInt("1335")
		const addressUdxybS3 = accounts[4]
		const addressZgWqS8B = accounts[3]
		const uintJobEMd = BigInt("54")
		const addressMCSdj4P = accounts[2]
		const uintxlLHXOy = BigInt("873")
		const address0edr4G = accounts[1]
		const boolUn1wdif = await WOLFptr6kdE.approveAndCall.call(addressb4vYpbq, uintsB071a8, {from: accounts[4]});
		const boolcom53Mj = await WOLFptr6kdE.approveAndCall.call(addressSy7HpmE, uintdruqqxh, {from: accounts[4]});
		const boolqLFqEhk = await WOLFptr6kdE.approve.call(addresszD1cqSU, uintThwCUqr, {from: accounts[0]});
		const boolQ9e1AWO = await WOLFptr6kdE.transferFrom.call(addressmoopC8h, addressSfGafwL, uintV0pSoWk, {from: accounts[0]});
		const bool2KhFD8 = await WOLFptr6kdE.transferFrom.call(addresswdBPBUg, addressA4y3K7m, uintJ4VAJSU, {from: "0x0000000000000000000000000000000000000001"});
		const boolf2Ls0Zw = await WOLFptr6kdE.approveAndCall.call(addressEwr6E1H, uintUSrJofL, {from: accounts[0]});
		const boolSAz8ywJ = await WOLFptr6kdE.transferFrom.call(addressZgWqS8B, addressUdxybS3, uintl1iG3F3, {from: "0x0000000000000000000000000000000000000001"});
		const boolSWJwxCm = await WOLFptr6kdE.transfer.call(addressMCSdj4P, uintJobEMd, {from: accounts[4]});
		const booljR2ZmB6 = await WOLFptr6kdE.approveAndCall.call(address0edr4G, uintxlLHXOy, {from: accounts[3]});

		assert.equal(boolUn1wdif, true)
		assert.equal(boolcom53Mj, true)
		assert.equal(boolqLFqEhk, true)
		await expect(WOLFptr6kdE.transferFrom.call(addressmoopC8h, addressSfGafwL, uintV0pSoWk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})