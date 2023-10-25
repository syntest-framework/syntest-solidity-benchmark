const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringTSro2M = "mSnbGvKpjXCE1NaICuli4ZQzXQJenzGdrG5prs7SFclDzPAhLe8RLb1zv1uzYvUgbe0CLCyplNtph3Y4RpwnHhq0Aa"
		const stringhpM0XAe = "0p74sqkbPSMPvClAX3M5aF6gsXqzyBpLG9YJUKPrYTuckYvdNpDARFqvjewk8q5Fq4sLcpfT0HTNLebdzQpEeSsfRR1UXcF5Wc"
		const uintOr4PxUz = BigInt("19")
		const XenoFelixBurxZWa = await XenoFelix.new(stringTSro2M, stringhpM0XAe, uintOr4PxUz, {from: "0x0000000000000000000000000000000000000001"});
		const addressGbECcMM = accounts[2]
		const uintr78BB0g = BigInt("7")
		const addressT1BFByK = accounts[5]
		const addressRfPrsq9 = await XenoFelixBurxZWa.transferOwnership.call(addressGbECcMM, {from: accounts[3]});
		const boolf4CQ5pg = await XenoFelixBurxZWa.increaseAllowance.call(addressT1BFByK, uintr78BB0g, {from: accounts[5]});
		const uint2566SWiCY = await XenoFelixBurxZWa.totalSupply.call({from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringaFjol2w = "KGDFQyYL"
		const stringUZCBKKV = "zkRJvRYq4sQmTut5LeIEMEEU3rqgai4ls3dy"
		const uint98B9Cc = BigInt("204")
		const XenoFelixSWR5lAM = await XenoFelix.new(stringaFjol2w, stringUZCBKKV, uint98B9Cc, {from: accounts[3]});
		const uintXtMsQSM = BigInt("1381")
		const addresseeEqRvo = accounts[4]
		const uintzUXSvqH = BigInt("754")
		const addressBA8yxn = accounts[1]
		const boolx72UDI = await XenoFelixSWR5lAM.transfer.call(addresseeEqRvo, uintXtMsQSM, {from: accounts[3]});
		const boolQklG79 = await XenoFelixSWR5lAM.decreaseAllowance.call(addressBA8yxn, uintzUXSvqH, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringCJiQh1 = "VuwJs9"
		const stringYXWdu9d = "S1JmrXagdk9Vgu6sHylh53p6RYfani7D7FKwHYclkJg8"
		const uintgThFwTJ = BigInt("205")
		const XenoFelixLWl8Nd = await XenoFelix.new(stringCJiQh1, stringYXWdu9d, uintgThFwTJ, {from: accounts[4]});
		const addressmw8lQc = accounts[0]
		const uintizq2iby = BigInt("1561")
		const addressSKfv8hG = accounts[2]
		const uintxnNF14 = BigInt("1784")
		const addressmvn2meF = accounts[3]
		await XenoFelixLWl8Nd.onlyNewOwner.call({from: accounts[3]});
		const addressYUMNPX1 = await XenoFelixLWl8Nd.notFrozen.call(addressmw8lQc, {from: "0x0000000000000000000000000000000000000001"});
		const boolvuFauzs = await XenoFelixLWl8Nd.transfer.call(addressSKfv8hG, uintizq2iby, {from: accounts[4]});
		const stringgEkvSnp = await XenoFelixLWl8Nd.symbol.call({from: accounts[4]});
		const boolr1hABnS = await XenoFelixLWl8Nd.approve.call(addressmvn2meF, uintxnNF14, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const XenoFelixpcWZ9qp = await XenoFelix.new({from: "0x0000000000000000000000000000000000000001"});
		const addressFkF2BQa = "0x0000000000000000000000000000000000000001"
		const addressGDhrBe = accounts[0]
		const uint1pWaFS = BigInt("408")
		const addressj44ZCCr = accounts[0]
		const addressdWof8kG = accounts[3]
		const addressrI4JUbQ = accounts[4]
		const uintDJiu7xK = BigInt("770")
		const addresscRlsAYO = accounts[2]
		const addressfLvv5w = await XenoFelixpcWZ9qp.notFrozenAndTransaction.call(addressGDhrBe, addressFkF2BQa, {from: accounts[3]});
		const boolbhiZF0V = await XenoFelixpcWZ9qp.transferFrom.call(addressdWof8kG, addressj44ZCCr, uint1pWaFS, {from: "0x0000000000000000000000000000000000000001"});
		const stringv4xbZHt = await XenoFelixpcWZ9qp.name.call({from: "0x0000000000000000000000000000000000000001"});
		const addressRyhHR0r = await XenoFelixpcWZ9qp.notFrozen.call(addressrI4JUbQ, {from: accounts[0]});
		const boolyMfc4o = await XenoFelixpcWZ9qp.transfer.call(addresscRlsAYO, uintDJiu7xK, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringONgLExs = "fHwPDBMFEBtkmYRxFegDsm41hJBxWvDO3sxp2CyoGpbwCKMKFjvSDW"
		const stringiZ4tbss = "EkiCBDV4JT6pBMLy"
		const uintouw1k3S = BigInt("83")
		const XenoFelixP1ZWEcU = await XenoFelix.new(stringONgLExs, stringiZ4tbss, uintouw1k3S, {from: accounts[2]});
		const uintsGjYr0c = BigInt("1068")
		const addressPNTD6OF = accounts[2]
		const addressDdMeANe = accounts[4]
		const addressWbtCzXa = accounts[0]
		const boolqukxd7H = await XenoFelixP1ZWEcU.transfer.call(addressPNTD6OF, uintsGjYr0c, {from: accounts[5]});
		await XenoFelixP1ZWEcU.renouncePauser.call({from: accounts[5]});
		const addressY6rdf9u = await XenoFelixP1ZWEcU.addPauser.call(addressDdMeANe, {from: accounts[5]});
		const boolP14pA3 = await XenoFelixP1ZWEcU.unfreezeAccount.call(addressWbtCzXa, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringgWWQa4B = "SUfLjnxIYGOEcXheuUzc569OVn4lEybBb2XtW8KT4twasT8IbVUHdawP7ViEPn0PpGgT5nUTuDJKc9rH"
		const stringA1kc0VK = "Sk6HBFnqZjCjFJAlEJmBlFTgWqpJgPnfDgCM9ewIesXnVjir3o4AZjNS2hPglcmfh48y"
		const uintLOyS0F4 = BigInt("959")
		const uintzI4jZqq = BigInt("28")
		const XenoFelixidL2c9 = await XenoFelix.new(stringgWWQa4B, stringA1kc0VK, uintLOyS0F4, uintzI4jZqq, {from: accounts[0]});
		const uintsG59ie = BigInt("2")
		const addressGarOhBo = accounts[1]
		const addressAPL0IjC = accounts[4]
		const addressHfYhGMr = accounts[1]
		const uint81jNKD = BigInt("1230")
		const uintiIQGP3 = BigInt("46")
		const addressgTuGMgH = "0x0000000000000000000000000000000000000001"
		const addressRLg4aRL = accounts[2]
		const addressPlHVoj5 = accounts[2]
		const boolodQBEFL = await XenoFelixidL2c9.increaseAllowance.call(addressGarOhBo, uintsG59ie, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xR0YATz = await XenoFelixidL2c9.allowance.call(addressHfYhGMr, addressAPL0IjC, {from: accounts[2]});
		const boolnBhSrmc = await XenoFelixidL2c9.lock.call(addressgTuGMgH, uintiIQGP3, uint81jNKD, {from: accounts[0]});
		const addressoJemtxF = await XenoFelixidL2c9.notFrozenAndTransaction.call(addressPlHVoj5, addressRLg4aRL, {from: accounts[0]});

		assert.equal(boolodQBEFL, true)
		assert.equal(uint256xR0YATz, BigInt("0"))
		await expect(XenoFelixidL2c9.lock.call(addressgTuGMgH, uintiIQGP3, uint81jNKD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string4IUheZ = "NHuDZWrNtoqrU86MRaBE6eIUfI15OplkYvyVDvXYX9f2ocEjMrlSBc2hSJgoOxzkxHwOYggkCzHTnfkN"
		const stringhbNuh1a = "NIolclO5PmQlDh6BPx4X4jXwbpgg0uCdTHixmCUwwoT0"
		const uintQ0cTbp = BigInt("1425")
		const uintDQhiws = BigInt("87")
		const XenoFelixtZzKBr1 = await XenoFelix.new(string4IUheZ, stringhbNuh1a, uintQ0cTbp, uintDQhiws, {from: accounts[5]});
		const uintGogfilS = BigInt("1100")
		const addressClPCItC = accounts[1]
		const uintUzUEcAF = BigInt("326")
		const addressCSYwSwI = accounts[1]
		const uintFQC4JbW = BigInt("843")
		const addressGE0fLUj = "0x0000000000000000000000000000000000000001"
		const uintX02kGS = BigInt("724")
		const boolAXkV0zZ = await XenoFelixtZzKBr1.transfer.call(addressClPCItC, uintGogfilS, {from: accounts[2]});
		const stringthHfwHh = await XenoFelixtZzKBr1.symbol.call({from: accounts[4]});
		const boolQheRnQo = await XenoFelixtZzKBr1.decreaseAllowance.call(addressCSYwSwI, uintUzUEcAF, {from: accounts[0]});
		const boolvvigQ45 = await XenoFelixtZzKBr1.decreaseAllowance.call(addressGE0fLUj, uintFQC4JbW, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vxJdqHp = await XenoFelixtZzKBr1.burn.call(uintX02kGS, {from: accounts[4]});

		await expect(XenoFelixtZzKBr1.transfer.call(addressClPCItC, uintGogfilS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string4IUheZ = "NHuDZWrNtoqrU86MRaBE6eIUfI15OplkYvyVDvXYX9f2ocEjMrlSBc2hSJgoOxzkxHwOYggkCzHTnfkN"
		const stringhbNuh1a = "NIolclO5PmQlDh6BPx4X4jXwbpgg0uCdTHixmCUwwoT0"
		const uintXjoH1ui = BigInt("1425")
		const uintTxWgU4r = BigInt("87")
		const XenoFelixtZzKBr1 = await XenoFelix.new(string4IUheZ, stringhbNuh1a, uintXjoH1ui, uintTxWgU4r, {from: accounts[5]});
		const uintuDN1m7P = BigInt("1315")
		const uintafIfPv = BigInt("1118")
		const addressWSOtQmp = accounts[1]
		const uintUEMWadU = BigInt("326")
		const addressl2E3bej = accounts[1]
		const uintCiIoZyG = BigInt("843")
		const addressR2H1zz = "0x0000000000000000000000000000000000000001"
		const uintqpLOfb4 = BigInt("724")
		const uint256TwWCTtR = await XenoFelixtZzKBr1.burn.call(uintuDN1m7P, {from: "0x0000000000000000000000000000000000000001"});
		const boolAXkV0zZ = await XenoFelixtZzKBr1.transfer.call(addressWSOtQmp, uintafIfPv, {from: accounts[2]});
		const stringthHfwHh = await XenoFelixtZzKBr1.symbol.call({from: accounts[4]});
		const boolQheRnQo = await XenoFelixtZzKBr1.decreaseAllowance.call(addressl2E3bej, uintUEMWadU, {from: accounts[0]});
		const boolvvigQ45 = await XenoFelixtZzKBr1.decreaseAllowance.call(addressR2H1zz, uintCiIoZyG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vxJdqHp = await XenoFelixtZzKBr1.burn.call(uintqpLOfb4, {from: accounts[4]});

		await expect(XenoFelixtZzKBr1.burn.call(uintuDN1m7P, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string4IUheZ = "NHuDZWrNtoqrU86MRaBE6eIUfI15OplkYvyVDvXYX9f2ocEjMrlSBc2hSJgoOxzkxHwOYggkCzHTnfkN"
		const stringhbNuh1a = "NIolclO5PmQlDh6BPx4X4jXwbpgg0uCdTHixmCUwwoT0"
		const uintEqBDY54 = BigInt("1425")
		const uintgrr9i7 = BigInt("87")
		const XenoFelixtZzKBr1 = await XenoFelix.new(string4IUheZ, stringhbNuh1a, uintEqBDY54, uintgrr9i7, {from: accounts[5]});
		const uinty0bKwgy = BigInt("1100")
		const addressf47ijoZ = accounts[1]
		const uinttI6q2sQ = BigInt("326")
		const addressMoRalOa = accounts[1]
		const uintsVBW8kQ = BigInt("843")
		const addressgHB2k8Y = "0x0000000000000000000000000000000000000000"
		const uintHmDYzou = BigInt("724")
		await XenoFelixtZzKBr1.onlyNewOwner.call({from: accounts[4]});
		const boolAXkV0zZ = await XenoFelixtZzKBr1.transfer.call(addressf47ijoZ, uinty0bKwgy, {from: accounts[2]});
		const stringthHfwHh = await XenoFelixtZzKBr1.symbol.call({from: accounts[4]});
		await XenoFelixtZzKBr1.onlyNewOwner.call({from: accounts[4]});
		const boolQheRnQo = await XenoFelixtZzKBr1.decreaseAllowance.call(addressMoRalOa, uinttI6q2sQ, {from: accounts[0]});
		const stringqzfCLg = await XenoFelixtZzKBr1.name.call({from: accounts[3]});
		const boolvvigQ45 = await XenoFelixtZzKBr1.decreaseAllowance.call(addressgHB2k8Y, uintsVBW8kQ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vxJdqHp = await XenoFelixtZzKBr1.burn.call(uintHmDYzou, {from: accounts[4]});

		await expect(XenoFelixtZzKBr1.onlyNewOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringi6vUyeJ = "SpLK6yiHu2dg19juZs16lXjinIUkiXCH8Azk5iqQrhNJC6kuvECvAphgtiAfhsNQLFPaAFScFmkCT8vUMtBj"
		const stringn9deg8 = "uFJkpO9LzW0dDu6YGrmO8PLqqbGxrE3XhgfvRTspmzx1QfGDXVt673w77"
		const uintiwIg1nM = BigInt("227")
		const XenoFelixU2XpFZ4 = await XenoFelix.new(stringi6vUyeJ, stringn9deg8, uintiwIg1nM, {from: accounts[5]});
		const uintGR21EvW = BigInt("383")
		const addressPTrLjcv = accounts[5]
		const addressLG2UnFy = accounts[4]
		const addressiRMkx9E = accounts[4]
		await XenoFelixU2XpFZ4.whenPaused.call({from: accounts[0]});
		const boolL89ysge = await XenoFelixU2XpFZ4.transferFrom.call(addressLG2UnFy, addressPTrLjcv, uintGR21EvW, {from: accounts[1]});
		const addressuPMNPvj = await XenoFelixU2XpFZ4.transferOwnership.call(addressiRMkx9E, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const string4IUheZ = "NHuDZWrNtoqrU86MRaBE6eIUfI15OplkYvyVDvXYX9f2ocEjMrlSBc2hSJgoOxzkxHwOYggkCzHTnfkN"
		const stringhbNuh1a = "NIolclO5PmQlDh6BPx4X4jXwbpgg0uCdTHixmCUwwoT0"
		const uintyP9HtgW = BigInt("1425")
		const uintYIavXlZ = BigInt("87")
		const XenoFelixtZzKBr1 = await XenoFelix.new(string4IUheZ, stringhbNuh1a, uintyP9HtgW, uintYIavXlZ, {from: accounts[5]});
		const uintl7ydadL = BigInt("1100")
		const addressiXOMxJl = accounts[1]
		const uintbfg4chn = BigInt("326")
		const addressgEuoCRR = accounts[1]
		const uintToAf9oX = BigInt("843")
		const addressJBOW6nh = "0x0000000000000000000000000000000000000001"
		const uintjs5OwCd = BigInt("724")
		const boolg0ijyBb = await XenoFelixtZzKBr1.paused.call({from: accounts[4]});
		const boolAXkV0zZ = await XenoFelixtZzKBr1.transfer.call(addressiXOMxJl, uintl7ydadL, {from: accounts[2]});
		const stringthHfwHh = await XenoFelixtZzKBr1.symbol.call({from: accounts[4]});
		await XenoFelixtZzKBr1.onlyNewOwner.call({from: accounts[1]});
		const boolQheRnQo = await XenoFelixtZzKBr1.decreaseAllowance.call(addressgEuoCRR, uintbfg4chn, {from: accounts[0]});
		const boolvvigQ45 = await XenoFelixtZzKBr1.decreaseAllowance.call(addressJBOW6nh, uintToAf9oX, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vxJdqHp = await XenoFelixtZzKBr1.burn.call(uintjs5OwCd, {from: accounts[4]});

		assert.equal(boolg0ijyBb, false)
		await expect(XenoFelixtZzKBr1.transfer.call(addressiXOMxJl, uintl7ydadL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringfovFS8B = "Ro8pLCaMrUwnsfmVRim4THVLi8W8CSzHHBAAsynmoPK8SrB4si8Dgz4BC0uxxH0ftbi0P7FOk0QvRC"
		const stringUFL7Nmf = "MNV0PNF6EVmTGmpK2FsBO7Xrs1o1IifB1sXnwiye3sIkJQQoxix64o73b5dehIJWhv1nUW4fUSmUoCekt9N5A8"
		const uintMOFozsp = BigInt("225")
		const XenoFelixUYH0qL0 = await XenoFelix.new(stringfovFS8B, stringUFL7Nmf, uintMOFozsp, {from: accounts[0]});
		const addressC6Mz3qq = accounts[0]
		const uintxhnM55O = BigInt("1877")
		const addressu4bhiI = accounts[1]
		const uintXnLjuvt = BigInt("939")
		const addressTpW3Ymq = accounts[0]
		const uintKHyrFEr = BigInt("1014")
		const addressx8ulDYB = accounts[1]
		const address1ZsiEl = "0x0000000000000000000000000000000000000001"
		const boolRgkzfNf = await XenoFelixUYH0qL0.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ymn81LY = await XenoFelixUYH0qL0.balanceOf.call(addressC6Mz3qq, {from: accounts[1]});
		const boolrLBJYNH = await XenoFelixUYH0qL0.decreaseAllowance.call(addressu4bhiI, uintxhnM55O, {from: accounts[2]});
		const boolMUcimpx = await XenoFelixUYH0qL0.transfer.call(addressTpW3Ymq, uintXnLjuvt, {from: accounts[3]});
		const boolF5nIv1 = await XenoFelixUYH0qL0.transferFrom.call(address1ZsiEl, addressx8ulDYB, uintKHyrFEr, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const string4IUheZ = "NHuDZWrNtoqrU86MRaBE6eIUfI15OplkYvyVDvXYX9f2ocEjMrlSBc2hSJgoOxzkxHwOYggkCzHTnfkN"
		const stringhbNuh1a = "NIolclO5PmQlDh6BPx4X4jXwbpgg0uCdTHixmCUwwoT0"
		const uintRfc3Rbs = BigInt("1425")
		const uintVDiUKwv = BigInt("87")
		const XenoFelixtZzKBr1 = await XenoFelix.new(string4IUheZ, stringhbNuh1a, uintRfc3Rbs, uintVDiUKwv, {from: accounts[5]});
		const uintugf0X3r = BigInt("480")
		const addressbFeuDMz = "0x0000000000000000000000000000000000000001"
		const uintijt7zaX = BigInt("1100")
		const addressY6WLD3S = accounts[1]
		const uintF2ZPquL = BigInt("302")
		const addressDBVBsAQ = accounts[1]
		const uintGBysvwT = BigInt("696")
		const boolRvnNu6y = await XenoFelixtZzKBr1.approve.call(addressbFeuDMz, uintugf0X3r, {from: accounts[3]});
		const boolAXkV0zZ = await XenoFelixtZzKBr1.transfer.call(addressY6WLD3S, uintijt7zaX, {from: accounts[2]});
		const boolQheRnQo = await XenoFelixtZzKBr1.decreaseAllowance.call(addressDBVBsAQ, uintF2ZPquL, {from: accounts[0]});
		const uint256vxJdqHp = await XenoFelixtZzKBr1.burn.call(uintGBysvwT, {from: accounts[4]});

		assert.equal(boolRvnNu6y, true)
		await expect(XenoFelixtZzKBr1.transfer.call(addressY6WLD3S, uintijt7zaX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringh4OukHi = "JGUW9O4dlltUHyJsgqDf6li9yROVhzUqRiRusqcH4xB4VgdFq2NFBLnJfr45LPkt"
		const stringT3r92UU = "gqcctaiVCs"
		const uintX8RuQve = BigInt("73")
		const XenoFelixKPDs5bm = await XenoFelix.new(stringh4OukHi, stringT3r92UU, uintX8RuQve, {from: accounts[1]});
		const uintftONgr = BigInt("1927")
		const addressQGnClSa = "0x0000000000000000000000000000000000000001"
		const uint28Y6hu = BigInt("1843")
		const uintxKObCh5 = BigInt("854")
		const uintmEtQDnp = BigInt("1971")
		const addressLg0LCW = accounts[3]
		const boolvyRGiDe = await XenoFelixKPDs5bm.burnOwner.call(addressQGnClSa, uintftONgr, {from: accounts[4]});
		const uint256tPomFX = await XenoFelixKPDs5bm.burn.call(uint28Y6hu, {from: "0x0000000000000000000000000000000000000001"});
		const uint256h05fJgs = await XenoFelixKPDs5bm.burn.call(uintxKObCh5, {from: accounts[1]});
		const boolE3o7yNV = await XenoFelixKPDs5bm.paused.call({from: accounts[4]});
		const boolQTW0g0 = await XenoFelixKPDs5bm.transfer.call(addressLg0LCW, uintmEtQDnp, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const string4IUheZ = "NHuDZWrNtoqrU86MRaBE6eIUfI15OplkYvyVDvXYX9f2ocEjMrlSBc2hSJgoOxzkxHwOYggkCzHTnfkN"
		const stringhbNuh1a = "NIolclO5PmQlDh6BPx4X4jXwbpgg0uCdTHixmCUwwoT0"
		const uintFwgCTy = BigInt("1425")
		const uintDm58sw9 = BigInt("87")
		const XenoFelixtZzKBr1 = await XenoFelix.new(string4IUheZ, stringhbNuh1a, uintFwgCTy, uintDm58sw9, {from: accounts[5]});
		const uintDIcKTR = BigInt("75")
		const addressxSjHGMB = accounts[3]
		const addressMEJeKEj = accounts[1]
		const uintevBvR3b = BigInt("1100")
		const addressyPbhu1r = accounts[1]
		const addressq21t03z = accounts[0]
		const uintikVWnat = BigInt("326")
		const addressksBc75p = accounts[1]
		const uintk2kUC7a = BigInt("843")
		const addresslyjhL1w = "0x0000000000000000000000000000000000000002"
		const uintrT0OZ5U = BigInt("724")
		const boolxYubH0o = await XenoFelixtZzKBr1.transferFrom.call(addressMEJeKEj, addressxSjHGMB, uintDIcKTR, {from: accounts[5]});
		const boolAXkV0zZ = await XenoFelixtZzKBr1.transfer.call(addressyPbhu1r, uintevBvR3b, {from: accounts[2]});
		const stringthHfwHh = await XenoFelixtZzKBr1.symbol.call({from: accounts[4]});
		const boolHToFmTy = await XenoFelixtZzKBr1.isPauser.call(addressq21t03z, {from: accounts[3]});
		const boolugPlAQ = await XenoFelixtZzKBr1.acceptOwnership.call({from: accounts[1]});
		const boolQheRnQo = await XenoFelixtZzKBr1.decreaseAllowance.call(addressksBc75p, uintikVWnat, {from: accounts[0]});
		const boolvvigQ45 = await XenoFelixtZzKBr1.decreaseAllowance.call(addresslyjhL1w, uintk2kUC7a, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vxJdqHp = await XenoFelixtZzKBr1.burn.call(uintrT0OZ5U, {from: accounts[4]});

		await expect(XenoFelixtZzKBr1.transferFrom.call(addressMEJeKEj, addressxSjHGMB, uintDIcKTR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string4IUheZ = "NHuDZWrNtoqrU86MRaBE6eIUfI15OplkYvyVDvXYX9f2ocEjMrlSBc2hSJgoOxzkxHwOYggkCzHTnfkN"
		const stringhbNuh1a = "NIolclO5PmQlDh6BPx4X4jXwbpgg0uCdTHixmCUwwoT0"
		const uintJEAp49n = BigInt("1425")
		const uintfuHSgdi = BigInt("87")
		const XenoFelixtZzKBr1 = await XenoFelix.new(string4IUheZ, stringhbNuh1a, uintJEAp49n, uintfuHSgdi, {from: accounts[5]});
		const uintwqqtseB = BigInt("440")
		const uintLSBWLWG = BigInt("755")
		const addressuUaT5lq = accounts[4]
		const uintM0tHyNq = BigInt("1100")
		const addressme11qwd = accounts[1]
		const addressMOheJMe = accounts[0]
		const uintke0nDH = BigInt("326")
		const addressItomp39 = accounts[1]
		const uintpO9G2Px = BigInt("843")
		const addressLjFPqs3 = "0x0000000000000000000000000000000000000001"
		const uintbfdhAXQ = BigInt("724")
		const boolvc2On41 = await XenoFelixtZzKBr1.lock.call(addressuUaT5lq, uintLSBWLWG, uintwqqtseB, {from: accounts[0]});
		const boolAXkV0zZ = await XenoFelixtZzKBr1.transfer.call(addressme11qwd, uintM0tHyNq, {from: accounts[2]});
		const stringthHfwHh = await XenoFelixtZzKBr1.symbol.call({from: accounts[4]});
		const boolHToFmTy = await XenoFelixtZzKBr1.isPauser.call(addressMOheJMe, {from: accounts[3]});
		const boolQheRnQo = await XenoFelixtZzKBr1.decreaseAllowance.call(addressItomp39, uintke0nDH, {from: accounts[0]});
		const boolvvigQ45 = await XenoFelixtZzKBr1.decreaseAllowance.call(addressLjFPqs3, uintpO9G2Px, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vxJdqHp = await XenoFelixtZzKBr1.burn.call(uintbfdhAXQ, {from: accounts[4]});

		await expect(XenoFelixtZzKBr1.lock.call(addressuUaT5lq, uintLSBWLWG, uintwqqtseB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string4IUheZ = "NHuDZWrNtoqrU86MRaBE6eIUfI15OplkYvyVDvXYX9f2ocEjMrlSBc2hSJgoOxzkxHwOYggkCzHTnfkN"
		const stringhbNuh1a = "NIolclO5PmQlDh6BPx4X4jXwbpgg0uCdTHixmCUwwoT0"
		const uintUeX5v37 = BigInt("1425")
		const uintDV8SoHh = BigInt("87")
		const XenoFelixtZzKBr1 = await XenoFelix.new(string4IUheZ, stringhbNuh1a, uintUeX5v37, uintDV8SoHh, {from: accounts[5]});
		const uintz9w6qVX = BigInt("1100")
		const addressp1D9IJy = accounts[1]
		const addressJac1Ayq = accounts[0]
		const uintwFXs9T2 = BigInt("326")
		const addresseQqOM40 = accounts[1]
		const uintsjTNRqJ = BigInt("843")
		const addresseC5fJeV = "0x0000000000000000000000000000000000000001"
		const uintr9Hfuv = BigInt("724")
		const uintf169Jer = BigInt("737")
		const addresshaGdjyz = accounts[3]
		const uint8Gn8esaj = await XenoFelixtZzKBr1.decimals.call({from: accounts[3]});
		const boolAXkV0zZ = await XenoFelixtZzKBr1.transfer.call(addressp1D9IJy, uintz9w6qVX, {from: accounts[2]});
		const stringthHfwHh = await XenoFelixtZzKBr1.symbol.call({from: accounts[4]});
		const boolHToFmTy = await XenoFelixtZzKBr1.isPauser.call(addressJac1Ayq, {from: accounts[3]});
		const boolQheRnQo = await XenoFelixtZzKBr1.decreaseAllowance.call(addresseQqOM40, uintwFXs9T2, {from: accounts[0]});
		const boolvvigQ45 = await XenoFelixtZzKBr1.decreaseAllowance.call(addresseC5fJeV, uintsjTNRqJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vxJdqHp = await XenoFelixtZzKBr1.burn.call(uintr9Hfuv, {from: accounts[4]});
		const boolR0o7sqx = await XenoFelixtZzKBr1.transfer.call(addresshaGdjyz, uintf169Jer, {from: accounts[4]});

		assert.equal(uint8Gn8esaj, BigInt("87"))
		await expect(XenoFelixtZzKBr1.transfer.call(addressp1D9IJy, uintz9w6qVX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringc771F8n = "ejtV8x7sxiRQqymbeAtpFup1sgx7XWMhs3l5LgdL7bcoV7oamgnzJB3DlzZFx961RK5sz87emKgUDo2A"
		const stringSiHEa9 = "AnbykiCB0bkzWYr6HHd7wLMMkvcujeiCGDmtSv4Dh4INZwkuPATnYfH5I3fquKNn4aIHMG1x2KspyLmPxACbrX7"
		const uintjQwriiJ = BigInt("1697")
		const uintFbW0g92 = BigInt("78")
		const XenoFelixq9UKCcD = await XenoFelix.new(stringc771F8n, stringSiHEa9, uintjQwriiJ, uintFbW0g92, {from: accounts[3]});
		const uint256ZpFvQy5 = await XenoFelixq9UKCcD.totalSupply.call({from: accounts[0]});
		await XenoFelixq9UKCcD.pause.call({from: accounts[2]});

		assert.equal(uint256ZpFvQy5, BigInt("66932227131156067567214697678710410328374725037534001749106364033085126737920"))
		await expect(XenoFelixq9UKCcD.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string4IUheZ = "NHuDZWrNtoqrU86MRaBE6eIUfI15OplkYvyVDvXYX9f2ocEjMrlSBc2hSJgoOxzkxHwOYggkCzHTnfkN"
		const stringhbNuh1a = "NIolclO5PmQlDh6BPx4X4jXwbpgg0uCdTHixmCUwwoT0"
		const uintXnMBBN6 = BigInt("1425")
		const uintPOP6YZ3 = BigInt("87")
		const XenoFelixtZzKBr1 = await XenoFelix.new(string4IUheZ, stringhbNuh1a, uintXnMBBN6, uintPOP6YZ3, {from: accounts[5]});
		const uintxw13433 = BigInt("302")
		const addressha2Tt0 = accounts[1]
		const uintKuoHAtf = BigInt("843")
		const addresslQqYD3K = "0x0000000000000000000000000000000000000001"
		const uintCct6LmE = BigInt("724")
		const boolQheRnQo = await XenoFelixtZzKBr1.decreaseAllowance.call(addressha2Tt0, uintxw13433, {from: accounts[0]});
		const boolvvigQ45 = await XenoFelixtZzKBr1.decreaseAllowance.call(addresslQqYD3K, uintKuoHAtf, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vxJdqHp = await XenoFelixtZzKBr1.burn.call(uintCct6LmE, {from: accounts[4]});

		await expect(XenoFelixtZzKBr1.decreaseAllowance.call(addressha2Tt0, uintxw13433, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringc771F8n = "ejtV8x7sxiRQqymbeAtpFup1sgx7XWMhs3l5LgdL7bcoV7oamgnzJB3DlzZFx961RK5sz87emKgUDo2A"
		const stringSiHEa9 = "AnbykiCB0bkzWYr6HHd7wLMMkvcujeiCGDmtSv4Dh4INZwkuPATnYfH5I3fquKNn4aIHMG1x2KspyLmPxACbrX7"
		const uinta01LrC8 = BigInt("1697")
		const uintFgErY1P = BigInt("78")
		const XenoFelixq9UKCcD = await XenoFelix.new(stringc771F8n, stringSiHEa9, uinta01LrC8, uintFgErY1P, {from: accounts[3]});
		const uintPnMAkCN = BigInt("939")
		const addressGPHWZUk = accounts[0]
		const uint256ZpFvQy5 = await XenoFelixq9UKCcD.totalSupply.call({from: accounts[0]});
		const addressS31krn = await XenoFelixq9UKCcD.burnFrom.call(addressGPHWZUk, uintPnMAkCN, {from: accounts[1]});
		await XenoFelixq9UKCcD.pause.call({from: accounts[2]});

		assert.equal(uint256ZpFvQy5, BigInt("66932227131156067567214697678710410328374725037534001749106364033085126737920"))
		await expect(XenoFelixq9UKCcD.burnFrom.call(addressGPHWZUk, uintPnMAkCN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringc771F8n = "ejtV8x7sxiRQqymbeAtpFup1sgx7XWMhs3l5LgdL7bcoV7oamgnzJB3DlzZFx961RK5sz87emKgUDo2A"
		const stringSiHEa9 = "AnbykiCB0bkzWYr6HHd7wLMMkvcujeiCGDmtSv4Dh4INZwkuPATnYfH5I3fquKNn4aIHMG1x2KspyLmPxACbrX7"
		const uintWGyLdkc = BigInt("1697")
		const uintckoiymO = BigInt("78")
		const XenoFelixq9UKCcD = await XenoFelix.new(stringc771F8n, stringSiHEa9, uintWGyLdkc, uintckoiymO, {from: accounts[3]});
		const addressAmqUNa6 = accounts[1]
		const uint256IEa6UMi = await XenoFelixq9UKCcD.balanceOf.call(addressAmqUNa6, {from: accounts[0]});
		const uint256ZpFvQy5 = await XenoFelixq9UKCcD.totalSupply.call({from: accounts[0]});
		const boolHsUm6Qf = await XenoFelixq9UKCcD.acceptOwnership.call({from: accounts[4]});
		await XenoFelixq9UKCcD.pause.call({from: accounts[2]});

		assert.equal(uint256IEa6UMi, BigInt("0"))
		assert.equal(uint256ZpFvQy5, BigInt("66932227131156067567214697678710410328374725037534001749106364033085126737920"))
		await expect(XenoFelixq9UKCcD.acceptOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringZDCkx0f = "jAwqfOf483bwuD2u8vFsj91GbsFvK7YPrJPxq6jv044iLuj5DeKSb"
		const stringmxNYV3b = "hAuVRUWYvUCiFKm9VqSgnGUfoeGhX2yG7"
		const uintUFNkXlo = BigInt("997")
		const uintXuY5UG = BigInt("227")
		const XenoFelixlSy8ixL = await XenoFelix.new(stringZDCkx0f, stringmxNYV3b, uintUFNkXlo, uintXuY5UG, {from: accounts[3]});
		const addressjB7PAC3 = accounts[2]
		const uintgd87JC7 = BigInt("1767")
		const uints2W6Bvh = BigInt("1645")
		const addressgJ5FhZ = accounts[1]
		const uintjwx1LUC = BigInt("371")
		const addressBgrVvYm = accounts[4]
		const boolcwgXlUl = await XenoFelixlSy8ixL.isOwner.call(addressjB7PAC3, {from: accounts[2]});
		const stringx0ymbl = await XenoFelixlSy8ixL.symbol.call({from: accounts[3]});
		const boolfsVcMea = await XenoFelixlSy8ixL.lock.call(addressgJ5FhZ, uints2W6Bvh, uintgd87JC7, {from: "0x0000000000000000000000000000000000000001"});
		const boolJlYm8ZT = await XenoFelixlSy8ixL.increaseAllowance.call(addressBgrVvYm, uintjwx1LUC, {from: accounts[1]});
		await XenoFelixlSy8ixL.onlyNewOwner.call({from: accounts[3]});

		assert.equal(boolcwgXlUl, false)
		assert.equal(stringx0ymbl, "hAuVRUWYvUCiFKm9VqSgnGUfoeGhX2yG7")
		await expect(XenoFelixlSy8ixL.lock.call(addressgJ5FhZ, uints2W6Bvh, uintgd87JC7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringZDCkx0f = "jAwqfOf483bwuD2u8vFsj91GbsFvK7YPrJPxq6jv044iLuj5DeKSb"
		const stringmxNYV3b = "hAuVRUWYvUCiFKm9VqSgnGUfoeGhX2yG7"
		const uintBl7pC6q = BigInt("997")
		const uinttju3rte = BigInt("227")
		const XenoFelixlSy8ixL = await XenoFelix.new(stringZDCkx0f, stringmxNYV3b, uintBl7pC6q, uinttju3rte, {from: accounts[3]});
		const uintPuNaVd = BigInt("1020")
		const uintpreUsFB = BigInt("1602")
		const addressBQXdXo = accounts[3]
		const stringFQkqtCa = await XenoFelixlSy8ixL.name.call({from: accounts[1]});
		const boolVT0M3kj = await XenoFelixlSy8ixL.transferWithLock.call(addressBQXdXo, uintpreUsFB, uintPuNaVd, {from: accounts[1]});

		assert.equal(stringFQkqtCa, "jAwqfOf483bwuD2u8vFsj91GbsFvK7YPrJPxq6jv044iLuj5DeKSb")
		await expect(XenoFelixlSy8ixL.transferWithLock.call(addressBQXdXo, uintpreUsFB, uintPuNaVd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringZDCkx0f = "jAwqfOf483bwuD2u8vFsj91GbsFvK7YPrJPxq6jv044iLuj5DeKSb"
		const stringmxNYV3b = "hAuVRUWYvUCiFKm9VqSgnGUfoeGhX2yG7"
		const uintJnmf7kT = BigInt("997")
		const uintw5vqIw1 = BigInt("227")
		const XenoFelixlSy8ixL = await XenoFelix.new(stringZDCkx0f, stringmxNYV3b, uintJnmf7kT, uintw5vqIw1, {from: accounts[3]});
		const uinth1J2fTp = BigInt("1465")
		const addressjUC2O1n = accounts[4]
		const addressY0KopgN = accounts[5]
		const uintLxubE2D = BigInt("1020")
		const uintPIcj1At = BigInt("1636")
		const addresshEflglQ = accounts[3]
		await XenoFelixlSy8ixL.renouncePauser.call({from: accounts[0]});
		const boolrQhPUxH = await XenoFelixlSy8ixL.transferFrom.call(addressY0KopgN, addressjUC2O1n, uinth1J2fTp, {from: accounts[5]});
		const boolVT0M3kj = await XenoFelixlSy8ixL.transferWithLock.call(addresshEflglQ, uintPIcj1At, uintLxubE2D, {from: accounts[1]});

		await expect(XenoFelixlSy8ixL.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string4IUheZ = "NHuDZWrNtoqrU86MRaBE6eIUfI15OplkYvyVDvXYX9f2ocEjMrlSBc2hSJgoOxzkxHwOYggkCzHTnfkN"
		const stringhbNuh1a = "NIolclO5PmQlDh6BPx4X4jXwbpgg0uCdTHixmCUwwoT0"
		const uinttryevwM = BigInt("1425")
		const uintbfybfZ = BigInt("87")
		const XenoFelixtZzKBr1 = await XenoFelix.new(string4IUheZ, stringhbNuh1a, uinttryevwM, uintbfybfZ, {from: accounts[5]});
		const addressSUz3Seu = accounts[4]
		const addressulEZLac = accounts[0]
		const uintkwbSYvp = BigInt("614")
		const uintPuTbU5x = BigInt("2021")
		const addressGB4VmYL = accounts[1]
		await XenoFelixtZzKBr1.pause.call({from: accounts[5]});
		const uint256Fys7OM = await XenoFelixtZzKBr1.balanceOf.call(addressSUz3Seu, {from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixtZzKBr1.onlyNewOwner.call({from: accounts[2]});
		const boolsc4TrTx = await XenoFelixtZzKBr1.unfreezeAccount.call(addressulEZLac, {from: accounts[0]});
		const boolhHJ54Kh = await XenoFelixtZzKBr1.transferWithLock.call(addressGB4VmYL, uintPuTbU5x, uintkwbSYvp, {from: accounts[5]});

		await expect(XenoFelixtZzKBr1.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string4IUheZ = "NHuDZWrNtoqrU86MRaBE6eIUfI15OplkYvyVDvXYX9f2ocEjMrlSBc2hSJgoOxzkxHwOYggkCzHTnfkN"
		const stringhbNuh1a = "NIolclO5PmQlDh6BPx4X4jXwbpgg0uCdTHixmCUwwoT0"
		const uintl1mtJNv = BigInt("1425")
		const uintLva6xWm = BigInt("87")
		const XenoFelixtZzKBr1 = await XenoFelix.new(string4IUheZ, stringhbNuh1a, uintl1mtJNv, uintLva6xWm, {from: accounts[5]});
		const addressYL6nRaH = accounts[5]
		const boolRZgVObr = await XenoFelixtZzKBr1.isOwner.call(addressYL6nRaH, {from: accounts[2]});
		await XenoFelixtZzKBr1.onlyNewOwner.call({from: accounts[2]});

		assert.equal(boolRZgVObr, true)
		await expect(XenoFelixtZzKBr1.onlyNewOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringZDCkx0f = "jAwqfOf483bwuD2u8vFsj91GbsFvK7YPrJPxq6jv044iLuj5DeKSb"
		const stringmxNYV3b = "hAuVRUWYvUCiFKm9VqSgnGUfoeGhX2yG7"
		const uintmbs5G6z = BigInt("997")
		const uintSwrqxEz = BigInt("227")
		const XenoFelixlSy8ixL = await XenoFelix.new(stringZDCkx0f, stringmxNYV3b, uintmbs5G6z, uintSwrqxEz, {from: accounts[3]});
		const uinte9dAtCW = BigInt("807")
		const addressOtdzKjV = accounts[4]
		const addressLk5ci3p = accounts[4]
		const uintm4NfSy = BigInt("780")
		const addressXdYp0u2 = accounts[2]
		const uintRBK1bAv = BigInt("865")
		const addressSfVUPy = accounts[2]
		const uintRqqdGFW = BigInt("264")
		const addressrIesSGs = accounts[0]
		const uintRpqDaH = BigInt("1020")
		const uintNaGZlvx = BigInt("1632")
		const addressYeLwVN = accounts[3]
		const boolDzePksO = await XenoFelixlSy8ixL.transfer.call(addressOtdzKjV, uinte9dAtCW, {from: accounts[3]});
		const addressT0ne4WY = await XenoFelixlSy8ixL.removePauser.call(addressLk5ci3p, {from: accounts[3]});
		const stringIzXwbc9 = await XenoFelixlSy8ixL.name.call({from: accounts[0]});
		const boolcsb2K8 = await XenoFelixlSy8ixL.approve.call(addressXdYp0u2, uintm4NfSy, {from: accounts[3]});
		const boolezOw62O = await XenoFelixlSy8ixL.transfer.call(addressSfVUPy, uintRBK1bAv, {from: accounts[2]});
		const boolmhtZy5r = await XenoFelixlSy8ixL.burnOwner.call(addressrIesSGs, uintRqqdGFW, {from: accounts[1]});
		const boolVT0M3kj = await XenoFelixlSy8ixL.transferWithLock.call(addressYeLwVN, uintNaGZlvx, uintRpqDaH, {from: accounts[1]});
		await XenoFelixlSy8ixL.whenPaused.call({from: accounts[2]});

		assert.equal(boolDzePksO, true)
		await expect(XenoFelixlSy8ixL.removePauser.call(addressLk5ci3p, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string4IUheZ = "NHuDZWrNtoqrU86MRaBE6eIUfI15OplkYvyVDvXYX9f2ocEjMrlSBc2hSJgoOxzkxHwOYggkCzHTnfkN"
		const stringhbNuh1a = "NIolclO5PmQlDh6BPx4X4jXwbpgg0uCdTHixmCUwwoT0"
		const uintLnCvQn8 = BigInt("1425")
		const uintYeA1B8y = BigInt("87")
		const XenoFelixtZzKBr1 = await XenoFelix.new(string4IUheZ, stringhbNuh1a, uintLnCvQn8, uintYeA1B8y, {from: accounts[5]});
		const addressi0yEtmo = accounts[4]
		const addresshK352X = accounts[0]
		const addressqjhrukK = "0x0000000000000000000000000000000000000001"
		const addressDR39hnl = accounts[2]
		const uint256Fys7OM = await XenoFelixtZzKBr1.balanceOf.call(addressi0yEtmo, {from: "0x0000000000000000000000000000000000000001"});
		const boolVbNfane = await XenoFelixtZzKBr1.freezeAccount.call(addresshK352X, {from: accounts[5]});
		const uint256HoQzrPR = await XenoFelixtZzKBr1.allowance.call(addressDR39hnl, addressqjhrukK, {from: accounts[1]});

		assert.equal(boolVbNfane, true)
		assert.equal(uint256Fys7OM, BigInt("0"))
		assert.equal(uint256HoQzrPR, BigInt("0"))
	});
})