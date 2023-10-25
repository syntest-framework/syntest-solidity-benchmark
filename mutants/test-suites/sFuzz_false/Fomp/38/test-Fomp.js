const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressEKV35Me = accounts[1]
		const FompfcX82yZ = await Fomp.new(addressEKV35Me, {from: accounts[4]});
		const uintXcuLBx = BigInt("779")
		const addresscAeMMi = accounts[4]
		const addressgfwp65r = accounts[3]
		const uintUWjLjfz = BigInt("879")
		const addresspEWh9cv = accounts[1]
		const addressK4yZOvy = accounts[2]
		const addresst1FKCjL = accounts[2]
		const addressIQQQtH4 = accounts[1]
		const uintH2I4ml = BigInt("1115")
		const addressKUaXXdh = "0x0000000000000000000000000000000000000001"
		const addressErjyytS = accounts[0]
		const booluIkP9WA = await FompfcX82yZ.approve.call(addresscAeMMi, uintXcuLBx, {from: accounts[3]});
		const uint962cz5TE = await FompfcX82yZ.getCurrentVotes.call(addressgfwp65r, {from: accounts[0]});
//		const boolnArLH23 = await FompfcX82yZ.transferFrom.call(addressK4yZOvy, addresspEWh9cv, uintUWjLjfz, {from: accounts[0]});
//		const uinttv9AY5N = await FompfcX82yZ.allowance.call(addressIQQQtH4, addresst1FKCjL, {from: accounts[2]});
//		const boolSEJIaNO = await FompfcX82yZ.transferFrom.call(addressErjyytS, addressKUaXXdh, uintH2I4ml, {from: accounts[4]});

		assert.equal(booluIkP9WA, true)
		assert.equal(uint962cz5TE, BigInt("0"))
		await expect(FompfcX82yZ.transferFrom.call(addressK4yZOvy, addresspEWh9cv, uintUWjLjfz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressKwsbcyz = accounts[5]
		const FompWE17lNq = await Fomp.new(addressKwsbcyz, {from: accounts[4]});
		const uintjLqSCfu = BigInt("1092")
		const addressvcGfoYH = accounts[0]
		const addressQAWSWVX = accounts[3]
		const booldry4b3L = await FompWE17lNq.approve.call(addressvcGfoYH, uintjLqSCfu, {from: accounts[2]});
		const addressfnrvUmW = await FompWE17lNq.delegate.call(addressQAWSWVX, {from: accounts[4]});

		assert.equal(booldry4b3L, true)
	});

	it('test for Fomp', async () => {
		const addressYNYMDhw = accounts[3]
		const FompXp44KI7 = await Fomp.new(addressYNYMDhw, {from: accounts[2]});
		const addressoG0FsrT = accounts[4]
		const uintgcU5N3s = BigInt("1651")
		const addresscfOdCc = accounts[4]
		const addressQTkPHHx = accounts[2]
		const uintAfbcChJ = await FompXp44KI7.balanceOf.call(addressoG0FsrT, {from: accounts[5]});
//		const booliTeO8K4 = await FompXp44KI7.transferFrom.call(addressQTkPHHx, addresscfOdCc, uintgcU5N3s, {from: accounts[4]});

		assert.equal(uintAfbcChJ, BigInt("0"))
		await expect(FompXp44KI7.transferFrom.call(addressQTkPHHx, addresscfOdCc, uintgcU5N3s, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressBGjwMN = "0x0000000000000000000000000000000000000001"
		const Fompt8P3bUK = await Fomp.new(addressBGjwMN, {from: accounts[2]});
		const uintrzI87R9 = BigInt("1312")
		const addresspXMcN4e = accounts[0]
		const uintIPJZFl = BigInt("257")
		const addressuEzezTq = accounts[4]
		const byteNNQtkGg = "0x000b030c1b1c1109150410100f1c0d180f1b0d0a01090416071f010906130503"
		const byteyz2iZgL = "0x0812201504130b040c1703121304091c1a201513061213070e061e1f1702131d"
		const uinteeLAPdv = BigInt("46")
		const uintz65857Z = BigInt("1920")
		const uintMNaldSo = BigInt("202")
		const addressvpLBmuW = accounts[0]
		const addressjETGHoM = accounts[4]
		const addressIDehySA = accounts[0]
		const addressUpYMG1k = accounts[2]
//		const boolaySr18 = await Fompt8P3bUK.transfer.call(addresspXMcN4e, uintrzI87R9, {from: accounts[1]});
//		const boolUCDtI6l = await Fompt8P3bUK.transfer.call(addressuEzezTq, uintIPJZFl, {from: accounts[0]});
//		const addressc8G8QNn = await Fompt8P3bUK.delegateBySig.call(addressvpLBmuW, uintMNaldSo, uintz65857Z, uinteeLAPdv, byteyz2iZgL, byteNNQtkGg, {from: accounts[4]});
//		const uintkZ4hnFr = await Fompt8P3bUK.balanceOf.call(addressjETGHoM, {from: accounts[2]});
//		const uintDTfVxwj = await Fompt8P3bUK.allowance.call(addressUpYMG1k, addressIDehySA, {from: accounts[3]});

		await expect(Fompt8P3bUK.transfer.call(addresspXMcN4e, uintrzI87R9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressFuSuFnh = accounts[3]
		const Fompf57cf5l = await Fomp.new(addressFuSuFnh, {from: accounts[4]});
		const addressJrJx0RN = accounts[1]
		const addressW1CrmG3 = accounts[3]
		const uintPlBwqOH = BigInt("1678")
		const addressMlnMnUZ = "0x0000000000000000000000000000000000000001"
		const uint96eJq1R1V = await Fompf57cf5l.getCurrentVotes.call(addressJrJx0RN, {from: accounts[2]});
		const addressoHEmNav = await Fompf57cf5l.delegate.call(addressW1CrmG3, {from: "0x0000000000000000000000000000000000000001"});
		const bool9qLvID = await Fompf57cf5l.transfer.call(addressMlnMnUZ, uintPlBwqOH, {from: accounts[3]});

		assert.equal(bool9qLvID, true)
		assert.equal(uint96eJq1R1V, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addresshKpEVBr = accounts[4]
		const FompJoWJWN0 = await Fomp.new(addresshKpEVBr, {from: accounts[3]});
		const addressmIWVvy = accounts[4]
		const addressmgZxHxV = "0x0000000000000000000000000000000000000001"
		const uintchQNIhf = BigInt("1704")
		const addressTudxDy9 = accounts[0]
		const uint96QOSlvqb = await FompJoWJWN0.getCurrentVotes.call(addressmIWVvy, {from: accounts[0]});
		const addressIMtm3eJ = await FompJoWJWN0.delegate.call(addressmgZxHxV, {from: accounts[4]});
//		const boolWo1FHn = await FompJoWJWN0.transfer.call(addressTudxDy9, uintchQNIhf, {from: accounts[0]});

		assert.equal(uint96QOSlvqb, BigInt("0"))
		await expect(FompJoWJWN0.transfer.call(addressTudxDy9, uintchQNIhf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressdiJSHZd = accounts[4]
		const FompJoWJWN0 = await Fomp.new(addressdiJSHZd, {from: accounts[3]});
		const addressoeuzFLx = accounts[4]
		const uintJCAcBlP = BigInt("1157")
		const addressqDjYb5U = accounts[0]
		const addressiDiRgaQ = accounts[0]
		const addressq2sZbwK = accounts[0]
		const uintZo7soLJ = BigInt("57")
		const addressO3IxVYb = accounts[5]
		const uintQZPBOZQ = BigInt("1704")
		const addressDXjmFhZ = accounts[0]
		const uint96QOSlvqb = await FompJoWJWN0.getCurrentVotes.call(addressoeuzFLx, {from: accounts[0]});
		const uint96qHn6FH8 = await FompJoWJWN0.getPriorVotes.call(addressqDjYb5U, uintJCAcBlP, {from: accounts[1]});
		const addressJHovWiD = await FompJoWJWN0.delegate.call(addressiDiRgaQ, {from: accounts[3]});
		const addressHDBfOQJ = await FompJoWJWN0.delegate.call(addressq2sZbwK, {from: accounts[0]});
		const boolaB02jsT = await FompJoWJWN0.approve.call(addressO3IxVYb, uintZo7soLJ, {from: accounts[4]});
//		const boolWo1FHn = await FompJoWJWN0.transfer.call(addressDXjmFhZ, uintQZPBOZQ, {from: accounts[0]});

		assert.equal(boolaB02jsT, true)
		assert.equal(uint96QOSlvqb, BigInt("0"))
		assert.equal(uint96qHn6FH8, BigInt("0"))
		await expect(FompJoWJWN0.transfer.call(addressDXjmFhZ, uintQZPBOZQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresspXtGEHN = accounts[4]
		const FompJoWJWN0 = await Fomp.new(addresspXtGEHN, {from: accounts[3]});
		const addressEj6K6Qb = accounts[4]
		const addressmSrZLE = "0x00000000000000000000000000000000000000-1"
		const addressbWJQgY9 = accounts[0]
		const uintz0cj9EW = BigInt("301")
		const addressg3NHV8P = accounts[5]
		const uint3pgMlo = BigInt("1704")
		const addressyYiBOlN = accounts[0]
		const uint96QOSlvqb = await FompJoWJWN0.getCurrentVotes.call(addressEj6K6Qb, {from: accounts[0]});
//		const addressIMtm3eJ = await FompJoWJWN0.delegate.call(addressmSrZLE, {from: accounts[4]});
//		const addressJHovWiD = await FompJoWJWN0.delegate.call(addressbWJQgY9, {from: accounts[3]});
//		const boolaB02jsT = await FompJoWJWN0.approve.call(addressg3NHV8P, uintz0cj9EW, {from: accounts[4]});
//		const boolWo1FHn = await FompJoWJWN0.transfer.call(addressyYiBOlN, uint3pgMlo, {from: accounts[0]});

		assert.equal(uint96QOSlvqb, BigInt("0"))
		await expect(FompJoWJWN0.delegate.call(addressmSrZLE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressLydub37 = accounts[5]
		const FompWE17lNq = await Fomp.new(addressLydub37, {from: accounts[4]});
		const addressyfMIbiu = accounts[3]
		const addresswvVJJUr = accounts[3]
		const addressDqpX7Nw = accounts[6]
		const uintMML88su = await FompWE17lNq.allowance.call(addresswvVJJUr, addressyfMIbiu, {from: accounts[2]});
		const addressfnrvUmW = await FompWE17lNq.delegate.call(addressDqpX7Nw, {from: accounts[4]});

		assert.equal(uintMML88su, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addresslUDWTVP = accounts[4]
		const FompJoWJWN0 = await Fomp.new(addresslUDWTVP, {from: accounts[3]});
		const addressyXialnX = accounts[4]
		const addressXB2v4O8 = accounts[0]
		const uintY8UIXfQ = BigInt("301")
		const addressw9SXbP2 = accounts[5]
		const byteD91tXcG = "0x11051408011d060b03081e1805141f010310090e1619191f001114170305111d"
		const byteXqXnZYH = "0x080c07120202120f021600010201051e1a091d1f141309090100020d07121f16"
		const uintu4u394a = BigInt("224")
		const uintvNsdNiL = BigInt("129")
		const uintRTNNyA9 = BigInt("701")
		const addresswMieoIr = accounts[1]
		const uintnNw9Q4C = BigInt("1712")
		const addresso31iJNr = accounts[0]
		const uint96QOSlvqb = await FompJoWJWN0.getCurrentVotes.call(addressyXialnX, {from: accounts[0]});
		const addressJHovWiD = await FompJoWJWN0.delegate.call(addressXB2v4O8, {from: accounts[3]});
		const boolaB02jsT = await FompJoWJWN0.approve.call(addressw9SXbP2, uintY8UIXfQ, {from: accounts[4]});
//		const addresssuqpGYS = await FompJoWJWN0.delegateBySig.call(addresswMieoIr, uintRTNNyA9, uintvNsdNiL, uintu4u394a, byteXqXnZYH, byteD91tXcG, {from: accounts[4]});
//		const boolWo1FHn = await FompJoWJWN0.transfer.call(addresso31iJNr, uintnNw9Q4C, {from: accounts[0]});

		assert.equal(boolaB02jsT, true)
		assert.equal(uint96QOSlvqb, BigInt("0"))
		await expect(FompJoWJWN0.delegateBySig.call(addresswMieoIr, uintRTNNyA9, uintvNsdNiL, uintu4u394a, byteXqXnZYH, byteD91tXcG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressWfVs9nl = accounts[5]
		const FompaFBha7h = await Fomp.new(addressWfVs9nl, {from: "0x0000000000000000000000000000000000000001"});
		const uintwHPrUwU = BigInt("360")
		const addressb6APiZm = accounts[1]
		const addressIDvRzV3 = "0x0000000000000000000000000000000000000001"
		const addressokM54DL = accounts[3]
		const uintsBp8NYk = BigInt("1663")
		const addressBUwhyyI = accounts[0]
		const uintB0N9UCb = BigInt("295")
		const addressAqMAeB7 = accounts[5]
		const addressumCbD9n = "0x0000000000000000000000000000000000000001"
		const boolm6vqN9M = await FompaFBha7h.transfer.call(addressb6APiZm, uintwHPrUwU, {from: accounts[3]});
		const addressZ7Ralud = await FompaFBha7h.delegate.call(addressIDvRzV3, {from: accounts[2]});
		const addresseDz20C0 = await FompaFBha7h.delegate.call(addressokM54DL, {from: accounts[4]});
		const uint96LSn6mVP = await FompaFBha7h.getPriorVotes.call(addressBUwhyyI, uintsBp8NYk, {from: accounts[0]});
		const boolgS8cY3T = await FompaFBha7h.transferFrom.call(addressumCbD9n, addressAqMAeB7, uintB0N9UCb, {from: accounts[5]});
	});

	it('test for Fomp', async () => {
		const addressQj1aFmJ = accounts[4]
		const FompJoWJWN0 = await Fomp.new(addressQj1aFmJ, {from: accounts[3]});
		const uintx4JJ7t7 = BigInt("12")
		const addressH4iVMEV = accounts[4]
		const uintyodsFCW = BigInt("249")
		const addressR2Dkadb = accounts[1]
		const boolfMODuJQ = await FompJoWJWN0.approve.call(addressH4iVMEV, uintx4JJ7t7, {from: accounts[3]});
		const uint96avDRIhu = await FompJoWJWN0.getPriorVotes.call(addressR2Dkadb, uintyodsFCW, {from: accounts[4]});

		assert.equal(boolfMODuJQ, true)
		assert.equal(uint96avDRIhu, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressNSw47tk = accounts[4]
		const FompJoWJWN0 = await Fomp.new(addressNSw47tk, {from: accounts[3]});
		const byteSuU5B18 = "0x07160d01181a1713111d01050d0c060f041612060c1b08161d16120c0907171d"
		const byteqYtoTWK = "0x080b1c01111e181a051e1509020b1a021b16100017021c12021b131605131217"
		const uintQtaHGz9 = BigInt("28")
		const uintmNHscti = BigInt("912")
		const uintb504Tid = BigInt("1473")
		const addressDp8opEQ = "0x0000000000000000000000000000000000000001"
		const addressW2mzaMI = accounts[4]
//		const addressB78dxgf = await FompJoWJWN0.delegateBySig.call(addressDp8opEQ, uintb504Tid, uintmNHscti, uintQtaHGz9, byteqYtoTWK, byteSuU5B18, {from: accounts[5]});
//		const addressG31F6fj = await FompJoWJWN0.delegate.call(addressW2mzaMI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FompJoWJWN0.delegateBySig.call(addressDp8opEQ, uintb504Tid, uintmNHscti, uintQtaHGz9, byteqYtoTWK, byteSuU5B18, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})