const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringTSro2M = "mSnbGvKpjXCE1NaICuli4ZQzXQJenzGdrG5prs7SFclDzPAhLe8RLb1zv1uzYvUgbe0CLCyplNtph3Y4RpwnHhq0Aa"
		const stringhpM0XAe = "0p74sqkbPSMPvClAX3M5aF6gsXqzyBpLG9YJUKPrYTuckYvdNpDARFqvjewk8q5Fq4sLcpfT0HTNLebdzQpEeSsfRR1UXcF5Wc"
		const uintOr4PxUz = BigInt("152")
		const WheatFarmBurxZWa = await WheatFarm.new(stringTSro2M, stringhpM0XAe, uintOr4PxUz, {from: "0x0000000000000000000000000000000000000001"});
		const addressXYlI5sE = accounts[0]
		const uintxd1BFBy = BigInt("358")
		const addressndTwich = accounts[3]
		const addresswSWiCYO = accounts[0]
		const uint8pv8N7Ak = await WheatFarmBurxZWa.decimals.call({from: accounts[0]});
		const boolZQbECcM = await WheatFarmBurxZWa.transferownership.call(addressXYlI5sE, {from: accounts[0]});
		const boolr78BB0g = await WheatFarmBurxZWa.transferFrom.call(addresswSWiCYO, addressndTwich, uintxd1BFBy, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WheatFarm', async () => {
		const stringBA8yxn = "A6zDBSMmzkRJvRYq4sQmTut5LeIEMEEU3rqgai4ls3dyup31aal3YX1Y2sNsmhVB0cDFDJxshd0xn"
		const stringDTI5QeF = "kniLG8m1gzB7XYuE7kalAXsNEu4GiKDxJdHhjcF1MWRk48EN1crehA4Mp4C8bv5lTbMImODyO6I3VuwJs9739yhxRrS1JmrXag"
		const uintSriVQFD = BigInt("837")
		const WheatFarm28OJWS = await WheatFarm.new(stringBA8yxn, stringDTI5QeF, uintSriVQFD, {from: accounts[0]});
		const uintJJxBLWl = BigInt("2004")
		const addresszdqThFw = accounts[3]
		const addressjQIiXWd = accounts[1]
		const uintnSrlJr = await WheatFarm28OJWS.totalSupply.call({from: accounts[3]});
		const uint8smeFAxn = await WheatFarm28OJWS.decimals.call({from: accounts[0]});
		const boolDdzhKei = await WheatFarm28OJWS.transferFrom.call(addressjQIiXWd, addresszdqThFw, uintJJxBLWl, {from: accounts[2]});

		assert.equal(uint8smeFAxn, BigInt("18"))
		assert.equal(uintnSrlJr, BigInt("837000000000000000000"))
		await expect(WheatFarm28OJWS.transferFrom.call(addressjQIiXWd, addresszdqThFw, uintJJxBLWl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringCwmWQPj = "OGSysNLVK6qKPIPtph2AfmL96CLYBgsykdefnQ38O9qY652GS65SudAA9k6a6IkWSBUMcSdq"
		const stringY9qiBMs = "VIwOTlg49fnkbBR24oSC2PFfgNhEUM7iUKLwM6ZwDSzrIg83NSRcCf3ELBnHIpDAhnc6PAQGKSq7E"
		const uintJqdNBvX = BigInt("202")
		const WheatFarmooXhvzC = await WheatFarm.new(stringCwmWQPj, stringY9qiBMs, uintJqdNBvX, {from: accounts[1]});
		const uintWxJZ1gO = BigInt("235")
		const addressVffaOF = "0x0000000000000000000000000000000000000001"
		const addressLXE3NBH = accounts[3]
		const boolrzTXBpM = await WheatFarmooXhvzC.approve.call(addressVffaOF, uintWxJZ1gO, {from: accounts[4]});
		const stringbJLLaW = await WheatFarmooXhvzC.name.call({from: accounts[4]});
		const uintaQPjNZp = await WheatFarmooXhvzC.balanceOf.call(addressLXE3NBH, {from: accounts[5]});

		assert.equal(boolrzTXBpM, true)
		assert.equal(stringbJLLaW, "OGSysNLVK6qKPIPtph2AfmL96CLYBgsykdefnQ38O9qY652GS65SudAA9k6a6IkWSBUMcSdq")
		assert.equal(uintaQPjNZp, BigInt("0"))
	});

	it('test for WheatFarm', async () => {
		const stringmK46qlw = "K8QTbIkUW5bzBbskJ7r5jHNU3YzvP5iR7N9NTQ5Da0zEnfOyL8qUYOpY7Lvny6UJDR"
		const stringiAYONJi = "APGOeuj2WYIhOd5nFfHe0K2NH5LjdBt1Be8gvCtiPB0qaPsmpZGF4ty7yI6EQCsChB"
		const uintk7xKXEy = BigInt("53")
		const WheatFarmVc4on9Y = await WheatFarm.new(stringmK46qlw, stringiAYONJi, uintk7xKXEy, {from: accounts[2]});
		const uintQFSMlhi = BigInt("856")
		const addressCrJ1pW = accounts[2]
		const uintH0rJmRV = BigInt("1681")
		const addressKbQbyhH = accounts[0]
		const bool0VBduj = await WheatFarmVc4on9Y.approveAndCall.call(addressCrJ1pW, uintQFSMlhi, {from: "0x0000000000000000000000000000000000000001"});
		const stringCug1pnW = await WheatFarmVc4on9Y.name.call({from: accounts[3]});
		const boolCIMp54x = await WheatFarmVc4on9Y.approveAndCall.call(addressKbQbyhH, uintH0rJmRV, {from: accounts[2]});

		await expect(WheatFarmVc4on9Y.approveAndCall.call(addressCrJ1pW, uintQFSMlhi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringO89EQy = "6pBMLyIpUJrIIOJMQASikpQpm4skwpaDjD1MBU5wrJ2Pnq8fQTF0Tqgh7s6dpbOdtcu0duyVHtvYKXevpdvsYdAViB"
		const stringFbiZNTD = "hu"
		const uintwOF2GjY = BigInt("1443")
		const WheatFarmqcg0ukx = await WheatFarm.new(stringO89EQy, stringFbiZNTD, uintwOF2GjY, {from: accounts[2]});
		const uinttLh1Roq = BigInt("722")
		const address0rUQlN = accounts[1]
		const uinthDG8mn = BigInt("1012")
		const addressnShAiz6 = accounts[1]
		const addressFwxYccM = accounts[4]
		const addressTMrTgrW = "0x0000000000000000000000000000000000000001"
		const uintFMriU47 = BigInt("1921")
		const addressPYc1Aq0 = "0x0000000000000000000000000000000000000001"
		const boolscOJIuc = await WheatFarmqcg0ukx.transfer.call(address0rUQlN, uinttLh1Roq, {from: accounts[4]});
		const boolBFprvW5 = await WheatFarmqcg0ukx.decreaseAllowance.call(addressnShAiz6, uinthDG8mn, {from: accounts[0]});
		const uinthqyGtH6 = await WheatFarmqcg0ukx.allowance.call(addressTMrTgrW, addressFwxYccM, {from: accounts[2]});
		const stringEaSwnK = await WheatFarmqcg0ukx.symbol.call({from: accounts[4]});
		const boolwJfQ0Sn = await WheatFarmqcg0ukx.approve.call(addressPYc1Aq0, uintFMriU47, {from: accounts[2]});

		await expect(WheatFarmqcg0ukx.transfer.call(address0rUQlN, uinttLh1Roq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringyGBILzq = "WRSPmWrpG6amZCD32sH4L0NGPz2WljsUQfAjbRrkNzBB3Lq7S46FNmTtxb7va9qNhuaUPVF3jdMZoRLO7"
		const stringTdiMp82 = "GH7rxlKI2GAJcNho7YtHzOHTQMg6otsn4d"
		const uintmGlpFfi = BigInt("144")
		const WheatFarmsCnbB2B = await WheatFarm.new(stringyGBILzq, stringTdiMp82, uintmGlpFfi, {from: accounts[0]});
		const uintyGV879F = BigInt("1863")
		const addressZGmprB = accounts[0]
		const uintdyDSksr = BigInt("274")
		const addressv6wu5gM = accounts[0]
		const addressHic8EUZ = accounts[0]
		const stringZnElYAn = await WheatFarmsCnbB2B.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolfHgSU0j = await WheatFarmsCnbB2B.transfer.call(addressZGmprB, uintyGV879F, {from: accounts[4]});
		const boollmBOApa = await WheatFarmsCnbB2B.transferFrom.call(addressHic8EUZ, addressv6wu5gM, uintdyDSksr, {from: accounts[5]});

		assert.equal(stringZnElYAn, "WRSPmWrpG6amZCD32sH4L0NGPz2WljsUQfAjbRrkNzBB3Lq7S46FNmTtxb7va9qNhuaUPVF3jdMZoRLO7")
		await expect(WheatFarmsCnbB2B.transfer.call(addressZGmprB, uintyGV879F, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringnoW8AvG = "5enf9ClKsgYe6Clu9z9gUJz22K0uGyLGdXtQ9tQB4KHQCcyQUvqZbuJLGJCXWHFz"
		const stringurPgg80 = "BoY178E953oYlrzZQKhpoS"
		const uintQW0eIuS = BigInt("183")
		const WheatFarmqNFTFnM = await WheatFarm.new(stringnoW8AvG, stringurPgg80, uintQW0eIuS, {from: accounts[3]});
		const uintBaNIttd = BigInt("956")
		const addressd649dwR = accounts[2]
		const uintMds2MNX = BigInt("1552")
		const addressuzpM57Y = accounts[4]
		const addressy6xT9vg = accounts[5]
		const uintdtZOHo = BigInt("1481")
		const addressvrKWmDZ = "0x0000000000000000000000000000000000000001"
		const uintaqnRSHa = BigInt("888")
		const addressirpqBAC = accounts[1]
		const stringyKVM5Lb = await WheatFarmqNFTFnM.symbol.call({from: accounts[1]});
		const boolcTjb8WD = await WheatFarmqNFTFnM.increaseAllowance.call(addressd649dwR, uintBaNIttd, {from: accounts[1]});
		const booluKAnvhe = await WheatFarmqNFTFnM.transferFrom.call(addressy6xT9vg, addressuzpM57Y, uintMds2MNX, {from: accounts[2]});
		const boolmV7jUhO = await WheatFarmqNFTFnM.transfer.call(addressvrKWmDZ, uintdtZOHo, {from: accounts[0]});
		const boolw9mPLx1 = await WheatFarmqNFTFnM.transfer.call(addressirpqBAC, uintaqnRSHa, {from: accounts[2]});

		assert.equal(stringyKVM5Lb, "BoY178E953oYlrzZQKhpoS")
		await expect(WheatFarmqNFTFnM.increaseAllowance.call(addressd649dwR, uintBaNIttd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringZYhWMS = "5Pvckzfg3U9rmpVKywgTU1hHxq"
		const stringKVW5bTM = "LiM8uPk5s06aqxuhDgEbcBggv8RHSx7vM8xOjpb"
		const uintbPCItCQ = BigInt("167")
		const WheatFarmWfilShK = await WheatFarm.new(stringZYhWMS, stringKVW5bTM, uintbPCItCQ, {from: accounts[1]});
		const uintmdRSmdo = BigInt("1630")
		const addressQPL8dvR = accounts[2]
		const uintP56N1yk = BigInt("979")
		const addressROQrRu9 = accounts[4]
		const addressY3sAFFU = accounts[0]
		const uintJQhChhm = BigInt("1572")
		const addressaXK9gnA = accounts[3]
		const uintTFuHu2y = BigInt("1773")
		const addresszCg1EEA = accounts[4]
		const addressbBOkJtZ = "0x0000000000000000000000000000000000000001"
		const addressW8RJ1In = accounts[2]
		const addressAaXMXAz = accounts[5]
		const boolyIdxzHs = await WheatFarmWfilShK.approveAndCall.call(addressQPL8dvR, uintmdRSmdo, {from: accounts[1]});
		const boolSRSYyqj = await WheatFarmWfilShK.transfer.call(addressROQrRu9, uintP56N1yk, {from: accounts[1]});
		const uintOjYMgF5 = await WheatFarmWfilShK.balanceOf.call(addressY3sAFFU, {from: accounts[0]});
		const boolTYxUtH = await WheatFarmWfilShK.approveAndCall.call(addressaXK9gnA, uintJQhChhm, {from: accounts[4]});
		const boolM1mfys = await WheatFarmWfilShK.transferFrom.call(addressbBOkJtZ, addresszCg1EEA, uintTFuHu2y, {from: accounts[2]});
		const uintPsVAaAK = await WheatFarmWfilShK.allowance.call(addressAaXMXAz, addressW8RJ1In, {from: accounts[2]});

		assert.equal(boolSRSYyqj, true)
		assert.equal(boolyIdxzHs, true)
		assert.equal(uintOjYMgF5, BigInt("0"))
		await expect(WheatFarmWfilShK.approveAndCall.call(addressaXK9gnA, uintJQhChhm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringZYhWMS = "5Pvckzfg3U9rmpVKywgTU1hHxq"
		const stringKVW5bTM = "LiM8uPk5s06aqxuhDgEbcBggv8RHSx7vM8xOjpb"
		const uintOFHRvdh = BigInt("167")
		const WheatFarmWfilShK = await WheatFarm.new(stringZYhWMS, stringKVW5bTM, uintOFHRvdh, {from: accounts[1]});
		const addressOZ3iD8q = accounts[1]
		const uintPtKn6zY = BigInt("1630")
		const addressQ1zOMfR = accounts[2]
		const uintvNGewOW = BigInt("1560")
		const addressho5Syj = accounts[4]
		const uintmCM89nd = BigInt("1859")
		const addressmdfKpn = "0x0000000000000000000000000000000000000001"
		const uinthT745JH = BigInt("1773")
		const addressLqCB72w = accounts[4]
		const addressysUpJOu = "0x0000000000000000000000000000000000000001"
		const addresseAoYY1g = accounts[1]
		const addressV19G294 = accounts[2]
		const address9LEMsT = accounts[5]
		const boolB0pstu = await WheatFarmWfilShK.transferownership.call(addressOZ3iD8q, {from: accounts[1]});
		const boolyIdxzHs = await WheatFarmWfilShK.approveAndCall.call(addressQ1zOMfR, uintPtKn6zY, {from: accounts[1]});
		const boolTYxUtH = await WheatFarmWfilShK.approveAndCall.call(addressho5Syj, uintvNGewOW, {from: accounts[4]});
		const boolCg2Rgi9 = await WheatFarmWfilShK.transfer.call(addressmdfKpn, uintmCM89nd, {from: accounts[4]});
		const boolM1mfys = await WheatFarmWfilShK.transferFrom.call(addressysUpJOu, addressLqCB72w, uinthT745JH, {from: accounts[2]});
		const booljYz7Ir = await WheatFarmWfilShK.transferownership.call(addresseAoYY1g, {from: accounts[0]});
		const uintPsVAaAK = await WheatFarmWfilShK.allowance.call(address9LEMsT, addressV19G294, {from: accounts[2]});

		assert.equal(boolB0pstu, true)
		assert.equal(boolyIdxzHs, true)
		await expect(WheatFarmWfilShK.approveAndCall.call(addressho5Syj, uintvNGewOW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringZYhWMS = "5Pvckzfg3U9rmpVKywgTU1hHxq"
		const stringKVW5bTM = "LiM8uPk5s06aqxuhDgEbcBggv8RHSx7vM8xOjpb"
		const uintLqRnnQ = BigInt("167")
		const WheatFarmWfilShK = await WheatFarm.new(stringZYhWMS, stringKVW5bTM, uintLqRnnQ, {from: accounts[1]});
		const uintYot4OWM = BigInt("0")
		const addressHepHB7a = accounts[1]
		const addresshBqBEnJ = accounts[1]
		const booleQGqmde = await WheatFarmWfilShK.transferFrom.call(addresshBqBEnJ, addressHepHB7a, uintYot4OWM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booleQGqmde, true)
	});
})