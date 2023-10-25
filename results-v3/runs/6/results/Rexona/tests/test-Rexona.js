const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringPCHF9OG = "7EH0vKGG5RyxEnqA2to7R9xHbwKv41AWUIdjWSF7vc4qhNfWJeehbwGpbKa2VscsmLocsuy9JRuJmJ7"
		const stringDUWBT8G = "wfK58mBP"
		const uintuSSWHVp = BigInt("1830")
		const RexonaKjxUYD0 = await Rexona.new(stringPCHF9OG, stringDUWBT8G, uintuSSWHVp, {from: accounts[3]});
		const uintiKwVvx = BigInt("809")
		const addressEJda7H = accounts[0]
		const uintCy8R5lx = BigInt("1924")
		const addressL93fJ9F = accounts[1]
		const uintYa2IU2G = BigInt("1422")
		const addressFTV5GAt = "0x0000000000000000000000000000000000000001"
		const addressAbrlnX = accounts[0]
		const uintzdMqN28 = BigInt("952")
		const addressPBrZSxC = accounts[0]
		const addressQSC5fox = accounts[0]
		const boolz6SSdZf = await RexonaKjxUYD0.transfer.call(addressEJda7H, uintiKwVvx, {from: "0x0000000000000000000000000000000000000001"});
		const boolAmV6WX = await RexonaKjxUYD0.approve.call(addressL93fJ9F, uintCy8R5lx, {from: "0x0000000000000000000000000000000000000001"});
		const boolgve2jis = await RexonaKjxUYD0.transferFrom.call(addressAbrlnX, addressFTV5GAt, uintYa2IU2G, {from: accounts[0]});
		const boolGhP36uo = await RexonaKjxUYD0.transferFrom.call(addressQSC5fox, addressPBrZSxC, uintzdMqN28, {from: accounts[4]});

		await expect(RexonaKjxUYD0.transfer.call(addressEJda7H, uintiKwVvx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringyBFugh5 = "HvskZDQyKDq6UhT3euGESWRW92HPNqJcEhCp8lv3G1gflVJFiOleOdBs2HyMlMvXJvM8VTSl6mrjf6WvaFDUfNEzp"
		const stringCQqerd = "N6hLQpF6z62DbOreGeKfBlL4MhtQS5HrZkWGEtU6XHuuYtCdGX2ba2JR5K8c0yS6xUKf3tdQXvygpmmKqg2Kr9E0C6Ovooln1B3"
		const uintsndMXxK = BigInt("698")
		const Rexonar33zs3e = await Rexona.new(stringyBFugh5, stringCQqerd, uintsndMXxK, {from: accounts[3]});
		const uintDd7L6JS = BigInt("1564")
		const addresssH8VWWa = accounts[5]
		const uintbw9t2Le = BigInt("1612")
		const addressPBzKvwq = accounts[3]
		const addressR8Oaitz = accounts[5]
		const uintzzZ5VkZ = BigInt("1801")
		const addressj4HgLxo = accounts[1]
		const addresss9bFnZE = accounts[3]
		const boolAsZG5tm = await Rexonar33zs3e.approveAndCall.call(addresssH8VWWa, uintDd7L6JS, {from: accounts[3]});
		const boolnAqzRIU = await Rexonar33zs3e.transferFrom.call(addressR8Oaitz, addressPBzKvwq, uintbw9t2Le, {from: accounts[4]});
		const boolE1Gc2a6 = await Rexonar33zs3e.transferFrom.call(addresss9bFnZE, addressj4HgLxo, uintzzZ5VkZ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolAsZG5tm, true)
		await expect(Rexonar33zs3e.transferFrom.call(addressR8Oaitz, addressPBzKvwq, uintbw9t2Le, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringzh9GsYq = "RJ2klvMWbQKOkuBaM3WU8maAucR8HSHouVmFaSrpyuIXj8jkdNgyS5nhj50eU7D28oV1LFBEBl6DssvBvld27a97IgUvWMmyGU"
		const stringH4WJ8m0 = "LHzCws665It9kHdBAsQw4VQ2ARQQ9oaYvNXkndDurmVJ5gwGcBfErEJrJT5c7gNPmtlURnzbUcEqL7C9VLZphwOorN5rd"
		const uintCipATYJ = BigInt("215")
		const Rexonasn75Ko9 = await Rexona.new(stringzh9GsYq, stringH4WJ8m0, uintCipATYJ, {from: accounts[4]});
		const addresspmEu9Lu = accounts[2]
		const addressigpujM5 = accounts[1]
		const addressik8Y6AH = accounts[3]
		const uintAQWQYDE = BigInt("1687")
		const addressOu0wwyp = accounts[3]
		const boolKf6QuuC = await Rexonasn75Ko9.transferownership.call(addresspmEu9Lu, {from: accounts[0]});
		const boolMG4yBxF = await Rexonasn75Ko9.transferownership.call(addressigpujM5, {from: accounts[0]});
		const boolSNQv4wW = await Rexonasn75Ko9.transferownership.call(addressik8Y6AH, {from: accounts[0]});
		const booleuw18xV = await Rexonasn75Ko9.approve.call(addressOu0wwyp, uintAQWQYDE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Rexonasn75Ko9.transferownership.call(addresspmEu9Lu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringOttHVPl = "I70CGMhoNsJ6pgRZIprTFC2H095J1onENtYAEoz8TisPt"
		const stringxZNUSWR = "uLFpEc9dcSgbBRys"
		const uintWgI3yhK = BigInt("385")
		const RexonayBOALu = await Rexona.new(stringOttHVPl, stringxZNUSWR, uintWgI3yhK, {from: accounts[1]});
		const addressOK3EeS7 = accounts[2]
		const uintCVBwtSQ = BigInt("1563")
		const addressS3mQuIW = accounts[0]
		const addressPkrq5f = accounts[0]
		const boolEdAxFs = await RexonayBOALu.transferownership.call(addressOK3EeS7, {from: accounts[1]});
		const boolr58JIAE = await RexonayBOALu.approve.call(addressS3mQuIW, uintCVBwtSQ, {from: accounts[0]});
		const boolDL4QQQ4 = await RexonayBOALu.transferownership.call(addressPkrq5f, {from: accounts[4]});

		assert.equal(boolEdAxFs, true)
		assert.equal(boolr58JIAE, true)
		await expect(RexonayBOALu.transferownership.call(addressPkrq5f, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringPtykcKN = "dXzHLRLfuDSFSruw5Qe6ndl98PZGM2881Ot7veO3W"
		const stringC8mweV = "Uj3"
		const uintBneMjcQ = BigInt("830")
		const RexonaxHtmssj = await Rexona.new(stringPtykcKN, stringC8mweV, uintBneMjcQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintnGI1HmM = BigInt("211")
		const addressIcKO7Ls = accounts[1]
		const uintFNLxhtc = BigInt("870")
		const addressu7pjTSd = "0x0000000000000000000000000000000000000001"
		const uintgpZkSL8 = BigInt("80")
		const addressIveeTAn = accounts[4]
		const uintvDXGEIU = BigInt("851")
		const addressVJzwuhd = "0x0000000000000000000000000000000000000001"
		const addressclL1KEK = accounts[0]
		const boolO02Lpsv = await RexonaxHtmssj.approve.call(addressIcKO7Ls, uintnGI1HmM, {from: accounts[4]});
		const boolcQMl4E = await RexonaxHtmssj.approve.call(addressu7pjTSd, uintFNLxhtc, {from: accounts[3]});
		const boolJylsn31 = await RexonaxHtmssj.approveAndCall.call(addressIveeTAn, uintgpZkSL8, {from: accounts[0]});
		const boolSKnhBgd = await RexonaxHtmssj.transferFrom.call(addressclL1KEK, addressVJzwuhd, uintvDXGEIU, {from: accounts[3]});
	});

	it('test for Rexona', async () => {
		const stringyBFugh5 = "HvskZDQyKDq6UhT3euGESWRW92HPNqJcEhCp8lv3G1gflVJFiOleOdBs2HyMlMvXJvM8VTSl6mrjf6WvaFDUfNEzp"
		const stringCQqerd = "N6hLQpF6z62DbOreGeKfBlL4MhtQS5HrZkWGEtU6XHuuYtCdGX2ba2JR5K8c0yS6xUKf3tdQXvygpmmKqg2Kr9E0C6Ovooln1B3"
		const uintNMfwErA = BigInt("698")
		const Rexonar33zs3e = await Rexona.new(stringyBFugh5, stringCQqerd, uintNMfwErA, {from: accounts[3]});
		const uintYZvecVQ = BigInt("1955")
		const addressbTSi7Mz = accounts[0]
		const uintH2kAsLP = BigInt("1260")
		const addressizEKS3 = accounts[1]
		const uintrX9VjRK = BigInt("1543")
		const addressEtVYjyr = accounts[7]
		const uintw3cUOPW = BigInt("1072")
		const addressTJ1xyzr = "0x0000000000000000000000000000000000000001"
		const uintKTP7wl = BigInt("1311")
		const addressoQ2l169 = "0x0000000000000000000000000000000000000001"
		const addressb3XZq5a = accounts[1]
		const boolsfE1MCg = await Rexonar33zs3e.approve.call(addressbTSi7Mz, uintYZvecVQ, {from: accounts[3]});
		const boolAUqyM4q = await Rexonar33zs3e.transfer.call(addressizEKS3, uintH2kAsLP, {from: accounts[3]});
		const boolAsZG5tm = await Rexonar33zs3e.approveAndCall.call(addressEtVYjyr, uintrX9VjRK, {from: accounts[3]});
		const booljWQd9OL = await Rexonar33zs3e.approveAndCall.call(addressTJ1xyzr, uintw3cUOPW, {from: accounts[1]});
		const boollRkB8c = await Rexonar33zs3e.transferFrom.call(addressb3XZq5a, addressoQ2l169, uintKTP7wl, {from: accounts[2]});

		assert.equal(boolAUqyM4q, true)
		assert.equal(boolAsZG5tm, true)
		assert.equal(boolsfE1MCg, true)
		await expect(Rexonar33zs3e.approveAndCall.call(addressTJ1xyzr, uintw3cUOPW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringPCHF9OG = "7EH0vKGG5RyxEnqA2to7R9xHbwKv41AWUIdjWSF7vc4qhNfWJeehbwGpbKa2VscsmLocsuy9JRuJmJ7"
		const stringDUWBT8G = "wfK58mBP"
		const uintWFrQBbn = BigInt("1830")
		const RexonaKjxUYD0 = await Rexona.new(stringPCHF9OG, stringDUWBT8G, uintWFrQBbn, {from: accounts[3]});
		const uintQmMgZi0 = BigInt("0")
		const addressoJwOBfW = accounts[1]
		const boolz6SSdZf = await RexonaKjxUYD0.transfer.call(addressoJwOBfW, uintQmMgZi0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolz6SSdZf, true)
	});

	it('test for Rexona', async () => {
		const stringEjD2Tk5 = "81nPYzqmDUy6yCjyP3LzQKcgnncL6s8VNwNYerWkKwErZj7CWIKMVl1rAwSypu60KGTSOyzvvgRhTzQApqV9X55AnR3S66Gh6"
		const stringVPV2F6g = "syk7eGCoOybJ"
		const uintfPDA5N7 = BigInt("704")
		const RexonaFBSKRjQ = await Rexona.new(stringEjD2Tk5, stringVPV2F6g, uintfPDA5N7, {from: accounts[3]});
		const uintq6yIbOk = BigInt("279")
		const addressfcz9Ebc = accounts[3]
		const uintmRdg3nN = BigInt("0")
		const addresssd2UDtK = accounts[0]
		const uintwkk6taS = BigInt("1593")
		const addressuv0aife = accounts[2]
		const uintY2fQ3wm = BigInt("1894")
		const addressmPlwCWq = accounts[3]
		const boolozJ8sjE = await RexonaFBSKRjQ.approve.call(addressfcz9Ebc, uintq6yIbOk, {from: "0x0000000000000000000000000000000000000001"});
		const boolOQgLwPr = await RexonaFBSKRjQ.approveAndCall.call(addresssd2UDtK, uintmRdg3nN, {from: accounts[3]});
		const boolXNbAaie = await RexonaFBSKRjQ.approve.call(addressuv0aife, uintwkk6taS, {from: accounts[3]});
		const boolSWJA2f = await RexonaFBSKRjQ.approve.call(addressmPlwCWq, uintY2fQ3wm, {from: accounts[1]});

		assert.equal(boolOQgLwPr, true)
		assert.equal(boolSWJA2f, true)
		assert.equal(boolXNbAaie, true)
		assert.equal(boolozJ8sjE, true)
	});
})